export type IDXProviderName =
  | "mock"
  | "matrix-iframe"
  | "mls-grid"
  | "bridge-api";

export type PropertyStatus =
  | "Active"
  | "Coming Soon"
  | "Pending"
  | "Contingent"
  | "Closed"
  | "Sold";

export interface ListingImage {
  url: string;
  caption?: string;
  order?: number;
}

export interface Listing {
  id: string;
  listingKey?: string;
  mlsNumber?: string;
  status: PropertyStatus | string;
  listPrice: number;
  closePrice?: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  county?: string;
  subdivision?: string;
  latitude?: number;
  longitude?: number;
  beds?: number;
  baths?: number;
  halfBaths?: number;
  sqft?: number;
  lotSizeAcres?: number;
  propertyType?: string;
  yearBuilt?: number;
  daysOnMarket?: number;
  description?: string;
  images: ListingImage[];
  /** Fallback CSS treatment when no photo exists yet (placeholder mode). */
  treatment?: "warm" | "dark" | "charcoal";
  listingAgent?: string;
  listingOffice?: string;
  attribution?: string;
  sourceMLS?: string;
  detailUrl?: string;
  virtualTourUrl?: string;
  featured?: boolean;
  updatedAt?: string;
  raw?: unknown;
}

export interface ListingSearchParams {
  query?: string;
  city?: string;
  county?: string;
  zip?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: string;
  status?: string;
  minSqft?: number;
  maxSqft?: number;
  featured?: boolean;
  page?: number;
  limit?: number;
  sort?: "newest" | "price-desc" | "price-asc" | "beds" | "sqft";
}

export interface ListingSearchResult {
  listings: Listing[];
  total: number;
  page: number;
  limit: number;
}
