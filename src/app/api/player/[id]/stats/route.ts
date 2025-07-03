import { ErrorResponse } from "@/libs/errorResponse";
import { SuccessResponse } from "@/libs/successResponse";
import { getPlayerById } from "@/services/player/getPlayerById";
import { getPlayerStatsByPlayerId } from "@/services/stats/getPlayerStatsByPlayerId";
import { updatePlayerStats } from "@/services/stats/updatePlayerStats";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { statsSchema } from "@/utils/validation/stats";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const player = getPlayerById({ id: id });
    if (!player) {
      return ErrorResponse({ message: "Player not found", status: 404 });
    }
    const stats = await getPlayerStatsByPlayerId({ playerId: id });
    return SuccessResponse({
      data: stats,
      message: "Stats found",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const player = getPlayerById({ id: id });

    if (!player) {
      return ErrorResponse({ message: "Player not found", status: 404 });
    }

    const body = statsSchema.parse(await req.json());

    const stats = await updatePlayerStats({
      playerId: id,
      stats: body,
    });

    return SuccessResponse({
      data: stats,
      message: "Stats updated",
      status: 200,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
