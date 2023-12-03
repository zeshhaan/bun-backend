import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL as string,
    authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
  },
  verbose: true,
  strict: false,
} satisfies Config;
