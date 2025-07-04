import { prisma } from "@/libs/db";

type Player = {
  name: string;
  id: string;
  createdAt: Date;
  userId: string;
  teamId: string | null;
};

type Team = {
  id: string;
  name: string;
  createdAt: Date;
  teamStatsId: string | null;
  teamNumber: number;
  playerStatsId: string | null;
  fixturesId: string | null;
  tournamentId: string | null;
  players: Player[];
};

type Props = {
  createdTeams: Team[];
  tournamentId: string;
  roundId: string;
};

export async function createTeamStatsForTeams({
  createdTeams,
  tournamentId,
  roundId,
}: Props) {
  return Promise.all(
    createdTeams.map((team) =>
      prisma.teamStats.create({
        data: {
          total: 0,
          position: 0,
          kills: 0,
          deaths: 0,
          kd: 0,
          teamId: team.id,
          team: { connect: { id: team.id } },
          tournament: { connect: { id: tournamentId } },
          round: { connect: { id: roundId } },
          playerTeamStats: {
            create: team.players.map((p) => ({
              team: { connect: { id: team.id } },
              position: 0,
              player: { connect: { id: p.id } },
              kills: 0,
              deaths: 0,
              kd: 0,
              total: 0,
            })),
          },
        },
      }),
    ),
  );
}
