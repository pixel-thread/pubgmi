import { ErrorResponse } from "@/libs/errorResponse";
import { SuccessResponse } from "@/libs/successResponse";
import { createUser } from "@/services/user/createUser";
import { getUserByEmail } from "@/services/user/getUserByEmail";
import { getUserByPhone } from "@/services/user/getUserByPhone";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { registerSchema } from "@/utils/validation/auth/register";

export async function POST(req: Request) {
  try {
    const body = registerSchema.parse(await req.json());

    const isUserExist = await getUserByEmail({ email: body.email });

    if (isUserExist) {
      return ErrorResponse({
        message: "User by this email already exist",
        status: 400,
      });
    }

    const isUserPhoneExist = await getUserByPhone({ phone: body.phone });

    if (isUserPhoneExist) {
      return ErrorResponse({
        message: "User by this phone no already exist",
        status: 400,
      });
    }

    const createdUser = await createUser({ data: body });

    return SuccessResponse({
      data: createdUser,
      message: "User created successfully. Please login",
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
