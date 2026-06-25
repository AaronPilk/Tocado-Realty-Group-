import { Listing, ListingSearchParams, ListingSearchResult } from "./types";
import { mockListings } from "@/data/mock-listings";

function applyFilters(items: Listing[], p: ListingSearchParams): Listing[] {
  return items.filter((l) => {
    if (p.featured && !l.featured) return false;
    if (p.status && p.status !== "Any" && l.status !== p.status) return false;
    if (p.city && l.city.toLowerCase() !== p.city.toLowerCase()) return false;
    if (p.zip && l.zip !== p.zip) return false;
    if (p.minPrice && l.listPrice < p.minPrice) return false;
    if (p.maxPrice && l.listPrice > p.maxPrice) return false;
    if (p.beds && (l.beds ?? 0) < p.beds) return false;
    if (p.baths && (l.baths ?? 0) < p.baths) return false;
    if (p.minSqft && (l.sqft ?? 0) < p.minSqft) return false;
    if (p.maxSqft && (l.sqft ?? 0) > p.maxSqft) return false;
    if (p.propertyType && p.propertyType !== "Any" && l.propertyType !== p.propertyType) return false;
    if (p.query) {
      const q = p.query.toLowerCase();
      const hay = `${l.address} ${l.city} ${l.zip} ${l.subdivision ?? ""} ${l.mlsNumber ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function sortListings(items: Listing[], sort: ListingSearchParams["sort"]): Listing[] {
  const arr = [...items];
  switch (sort) {
    case "price-desc": return arr.sort((a, b) => b.listPrice - a.listPrice);
    case "price-asc": return arr.sort((a, b) => a.listPrice - b.listPrice);
    case "beds": return arr.sort((a, b) => (b.beds ?? 0) - (a.beds ?? 0));
    case "sqft": return arr.sort((a, b) => (b.sqft ?? 0) - (a.sqft ?? 0));
    default: return arr.sort((a, b) => (a.daysOnMarket ?? 0) - (b.daysOnMarket ?? 0));
  }
}

export async function searchMockListings(params: ListingSearchParams): Promise<ListingSearchResult> {
  const page = params.page || 1;
  const limit = params.limit || 24;
  const filtered = sortListings(applyFilters(mockListings, params), params.sort);
  const start = (page - 1) * limit;
  return {
    listings: filtered.slice(start, start + limit),
    total: filtered.length,
    page,
    limit,
  };
}

export async function getMockListing(id: string): Promise<Listing | null> {
  return mockListings.find((l) => l.id === id || l.mlsNumber === id) ?? null;
}
