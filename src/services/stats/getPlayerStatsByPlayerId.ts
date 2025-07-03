import { prisma } from "@/libs/db";

type Props = {
  playerId: string;
};
export async function getPlayerStatsByPlayerId({ playerId }: Props) {
  return await prisma.playerStats.findUnique({
    where: { playerId: playerId },
  });
}
