import { Listing } from "@/lib/idx/types";

/**
 * DEV / PREVIEW listings. NOT real MLS data. They power the Featured Properties
 * section and the custom search grid so the UI looks complete before the live
 * Canopy data feed is connected. In production (IDX_PROVIDER !== "mock") these
 * are never presented as real public inventory.
 *
 * Agent names are MOCK. Zillow links point to a Zillow address search.
 */

function zillow(address: string, city: string, state: string, zip: string) {
  const q = encodeURIComponent(`${address} ${city} ${state} ${zip}`);
  return `https://www.zillow.com/homes/${q}_rb/`;
}

type Seed = Omit<Listing, "images" | "detailUrl"> & { detailUrlParts?: never };

const seed: Seed[] = [
  {
    id: "NC-1001", mlsNumber: "4012001", status: "Active", listPrice: 1275000,
    address: "113 Cross Current Lane", city: "Belmont", state: "NC", zip: "28012", county: "Gaston",
    beds: 5, baths: 4, halfBaths: 1, sqft: 3316, propertyType: "Single Family", yearBuilt: 2018, daysOnMarket: 4,
    description: "Sample listing for preview. Elevated living in the desirable McLean South Shore waterfront community — lake access and resort-inspired amenities.",
    treatment: "warm", featured: true, listingAgent: "Olivia Forsberg", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1002", mlsNumber: "4012002", status: "Active", listPrice: 324000,
    address: "649 Ainslie Downs Street", city: "Charlotte", state: "NC", zip: "28273", county: "Mecklenburg",
    beds: 2, baths: 2, halfBaths: 1, sqft: 1667, propertyType: "Townhouse", yearBuilt: 2015, daysOnMarket: 9,
    description: "Sample listing for preview. Beautifully designed end-unit townhome with added privacy and a modern, convenient layout.",
    treatment: "charcoal", featured: true, listingAgent: "Jordan Spafan", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1003", mlsNumber: "4012003", status: "Active", listPrice: 1450000,
    address: "1023 Piney Drive", city: "Monroe", state: "NC", zip: "28110", county: "Union",
    beds: 5, baths: 6, sqft: 5320, lotSizeAcres: 2.1, propertyType: "Single Family", yearBuilt: 2020, daysOnMarket: 2,
    description: "Sample listing for preview. Custom brick-and-stone estate offering resort-style living on over 2 private acres — elegant architecture throughout.",
    treatment: "dark", featured: true, listingAgent: "Jeremy George", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1004", mlsNumber: "4012004", status: "Active", listPrice: 548000,
    address: "1836 Academy Street", city: "Charlotte", state: "NC", zip: "28205", county: "Mecklenburg",
    beds: 3, baths: 2, halfBaths: 1, sqft: 1985, propertyType: "Single Family", yearBuilt: 2019, daysOnMarket: 14,
    description: "Sample listing for preview. Contemporary home boasting modern design and high-end finishes, featuring an open layout with abundant natural light.",
    treatment: "warm", featured: true, listingAgent: "Jordan Spafan", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1005", mlsNumber: "4012005", status: "Active", listPrice: 478000,
    address: "2016 Hemlock Trail", city: "Fort Mill", state: "SC", zip: "29708", county: "York",
    beds: 4, baths: 2, halfBaths: 1, sqft: 2766, propertyType: "Single Family", yearBuilt: 2016, daysOnMarket: 7,
    description: "Sample listing for preview. Nestled in the desirable Common Creek community, this beautifully maintained home offers timeless charm and modern comfort.",
    treatment: "charcoal", featured: true, listingAgent: "Sean Boger", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1006", mlsNumber: "4012006", status: "Active", listPrice: 724900,
    address: "2020 Lake Como Drive", city: "Monroe", state: "NC", zip: "28112", county: "Union",
    beds: 4, baths: 3, halfBaths: 1, sqft: 2316, propertyType: "Single Family", yearBuilt: 2017, daysOnMarket: 11,
    description: "Sample listing for preview. Beautifully designed one-story ranch home offers easy living in the desirable Crescent at Wesley Chapel community.",
    treatment: "dark", featured: true, listingAgent: "Emily Taylor", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1007", mlsNumber: "4012007", status: "Coming Soon", listPrice: 489000,
    address: "330 Oak Street", city: "Davidson", state: "NC", zip: "28036", county: "Mecklenburg",
    beds: 3, baths: 2, sqft: 1980, propertyType: "Single Family", yearBuilt: 1998, daysOnMarket: 0,
    description: "Sample listing for preview. Classic Davidson cottage steps from Main Street with a renovated kitchen and a deep, private lot.",
    treatment: "warm", featured: true, listingAgent: "Olivia Forsberg", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1008", mlsNumber: "4012008", status: "Active", listPrice: 1150000,
    address: "44 Lakeview Drive", city: "Cornelius", state: "NC", zip: "28031", county: "Mecklenburg",
    beds: 5, baths: 4, halfBaths: 1, sqft: 4210, lotSizeAcres: 0.55, propertyType: "Single Family", yearBuilt: 2009, daysOnMarket: 12,
    description: "Sample listing for preview. Lake Norman living with deeded water access, a resort-style backyard, and a main-level primary suite.",
    treatment: "dark", featured: true, listingAgent: "Jeremy George", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1009", mlsNumber: "4012009", status: "Active", listPrice: 389000,
    address: "812 Elm Court", city: "Huntersville", state: "NC", zip: "28078", county: "Mecklenburg",
    beds: 3, baths: 2, halfBaths: 1, sqft: 1740, propertyType: "Townhouse", yearBuilt: 2012, daysOnMarket: 9,
    description: "Sample listing for preview. Low-maintenance townhome minutes from town center with an open floor plan and community amenities.",
    treatment: "charcoal", featured: true, listingAgent: "Sean Boger", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1010", mlsNumber: "4012010", status: "Active", listPrice: 615000,
    address: "705 Waxhaw Marvin Road", city: "Waxhaw", state: "NC", zip: "28173", county: "Union",
    beds: 4, baths: 3, sqft: 2890, propertyType: "Single Family", yearBuilt: 2015, daysOnMarket: 6,
    description: "Sample listing for preview. Spacious family home in sought-after Waxhaw with a flex room, large island kitchen, and a fenced yard.",
    treatment: "warm", featured: true, listingAgent: "Emily Taylor", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1011", mlsNumber: "4012011", status: "Active", listPrice: 299900,
    address: "118 Catawba Avenue", city: "Gastonia", state: "NC", zip: "28052", county: "Gaston",
    beds: 3, baths: 2, sqft: 1520, propertyType: "Single Family", yearBuilt: 2004, daysOnMarket: 18,
    description: "Sample listing for preview. Move-in ready ranch with great value, a level yard, and easy access to uptown Charlotte.",
    treatment: "charcoal", featured: true, listingAgent: "Jordan Spafan", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
  {
    id: "NC-1012", mlsNumber: "4012012", status: "Active", listPrice: 1995000,
    address: "19 Harbor Point", city: "Mooresville", state: "NC", zip: "28117", county: "Iredell",
    beds: 5, baths: 5, halfBaths: 1, sqft: 5400, lotSizeAcres: 0.9, propertyType: "Single Family", yearBuilt: 2019, daysOnMarket: 3,
    description: "Sample listing for preview. Waterfront estate with private dock, infinity-edge pool, and floor-to-ceiling views of Lake Norman.",
    treatment: "dark", featured: true, listingAgent: "Jeremy George", attribution: "Tocado Realty Group", sourceMLS: "Preview Data",
  },
];

export const mockListings: Listing[] = seed.map((s) => ({
  ...s,
  images: [],
  detailUrl: zillow(s.address, s.city, s.state, s.zip),
}));
