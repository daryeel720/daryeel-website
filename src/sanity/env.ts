export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// True once real Sanity credentials have been added to .env.local.
// Until then, pages fall back to the default hardcoded content so the
// site keeps working normally.
export const isSanityConfigured = Boolean(projectId && dataset);
