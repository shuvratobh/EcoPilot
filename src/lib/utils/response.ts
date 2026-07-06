/**
 * Typed API Response Builders
 *
 * Ensures all API route handlers return consistent response shapes.
 * Based on: docs/11_API_SPECIFICATION.md — Standard Response Format
 */

import { NextResponse } from "next/server";
import { getErrorResponse } from "@/lib/errors";

// ── Response Types ────────────────────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiPaginated<T> {
  success: true;
  data: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
  errors?: Record<string, string[]>;
}

// ── Builder Functions ─────────────────────────────────────────────────────────

/**
 * Returns a 200 OK JSON response.
 */
export function successResponse<T>(data: T, message?: string): NextResponse<ApiSuccess<T>> {
  return NextResponse.json({ success: true, data, ...(message && { message }) });
}

/**
 * Returns a 201 Created JSON response.
 */
export function createdResponse<T>(data: T): NextResponse<ApiSuccess<T>> {
  return NextResponse.json({ success: true, data }, { status: 201 });
}

/**
 * Returns a paginated 200 OK JSON response.
 */
export function paginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  pageSize: number,
): NextResponse<ApiPaginated<T>> {
  return NextResponse.json({
    success: true,
    data,
    meta: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  });
}

/**
 * Returns an error response from any thrown value.
 * Never exposes stack traces.
 */
export function errorResponse(error: unknown): NextResponse<ApiError> {
  const { message, code, statusCode, errors } = getErrorResponse(error);

  return NextResponse.json(
    {
      success: false,
      message,
      code,
      ...(errors && { errors }),
    },
    { status: statusCode },
  );
}

/**
 * Returns a 204 No Content response.
 */
export function noContentResponse(): NextResponse<never> {
  return new NextResponse(null, { status: 204 });
}
