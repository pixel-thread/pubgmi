import { prisma } from "@/libs/db";

export const getUserWalletById = async (id: string) => {
  return await prisma.wallet.findUnique({ where: { userId: id } });
};
