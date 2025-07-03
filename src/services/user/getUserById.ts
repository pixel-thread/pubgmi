import { prisma } from "@/libs/db";

export async function getUserById({ id }: { id: string }) {
  return await prisma.user.findUnique({
    where: { id },
    omit: { updatedAt: true, createdAt: true, isInternal: true },
  });
}
