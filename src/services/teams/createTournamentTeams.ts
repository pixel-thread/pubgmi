import { prisma } from "@/libs/db";
import { Prisma } from "@/libs/db/generated/client";

type Props = {
  data: Prisma.TeamCreateInput;
};

export async function createTournamentTeams({ data }: Props) {
  return await prisma.team.create({
    data: data,
    include: { players: true },
  });
}
