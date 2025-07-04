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
    const teams = await prisma.team.findMany({
      where: { tournamentId: id },
      include: { players: true },
      orderBy: { teamNumber: "asc" },
    });

    if (!teams) {
      return ErrorResponse({ message: "No Teams found", status: 404 });
    }

    return SuccessResponse({
      data: teams,
      message: "Teams found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
