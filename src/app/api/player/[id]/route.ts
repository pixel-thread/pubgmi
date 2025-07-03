import { SuccessResponse } from "@/libs/successResponse";
import { getPlayerById } from "@/services/player/getPlayerById";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const player = await getPlayerById({ id });
    return SuccessResponse({
      message: "Players fetched successfully",
      data: player,
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
