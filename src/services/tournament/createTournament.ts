import { prisma } from "@/libs/db";

type Props = {
  name: string;
  fee: number;
};

export async function createTournament({ name, fee }: Props) {
  return await prisma.tournament.create({
    data: {
      name: name,
      fee: fee,
      round: {
        create: {
          number: 1,
        },
      },
    },
  });
}
