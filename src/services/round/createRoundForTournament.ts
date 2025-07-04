import { prisma } from "@/libs/db";

type Props = {
  tournamentId: string;
  number: number;
};

// Create a round for a tournament with given round number
export async function createRoundForTournament({
  tournamentId,
  number,
}: Props) {
  return prisma.round.create({
    data: {
      number: number,
      tournament: { connect: { id: tournamentId } },
    },
  });
}
