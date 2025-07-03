import { UnauthorizedError } from "../errors/unAuthError";
import { tokenMiddleware } from "../middleware/tokenMiddleware";

export async function getTokenFromRequest(req: Request): Promise<string> {
  await tokenMiddleware(req);
  const authorizationHeader = req.headers.get("authorization");
  if (!authorizationHeader) {
    throw new UnauthorizedError("Unauthorized");
  }

  const parts = authorizationHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new UnauthorizedError("Unauthorized");
  }

  const token = parts[1];

  if (!token) {
    throw new UnauthorizedError("Unauthorized");
  }

  return token;
}
