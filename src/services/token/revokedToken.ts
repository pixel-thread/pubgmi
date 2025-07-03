import { prisma } from "@/libs/db";

type Props = {
  tokenId: string;
  token?: string;
};

export async function revokedToken({ token, tokenId }: Props) {
  return await prisma.token.update({
    where: { id: tokenId, token: token },
    data: {
      revoked: true,
      revokedAt: new Date(),
    },
  });
}
