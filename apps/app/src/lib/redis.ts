import Redis, { RedisOptions } from "ioredis"

import { env } from "./env"
const redisUrl = env.REDIS_URL
if (!redisUrl) {
  throw new Error("REDIS_URL is not set")
}
const redisUrlParts = new URL(redisUrl)
const redisOptionsFromUrl: RedisOptions = {
  host: redisUrlParts.hostname,
  port: parseInt(redisUrlParts.port),
  username: redisUrlParts.username || undefined,
  password: redisUrlParts.password || undefined,
  tls:
    redisUrlParts.protocol === "rediss:"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
}

export const redis = new Redis(redisOptionsFromUrl)
