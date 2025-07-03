import { prisma } from "@/libs/db";
import { addDays } from "@/utils/token/addDays";

type Props = {
  userId: string;
  token: string;
  userAgent: string;
};
export async function addNewToken({ userId, token, userAgent }: Props) {
  return await prisma.token.create({
    data: {
      expiresAt: addDays(new Date(), 1),
      token: token,
      userId,
      userAgent,
    },
  });
}
