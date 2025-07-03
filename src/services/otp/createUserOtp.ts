import { prisma } from "@/libs/db";
import { generateSixDigitNumber } from "@/utils/generateFiveDigitNumber";

type Props = {
  userId: string;
};
export async function createUserOtp({ userId }: Props) {
  const otpCode = generateSixDigitNumber();
  return await prisma.otp.create({
    data: {
      userId: userId,
      otp: otpCode.toString(),
      isOtpUsed: false,
      otpCreatedAt: new Date(),
      otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    },
  });
}
