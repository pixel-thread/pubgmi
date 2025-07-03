import { env } from "@/env";
import { ErrorResponse } from "@/libs/errorResponse";
import { sendEmailOTP } from "@/libs/mailer";
import { SuccessResponse } from "@/libs/successResponse";
import { renderOtpEmail } from "@/libs/templates/otpEmailTemplate";
import { createUserOtp } from "@/services/otp/createUserOtp";
import { getUserByEmail } from "@/services/user/getUserByEmail";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { generateSixDigitNumber } from "@/utils/generateFiveDigitNumber";
import { logger } from "@/utils/logger";
import { registerSchema } from "@/utils/validation/auth/register";

export async function POST(req: Request) {
  try {
    const body = registerSchema.pick({ email: true }).parse(await req.json());

    const isUserExist = await getUserByEmail({ email: body.email });

    if (!isUserExist) {
      return SuccessResponse({
        status: 404,
        message: "User Not Found",
      });
    }

    const user = await getUserByEmail({ email: body.email });

    if (!user) {
      logger.error({ message: "User Not Found" });
      return ErrorResponse({
        status: 400,
        message: "User not found",
      });
    }

    logger.info({ message: "Generating OTP" });

    const otpCode = generateSixDigitNumber();

    logger.info({ message: "OTP Generated" });

    await createUserOtp({ userId: user.id });

    logger.info({ message: "Sending OTP TO" });

    if (env.NODE_ENV === "production") {
      await sendEmailOTP({
        to: body.email,
        subject: "Pixel Bet OTP",
        text: `Your OTP is ${otpCode}`,
        html: renderOtpEmail({
          userName: user.name,
          otpCode: String(otpCode),
          appName: "Pixel Bet",
        }),
      });
    }

    if (env.NODE_ENV === "development") {
      logger.info({ otpCode: otpCode });
    }

    logger.info({ message: "OTP Sent Successfully" });

    return SuccessResponse({
      status: 201,
      message: "OTP Sent Successfully to your email",
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
