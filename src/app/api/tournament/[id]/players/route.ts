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

    const tournament = await prisma.tournament.findUnique({
      where: { id },
      include: {
        team: {
          include: {
            players: {
              include: { user: true },
            },
          },
        },
      },
    });

    if (!tournament) {
      return ErrorResponse({ message: "Tournament not found", status: 404 });
    }

    // Extract and flatten all players from all teams
    const allPlayers = tournament.team.flatMap((team) =>
      team.players.map((player) => ({
        playerId: player.id,
        name: player.user?.name || null,
        userId: player.userId,
        teamId: team.id,
        teamName: team.name,
      })),
    );

    return SuccessResponse({
      data: allPlayers,
      message: "Tournament players retrieved successfully",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
