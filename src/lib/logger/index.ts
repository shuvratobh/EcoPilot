/**
 * Centralized Logger
 *
 * Provides structured logging with environment-aware verbosity.
 * Development: verbose console output with colours
 * Production: minimal, structured, never logs sensitive data
 *
 * Based on: docs/01_MASTER_RULES.md — Logging rules
 * Based on: docs/13_SECURITY_GUIDELINES.md — Logging section
 *
 * NEVER log: passwords, tokens, secrets, sensitive document contents
 * ALWAYS log: errors, auth events, AI requests, uploads, report generation
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: string;
  data?: Record<string, unknown>;
  timestamp: string;
}

const isDevelopment = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

function formatEntry(entry: LogEntry): string {
  const prefix = `[${entry.timestamp}] [${entry.level.toUpperCase()}]${entry.context ? ` [${entry.context}]` : ""}`;
  const data = entry.data ? ` ${JSON.stringify(entry.data)}` : "";
  return `${prefix} ${entry.message}${data}`;
}

function log(level: LogLevel, message: string, context?: string, data?: Record<string, unknown>): void {
  // Suppress all logging in test environment
  if (isTest) return;

  const entry: LogEntry = {
    level,
    message,
    context,
    data,
    timestamp: new Date().toISOString(),
  };

  const formatted = formatEntry(entry);

  switch (level) {
    case "debug":
      // eslint-disable-next-line no-console
      if (isDevelopment) console.log(`🔍 ${formatted}`);
      break;
    case "info":
      // eslint-disable-next-line no-console
      if (isDevelopment) console.log(`ℹ️  ${formatted}`);
      break;
    case "warn":
      console.warn(`⚠️  ${formatted}`);
      break;
    case "error":
      console.error(`❌ ${formatted}`);
      break;
  }
}

// ── Logger Factory ────────────────────────────────────────────────────────────

/**
 * Creates a scoped logger for a specific context (e.g. a service or API route).
 *
 * Usage:
 *   const logger = createLogger("ResourceService");
 *   logger.info("Record created", { resourceType: "Electricity" });
 */
export function createLogger(context: string) {
  return {
    debug: (message: string, data?: Record<string, unknown>) =>
      log("debug", message, context, data),
    info: (message: string, data?: Record<string, unknown>) =>
      log("info", message, context, data),
    warn: (message: string, data?: Record<string, unknown>) =>
      log("warn", message, context, data),
    error: (message: string, data?: Record<string, unknown>) =>
      log("error", message, context, data),
  };
}

// ── Default logger (no context) ───────────────────────────────────────────────
export const logger = createLogger("EcoPilot");
