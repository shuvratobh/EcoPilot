/**
 * Shared API Response Types
 *
 * Matches the response shapes defined in docs/11_API_SPECIFICATION.md
 * and built by src/lib/utils/response.ts.
 */

export interface ApiSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiPaginated<T> {
  success: true;
  data: T[];
  meta: PaginationMeta;
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
  errors?: Record<string, string[]>;
}

export interface PaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

/** Standard query params for paginated list endpoints */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

/** Standard date range filter */
export interface DateRangeParams {
  from?: string;
  to?: string;
}
