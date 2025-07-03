import { SuccessResponse } from "@/libs/successResponse";
import { getAllPlayers } from "@/services/player/getAllPlayers";
import { handleApiErrors } from "@/utils/errors/handleApiErrors";
import { getMeta } from "@/utils/pagination/getMeta";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const page = req.nextUrl.searchParams.get("page") || "1";
    const [players, total] = await getAllPlayers();
    return SuccessResponse({
      message: "Players fetched successfully",
      data: players,
      meta: getMeta({ currentPage: page, total: total }),
    });
  } catch (error) {
    return handleApiErrors(error);
  }
}
