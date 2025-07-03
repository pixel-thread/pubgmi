import { z } from "zod";

export const statsSchema = z
  .object({
    kills: z.number(),
    deaths: z.number(),
    matches: z.number(),
    kd: z.number().optional(),
    position: z.number().optional().default(0),
    total: z.number().optional(),
    wins: z.number().optional(),
  })
  .transform((data) => {
    // Calculate kd safely
    const kd = data.deaths === 0 ? data.kills : data.kills / data.deaths;

    // Define pts mapping
    const ptsMapping: Record<number, number> = {
      1: 10,
      2: 6,
      3: 5,
      4: 4,
      5: 3,
      6: 2,
      7: 1,
      8: 1,
    };

    // Base total is always kills * 1
    let total = data.kills * 1;

    // Add mapped pts value if in 1-8
    if (data.position !== undefined && ptsMapping[data.position]) {
      total += ptsMapping[data.position];
    }

    // pts >= 9 adds nothing extra (already default)

    return {
      ...data,
      kd,
      total,
    };
  });
