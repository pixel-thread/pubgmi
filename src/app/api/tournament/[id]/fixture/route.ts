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
    const fixture = await prisma.fixture.findFirst({
      where: { tournamentId: id },
      include: {
        teams: {
          orderBy: { teamNumber: "asc" }, // sort by createdAt in ascending order so new will be first
          include: { players: true },
        },
      },
    });

    if (!fixture) {
      return ErrorResponse({ message: "Fixture not found", status: 404 });
    }

    return SuccessResponse({
      data: fixture,
      message: "Fixture found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
