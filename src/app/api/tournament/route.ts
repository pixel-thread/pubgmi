import { SuccessResponse } from "@/libs/successResponse";
import { tournamentSchema } from "@/utils/validation/tournament";
import { createFixtures } from "@/utils/fixture/createFixture";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { createRoundForTournament } from "@/services/round/createRoundForTournament";
import { createTournament } from "@/services/tournament/createTournament";
import { createTournamentFixture } from "@/services/fixture/createTournamentFixture";
import { createTeams } from "@/services/teams/createTeams";
import { createTeamStatsForTeams } from "@/services/stats/createTeamStats";
import { createTournamentTeams } from "@/services/teams/createTournamentTeams";
import { createTeamsForRound } from "@/services/teams/createTeamRound";
import { getPlayersStats } from "@/services/stats/getPlayersStats";
import { prisma } from "@/libs/db";
import { logger } from "@/utils/logger";

export async function GET(req: Request) {
  try {
    const tournaments = await prisma.tournament.findMany();

    return SuccessResponse({
      data: tournaments,
      message: "Tournaments found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = tournamentSchema.parse(await req.json());

    const tournament = await createTournament({
      name: body.name,
      fee: body.fee,
    });

    const round = await createRoundForTournament({
      tournamentId: tournament.id,
      number: 1,
    });
    // Step 2: Get all players
    const players = await getPlayersStats();

    const playerStats = players.map((p) => ({
      id: p.id,
      kd: p?.playerStats?.kd || 0,
      win: p?.playerStats?.wins || 0,
      name: p.name,
    }));
    // Step 3: Generate balanced teams
    if (body.feeCut) {
      for (const player of playerStats) {
        await prisma.wallet.update({
          where: { playerId: player.id },
          data: {
            amount: { decrement: tournament.fee },
          },
        });
      }
    }

    const { teams, unpairedPlayer } = createFixtures(playerStats);

    // Step 4: Create teams in parallel (outside transaction for performance)
    const createdTeams = await createTeams({
      teams: teams,
      roundId: round.id,
      tournamentId: tournament.id,
    });

    // Step 5: Add unpaired player as solo team
    if (unpairedPlayer) {
      const soloTeam = await createTournamentTeams({
        data: {
          name: `Team ${createdTeams.length + 1}`,
          teamNumber: createdTeams.length + 1,
          players: { connect: [{ id: unpairedPlayer.id }] },
        },
      });
      createdTeams.push(soloTeam);
    }

    // Step 5: Add teams to round
    await createTeamsForRound({
      teams: createdTeams,
      roundId: round.id,
      tournamentId: tournament.id,
    });

    await createTeamStatsForTeams({
      createdTeams,
      tournamentId: tournament.id,
      roundId: round.id,
    });

    logger.log({ message: "Round created" });
    // Step 6: Create fixture linking all created teams to the tournament
    await createTournamentFixture({
      createdTeams,
      tournament: { id: tournament.id },
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
