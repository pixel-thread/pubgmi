import { prisma } from "@/libs/db";

interface PlayerStats {
  id: string;
  kd: number;
  win: number;
}
type Props = {
  teams: PlayerStats[][];
  roundId: string;
  tournamentId: string;
};

export async function createTeams({ teams, roundId, tournamentId }: Props) {
  return await Promise.all(
    teams.map((team, idx) =>
      prisma.team.create({
        data: {
          name: `Team ${idx + 1}`,
          teamNumber: idx + 1,
          players: { connect: team.map((player) => ({ id: player.id })) },
          teamRound: { create: { round: { connect: { id: roundId } } } },
          tournamentId: tournamentId,
        },
        include: { players: true },
      }),
    ),
  );
}
