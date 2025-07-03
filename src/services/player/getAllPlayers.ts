import { prisma } from "@/libs/db";
import { getPagination } from "@/utils/pagination";

type GetAllPlayersProps = {
  page?: string | number;
};

export async function getAllPlayers({ page }: GetAllPlayersProps = {}) {
  const { skip, take } = getPagination({ page });
  return prisma.$transaction([
    prisma.player.findMany({
      skip,
      take,
      where: { user: { role: "USER" } },
      include: { playerStats: true },
    }),
    prisma.player.count(),
  ]);
}
