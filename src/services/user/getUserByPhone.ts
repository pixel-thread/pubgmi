import { prisma } from "@libs/db";

export async function getUserByPhone({ phone }: { phone: string }) {
  return await prisma.user.findUnique({
    where: { phone },
  });
}
