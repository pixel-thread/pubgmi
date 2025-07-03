import { prisma } from "@libs/db";

export async function getUserByEmail({ email }: { email: string }) {
  return await prisma.user.findUnique({
    where: { email },
  });
}
