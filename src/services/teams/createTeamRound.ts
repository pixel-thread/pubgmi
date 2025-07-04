import { prisma } from "@/libs/db";

type Props = {
  teams: { id: string }[];
  roundId: string;
  tournamentId: string;
};

export async function createTeamsForRound({
  teams,
  roundId,
  tournamentId,
}: Props) {
  return await Promise.all(
    teams.map((team) =>
      prisma.teamRound.create({
        data: {
          tournament: { connect: { id: tournamentId } },
          round: { connect: { id: roundId } },
          team: { connect: { id: team.id } },
        },
      }),
    ),
  );
}
