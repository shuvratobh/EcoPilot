/**
 * Shared Application Error Classes
 *
 * Provides a typed error hierarchy for consistent error handling across
 * services, repositories, and API route handlers.
 *
 * Based on: docs/01_MASTER_RULES.md — Error Handling
 * Based on: docs/13_SECURITY_GUIDELINES.md — Error Handling section
 *
 * Rules:
 * - Never expose stack traces to clients
 * - Return generic user-friendly messages externally
 * - Log detailed information internally
 */

import { type NextResponse } from "next/server";

// ── Base Error ────────────────────────────────────────────────────────────────

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode = 500, code = "INTERNAL_ERROR") {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    // Capture stack trace (V8 environments)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// ── HTTP Errors ───────────────────────────────────────────────────────────────

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(message, 400, "BAD_REQUEST");
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required") {
    super(message, 401, "UNAUTHORIZED");
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "You do not have permission to perform this action") {
    super(message, 403, "FORBIDDEN");
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

export class ConflictError extends AppError {
  constructor(message = "A conflict occurred") {
    super(message, 409, "CONFLICT");
  }
}

export class ValidationError extends AppError {
  public readonly errors: Record<string, string[]>;

  constructor(errors: Record<string, string[]>, message = "Validation failed") {
    super(message, 422, "VALIDATION_ERROR");
    this.errors = errors;
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Too many requests. Please try again later.") {
    super(message, 429, "RATE_LIMIT_EXCEEDED");
  }
}

// ── Domain Errors ─────────────────────────────────────────────────────────────

export class MultiTenancyError extends AppError {
  constructor() {
    super("Access denied: resource does not belong to your organization", 403, "MULTI_TENANCY_VIOLATION");
  }
}

export class AIServiceError extends AppError {
  constructor(message = "The AI service is temporarily unavailable. Please try again.") {
    super(message, 503, "AI_SERVICE_ERROR");
  }
}

export class DocumentProcessingError extends AppError {
  constructor(message = "Document could not be processed") {
    super(message, 422, "DOCUMENT_PROCESSING_ERROR");
  }
}

export class StorageError extends AppError {
  constructor(message = "File storage operation failed") {
    super(message, 500, "STORAGE_ERROR");
  }
}

// ── Error Guard ───────────────────────────────────────────────────────────────

/**
 * Type guard to check if an unknown value is an AppError.
 */
export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

/**
 * Converts any thrown value to an AppError for consistent handling.
 */
export function toAppError(error: unknown): AppError {
  if (isAppError(error)) return error;
  if (error instanceof Error) {
    return new AppError(error.message);
  }
  return new AppError("An unexpected error occurred");
}

/**
 * Gets the HTTP response shape from any error.
 * Used in API route handlers to return consistent error responses.
 */
export function getErrorResponse(error: unknown): {
  message: string;
  code: string;
  statusCode: number;
  errors?: Record<string, string[]>;
} {
  const appError = toAppError(error);

  return {
    message: appError.isOperational
      ? appError.message
      : "An unexpected error occurred",
    code: appError.code,
    statusCode: appError.statusCode,
    ...(appError instanceof ValidationError && { errors: appError.errors }),
  };
}

// Re-export NextResponse type for convenience
export type { NextResponse };
