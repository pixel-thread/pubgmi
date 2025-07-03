import { z } from "zod";

export const authSchema = z.object({
  email: z.string({ required_error: "Phone is required" }).email(),
  otp: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Min 6 Required" })
    .max(6, { message: "Max 6 Required" }),
});
