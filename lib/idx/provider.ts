import { IDXProviderName, Listing, ListingSearchParams, ListingSearchResult } from "./types";
import { searchMockListings, getMockListing } from "./mock-provider";

/**
 * Single source of truth for which IDX backend is active.
 * Switch providers with the IDX_PROVIDER env var — no component changes needed.
 *
 *   mock          → preview data (default, dev only)
 *   matrix-iframe → Canopy Matrix / IDX Broker / Showcase iframe embed
 *                   (search handled by IDXEmbed component, not these functions)
 *   mls-grid      → RESO Web API (lib/idx/mls-grid.ts — add when credentials arrive)
 *   bridge-api    → Bridge RESO API (lib/idx/bridge-api.ts — add when credentials arrive)
 */
export function getProviderName(): IDXProviderName {
  return (process.env.IDX_PROVIDER as IDXProviderName) || "mock";
}

/** True when listings are rendered via an embedded iframe/widget rather than our own UI. */
export function isEmbedProvider(): boolean {
  return getProviderName() === "matrix-iframe";
}

export async function searchListings(params: ListingSearchParams): Promise<ListingSearchResult> {
  const provider = getProviderName();
  // mls-grid / bridge-api: import and call here once credentials are supplied.
  // if (provider === "mls-grid") return (await import("./mls-grid")).searchMLSGrid(params);
  // if (provider === "bridge-api") return (await import("./bridge-api")).searchBridgeAPI(params);
  return searchMockListings(params);
}

export async function getListing(id: string): Promise<Listing | null> {
  const provider = getProviderName();
  // if (provider === "mls-grid") return (await import("./mls-grid")).getMLSGridListing(id);
  // if (provider === "bridge-api") return (await import("./bridge-api")).getBridgeAPIListing(id);
  return getMockListing(id);
}
