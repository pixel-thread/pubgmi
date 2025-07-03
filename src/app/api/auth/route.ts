import { handleApiErrors } from "@utils/errors/handleApiErrors";
import { NextRequest } from "next/server";
import { generateToken } from "@/utils/token/generateToken";
import { verifyToken } from "@/utils/token/verifyToken";
import { getUserById } from "@/services/user/getUserById";
import { SuccessResponse } from "@/libs/successResponse";
import { ErrorResponse } from "@/libs/errorResponse";
import { addNewToken } from "@/services/token/addNewToken";
import { env } from "@/env";
import { logger } from "@/utils/logger";
import { getUserByEmail } from "@/services/user/getUserByEmail";
import { getUnUsedOtp } from "@/services/otp/getUnUserOtp";
import { revokedToken } from "@/services/token/revokedToken";
import { getTokenStillValid } from "@/services/token/getTokenStillValid";
import { UnauthorizedError } from "@/utils/errors/unAuthError";
import { getTokenFromRequest } from "@/utils/token/getTokenFromRequest";
import { authSchema } from "@/utils/validation/auth";
import { revokedUserOtp } from "@/services/otp/revokedUserOtp";

/**
 * GET /api/v1/auth
 * Retrieves the authenticated user's profile information
 *
 * @requires Authorization Bearer token in header
 *
 * @returns {Object} Success Response
 *   - 200: User profile data
 *   - 401: Unauthorized - Invalid or missing token
 *   - 404: User not found
 */

export async function GET(req: NextRequest) {
  try {
    const token = await getTokenFromRequest(req);

    const decoded = await verifyToken(token);

    if (!decoded || !decoded.id) {
      throw new UnauthorizedError("Unauthorized");
    }

    const user = await getUserById({ id: decoded.id });
    if (!user) {
      throw new UnauthorizedError("Unauthorized");
    }

    return SuccessResponse({
      data: user,
      message: "User verified successfully",
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}

/**
 * POST /api/v1/auth
 * Authenticates a user and manages token issuance
 *
 * @requires Request Body
 *   - email: string
 *   - password: string
 *
 * @returns {Object} Response
 *   - 200: {
 *       success: boolean,
 *       token: string,
 *       message: string
 *     }
 *   - 401: Invalid credentials
 *   - 404: User not found
 *
 * @description
 * - Validates user credentials
 * - Checks for existing valid tokens
 * - Issues new token if needed
 * - Sets AUTH_TOKEN cookie
 * - Token expires in 24 hours
 */

export async function POST(req: Request) {
  try {
    const body = authSchema.parse(await req.json());

    const user = await getUserByEmail({ email: body.email });

    if (!user) {
      return ErrorResponse({
        message: "User not found",
        status: 404,
      });
    }

    const INTERNAL_CODE = env.INTERNAL_CODE;

    const otpExist = await getUnUsedOtp({ userId: user.id });

    if (!otpExist) {
      return ErrorResponse({
        message: "Please enter valid OTP",
        status: 404,
      });
    }

    if (user.isInternal) {
      // For internal users, check if OTP matches either internal code or user's OTP
      if (otpExist.otpExpiresAt < new Date()) {
        return ErrorResponse({
          message: "OTP expired",
          status: 401,
        });
      }

      if (body.otp !== INTERNAL_CODE && body.otp !== otpExist.otp) {
        return ErrorResponse({
          message: "Invalid OTP Internal",
          status: 401,
        });
      }
    } else {
      // For non-internal users, check only against user's OTP
      if (otpExist.otpExpiresAt < new Date()) {
        return ErrorResponse({
          message: "OTP expired",
          status: 401,
        });
      }

      if (body.otp !== otpExist.otp) {
        return ErrorResponse({
          message: "Invalid OTP",
          status: 401,
        });
      }
    }

    // Generate token after successful OTP validation
    // Check for existing valid token before generating a new one
    await revokedUserOtp({ userId: user.id });

    const now = new Date();

    const existingToken = await getTokenStillValid({ token: user.id });

    let tokenValue;

    if (existingToken && existingToken.expiresAt > now) {
      // Use existing valid token
      tokenValue = existingToken.token;
    } else {
      // Revoke expired token if it exists
      if (existingToken) {
        await revokedToken({
          tokenId: existingToken.id,
          token: existingToken.token,
        });
      }

      // Generate new token
      tokenValue = await generateToken({ id: user.id });

      // Store the new token
      await addNewToken({
        token: tokenValue,
        userId: user.id,
        userAgent: req.headers.get("user-agent") || "N/A",
      });
    }

    // Return success response with token
    const response = SuccessResponse({
      token: tokenValue,
      message: "Login successful",
    });

    return response;
  } catch (error) {
    logger.error(error);
    return handleApiErrors(error);
  }
}
