import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string().min(1),
    INTERNAL_CODE: z.string().min(6, "Invalid OTP").max(6, "Invalid OTP"),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: { NEXT_PUBLIC_API_URL: z.string().url() },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    INTERNAL_CODE: process.env.INTERNAL_CODE,
  },
});
