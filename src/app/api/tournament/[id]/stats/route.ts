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
    const teams = await prisma.teamStats.findMany({
      where: { tournamentId: id },
      include: { team: true, playerTeamStats: true },
    });

    if (teams.length === 0) {
      return ErrorResponse({ message: "No Stats found", status: 404 });
    }

    const data = teams.map((team) => ({
      name: team?.team?.name,
      teamNumber: team?.team?.teamNumber,
      total: team.total,
      kills: team.kills,
      deaths: team.deaths,
      kd: team.kd,
      position: team.position,
      teamId: team.teamId,
      id: team.id,
      playersStats: team.playerTeamStats,
    }));

    return SuccessResponse({
      data: data,
      message: "stats found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
