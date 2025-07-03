import { prisma } from "@/libs/db";
import { Prisma } from "@/libs/db/generated/client";

type Props = {
  playerId: string;
  stats: Prisma.PlayerStatsUpdateInput;
};
export async function updatePlayerStats({ playerId, stats }: Props) {
  return await prisma.playerStats.update({
    where: { playerId: playerId },
    data: {
      deaths: stats.deaths,
      kills: stats.kills,
      kd: stats.kd,
      matches: stats.matches,
      wins: stats.wins,
    },
  });
}
