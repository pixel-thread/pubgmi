import { prisma } from "@/libs/db";

type Props = {
  token: string;
};

export async function getTokenStillValid({ token }: Props) {
  return await prisma.token.findFirst({
    where: { token: token, revoked: false, expiresAt: { gt: new Date() } },
  });
}
