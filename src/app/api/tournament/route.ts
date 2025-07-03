import { SuccessResponse } from "@/libs/successResponse";
import { prisma } from "@/libs/db";
import { tournamentSchema } from "@/utils/validation/tournament";
import { createFixtures } from "@/utils/fixture/createFixture";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";

export async function POST(req: Request) {
  try {
    const body = tournamentSchema.parse(await req.json());

    // Step 1: Create tournament first
    const tournament = await prisma.tournament.create({
      data: {
        name: body.name,
        fee: body.fee,
      },
    });

    const round = await prisma.round.create({
      data: {
        number: 1,
        tournament: { connect: { id: tournament.id } },
      },
    });
    // Step 2: Get all players
    const players = await prisma.player.findMany({
      include: { playerStats: true },
    });

    const playerStats = players.map((p) => ({
      id: p.id,
      kd: p?.playerStats?.kd || 0,
      win: p?.playerStats?.wins || 0,
    }));

    // Step 3: Generate balanced teams
    const { teams, unpairedPlayer } = createFixtures(playerStats);

    // Step 4: Create teams in parallel (outside transaction for performance)
    const createdTeams = await Promise.all(
      teams.map((team, idx) =>
        prisma.team.create({
          data: {
            name: `Team ${idx + 1}`,
            teamNumber: idx + 1,
            players: { connect: team.map((player) => ({ id: player.id })) },
            teamRound: { create: { round: { connect: { id: round.id } } } },
          },
        }),
      ),
    );

    for (const team of createdTeams) {
      await prisma.teamStats.create({
        data: {
          total: 0,
          position: 0,
          kills: 0,
          deaths: 0,
          kd: 0,
          team: { connect: { id: team.id } },
          teamId: team.id,
          tournament: { connect: { id: tournament.id } },
          round: { connect: { id: round.id } },
        },
      });
    }
    // Step 5: Add unpaired player as solo team
    if (unpairedPlayer) {
      const soloTeam = await prisma.team.create({
        data: {
          name: `Team ${createdTeams.length + 1}`,
          teamNumber: createdTeams.length + 1,
          players: { connect: [{ id: unpairedPlayer.id }] },
        },
      });
      createdTeams.push(soloTeam);
    }

    for (const team of createdTeams) {
      await prisma.teamRound.create({
        data: {
          tournamentId: tournament.id,
          teamId: team.id,
          roundId: round.id,
        },
      });
    }
    // Step 6: Create fixture linking all created teams to the tournament
    await prisma.fixture.create({
      data: {
        tournament: {
          connect: { id: tournament.id },
        },
        teams: {
          connect: createdTeams.map((team) => ({ id: team.id })),
        },
      },
    });

    return SuccessResponse({
      data: tournament,
      message: "Tournament created with teams and fixtures",
      status: 201,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
