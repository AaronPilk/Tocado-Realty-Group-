// Header ticker. Honest "Now Serving" market coverage — no fabricated sales.
// When real closings exist, switch label to "Just Closed"/"Just Sold" and add
// address + price (compliant: only real, permitted-to-display transactions).
export type TickerItem = {
  label: "Now Serving" | "Just Closed" | "Just Sold" | "Coming Soon" | "Under Contract";
  address: string;
  city: string;
  state: string;
  price: string;
};

export const salesTicker: TickerItem[] = [
  { label: "Now Serving", address: "Buyers & Sellers", city: "Charlotte", state: "NC", price: "" },
  { label: "Now Serving", address: "Waterfront & Lake Homes", city: "Lake Norman", state: "NC", price: "" },
  { label: "Now Serving", address: "Families & First-Time Buyers", city: "Fort Mill", state: "SC", price: "" },
  { label: "Now Serving", address: "Move-Up & Luxury", city: "Waxhaw", state: "NC", price: "" },
  { label: "Now Serving", address: "New Construction & Resale", city: "Mooresville", state: "NC", price: "" },
  { label: "Now Serving", address: "Relocation & Investment", city: "Monroe", state: "NC", price: "" },
];
