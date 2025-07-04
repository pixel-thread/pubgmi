import { prisma } from "@/libs/db";
import { ErrorResponse } from "@/libs/errorResponse";
import { SuccessResponse } from "@/libs/successResponse";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return ErrorResponse({ message: "Id not found", status: 404 });
    }
    const teams = await prisma.tournament.findUnique({
      where: { id },
      include: { round: true },
    });

    if (!teams) {
      return ErrorResponse({
        message: "No Tournament round found",
        status: 404,
      });
    }

    return SuccessResponse({
      data: teams.round,
      message: "Tournament round found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
