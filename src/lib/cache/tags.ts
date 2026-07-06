/**
 * Next.js Cache Tag Constants
 *
 * Used with revalidateTag() after mutations to invalidate cached data.
 * Prevents stale data without full page reloads.
 */

export const CACHE_TAGS = {
  // Dashboard
  dashboardSummary: (orgId: string) => `dashboard:${orgId}`,
  dashboardCharts: (orgId: string) => `charts:${orgId}`,

  // EcoScore
  ecoScore: (orgId: string) => `ecoscore:${orgId}`,
  ecoScoreHistory: (orgId: string) => `ecoscore-history:${orgId}`,

  // Resources
  resources: (orgId: string, type: string) => `resources:${orgId}:${type}`,
  resourceSummary: (orgId: string, type: string) => `resource-summary:${orgId}:${type}`,

  // Documents
  documents: (orgId: string) => `documents:${orgId}`,
  document: (id: string) => `document:${id}`,

  // Goals
  goals: (orgId: string) => `goals:${orgId}`,
  goal: (id: string) => `goal:${id}`,

  // Reports
  reports: (orgId: string) => `reports:${orgId}`,

  // Notifications
  notifications: (userId: string) => `notifications:${userId}`,

  // Organization
  organization: (orgId: string) => `organization:${orgId}`,

  // Team
  team: (orgId: string) => `team:${orgId}`,
} as const;
