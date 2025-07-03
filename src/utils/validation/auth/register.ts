import { z } from "zod";

export const registerSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  name: z.string({ required_error: "Name is required" }),
  phone: z.string({ required_error: "Phone is required" }).min(10).max(10),
});
