import { prisma } from "@/libs/db";

type Props = {
  userId: string;
};
export async function getUnUsedOtp({ userId }: Props) {
  return await prisma.otp.findFirst({
    where: {
      isOtpUsed: false,
      userId: userId,
      otpExpiresAt: { gte: new Date() },
      otpCreatedAt: { lte: new Date() },
    },
    distinct: ["otp"], // To avoid duplicate otp
  });
}
