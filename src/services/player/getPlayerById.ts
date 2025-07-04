import { prisma } from "@/libs/db";

export async function getPlayerById({ id }: { id: string }) {
  return prisma.player.findUnique({
    where: { id },
    include: { wallet: true, user: true },
  });
}
