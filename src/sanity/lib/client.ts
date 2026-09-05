import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

/**
 * Fetches from Sanity if it's configured, otherwise returns null so the
 * caller can fall back to default content. Never throws — a misbehaving
 * or not-yet-configured Sanity project should never break the live site.
 */
export async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error("Sanity fetch failed, falling back to default content:", error);
    return null;
  }
}
