import { z } from "zod";

export const tournamentSchema = z.object({
  name: z.string(),
  fee: z.number(),
});
