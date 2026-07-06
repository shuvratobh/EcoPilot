/**
 * Prisma Client Singleton
 *
 * Prevents multiple PrismaClient instances in development (hot-reload creates
 * new module instances on every change). Uses global singleton pattern.
 *
 * Never import `new PrismaClient()` directly — always import from this file.
 *
 * Based on: Prisma best practices for Next.js
 */

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
