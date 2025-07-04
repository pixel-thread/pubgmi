import { prisma } from "@/libs/db";

export async function getAllPlayersWithStats() {
  return await prisma.player.findMany({
    where: { user: { role: "USER" } },
    include: { playerStats: true },
  });
}
