/* eslint-disable no-process-env */
import { config } from "dotenv"
import { z } from "zod"

import { logger } from "@gestion-impots/lib"
import { createEnv } from "@t3-oss/env-nextjs"

if (!process.env.ENV) {
  config()
}

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    PASSWORD_HASHER_SECRET: z.string(),
    DATABASE_PRISMA_URL: z.string().min(1),
    DATABASE_URL_NON_POOLING: z.string().optional(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().optional(),
    AUTH_ADMIN_EMAIL: z.string().min(1),
    AUTH_ADMIN_PASSWORD: z.string().min(1),
    REDIS_HOST: z.string().optional(),
    REDIS_PORT: z
      .string()
      .optional()
      .transform((value) => (!!value ? parseInt(value) : undefined)),
    REDIS_USERNAME: z.string().optional(),
    REDIS_URL: z.string().optional(),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_USE_TLS: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    ENV: z.enum(["development", "staging", "preproduction", "production"]),
    VERCEL_URL: z.string().optional(),

    // Tax management specific environment variables
    MTN_MOMO_API_KEY: z.string().optional(),
    MTN_MOMO_API_SECRET: z.string().optional(),
    MTN_MOMO_SUBSCRIPTION_KEY: z.string().optional(),

    // Tax calculation settings
    TAX_BASE_AMOUNT: z
      .string()
      .optional()
      .transform((value) => (value ? parseFloat(value) : 50000)),
    TAX_YEAR: z
      .string()
      .optional()
      .transform((value) => (value ? parseInt(value) : new Date().getFullYear())),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_IS_DEMO: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    NEXT_PUBLIC_DEMO_EMAIL: z.string().optional(),
    NEXT_PUBLIC_DEMO_PASSWORD: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    PASSWORD_HASHER_SECRET: process.env.PASSWORD_HASHER_SECRET,
    DATABASE_PRISMA_URL: process.env.DATABASE_PRISMA_URL,
    DATABASE_URL_NON_POOLING: process.env.DATABASE_URL_NON_POOLING,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_ADMIN_EMAIL: process.env.AUTH_ADMIN_EMAIL,
    AUTH_ADMIN_PASSWORD: process.env.AUTH_ADMIN_PASSWORD,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_USE_TLS: process.env.REDIS_USE_TLS,
    NEXT_PUBLIC_IS_DEMO: process.env.NEXT_PUBLIC_IS_DEMO,
    NEXT_PUBLIC_DEMO_EMAIL: process.env.NEXT_PUBLIC_DEMO_EMAIL,
    NEXT_PUBLIC_DEMO_PASSWORD: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
    ENV: process.env.ENV,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    VERCEL_URL: process.env.VERCEL_URL,

    // Tax management specific environment variables
    MTN_MOMO_API_KEY: process.env.MTN_MOMO_API_KEY,
    MTN_MOMO_API_SECRET: process.env.MTN_MOMO_API_SECRET,
    MTN_MOMO_SUBSCRIPTION_KEY: process.env.MTN_MOMO_SUBSCRIPTION_KEY,

    // Tax calculation settings
    TAX_BASE_AMOUNT: process.env.TAX_BASE_AMOUNT,
    TAX_YEAR: process.env.TAX_YEAR,
  },
  onValidationError: (error) => {
    logger.error(error)
    throw "Invalid environment variables"
  },
  onInvalidAccess(variable) {
    logger.error(`Invalid access to ${variable}`)
    throw "Invalid environment variables"
  },
})

export function getEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`)
  }
  return value
}
