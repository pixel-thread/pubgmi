import { prisma } from "@/libs/db";

type Props = { userId: string };

export async function revokedUserOtp({ userId }: Props) {
  return await prisma.otp.updateMany({
    where: { userId },
    data: { isOtpUsed: true },
  });
}
