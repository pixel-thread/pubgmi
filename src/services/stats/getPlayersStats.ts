import { prisma } from "@/libs/db";

export const getPlayersStats = async () => {
  return await prisma.player.findMany({
    include: {
      playerStats: true,
    },
  });
};
