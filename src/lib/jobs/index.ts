/**
 * Background Job Infrastructure
 *
 * EcoPilot uses Next.js Route Handlers as lightweight background processors.
 * Jobs are invoked by calling their internal API route with a shared secret.
 *
 * Architecture decision: No Trigger.dev in MVP.
 * The interface is designed to be replaced with Trigger.dev later.
 *
 * Job flow:
 *   Service → POST /api/internal/jobs/<job-name> (async, no await response)
 *   Route Handler → runs job logic → updates DB
 *
 * Vercel: Route Handlers run as serverless functions (max 60s on Hobby, 300s on Pro).
 */

export interface JobPayload {
  /** Unique job identifier for idempotency */
  jobId: string;
  /** ISO timestamp when the job was created */
  createdAt: string;
}

/**
 * Internal job invoker.
 *
 * Fires a job route handler asynchronously.
 * Does NOT await the response — caller continues immediately.
 *
 * Usage:
 *   await invokeJob("analyze-document", { documentId: "..." });
 */
export async function invokeJob<T extends Record<string, unknown>>(
  jobName: string,
  payload: T,
): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const secret = process.env.JOB_SECRET;

  if (!secret) {
    throw new Error("JOB_SECRET environment variable is not set");
  }

  const jobPayload: JobPayload & T = {
    jobId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };

  // Fire and forget — we don't await this
  void fetch(`${baseUrl}/api/internal/jobs/${jobName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-job-secret": secret,
    },
    body: JSON.stringify(jobPayload),
  }).catch((error) => {
    // Log but don't throw — the job can be retried via re-processing
    console.error(`[Job] Failed to invoke ${jobName}:`, error);
  });
}

/**
 * Verify that a request is coming from an internal job invocation.
 * Call this at the top of every /api/internal/jobs/* route handler.
 */
export function verifyJobSecret(request: Request): boolean {
  const secret = request.headers.get("x-job-secret");
  return secret === process.env.JOB_SECRET;
}
