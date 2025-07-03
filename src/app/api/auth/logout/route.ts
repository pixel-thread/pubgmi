import { ErrorResponse } from "@/libs/errorResponse";
import { SuccessResponse } from "@/libs/successResponse";
import { getTokenStillValid } from "@/services/token/getTokenStillValid";
import { revokedToken } from "@/services/token/revokedToken";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";

export async function POST(req: Request) {
  try {
    const headers = req.headers;
    const bearerToken = headers.get("authorization")?.split(" ")[1];
    if (!bearerToken) {
      return ErrorResponse({ message: "Unauthorized", status: 401 });
    }

    const getToken = await getTokenStillValid({ token: bearerToken });

    if (!getToken) {
      return ErrorResponse({ message: "Unauthorized", status: 401 });
    }

    const updateToken = await revokedToken({
      token: getToken.token,
      tokenId: getToken.id,
    });

    if (updateToken) {
      return SuccessResponse({ message: "Logout successfully" });
    }

    return ErrorResponse({ message: "Token not found", status: 404 });
  } catch (error) {
    return handleApiErrors(error);
  }
}
