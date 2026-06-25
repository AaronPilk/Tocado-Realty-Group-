// Recently-closed ticker. Static entries are fine until live MLS sold data
// is wired in. Use only real, closed transactions you're permitted to display.
export type TickerItem = {
  label: "Just Closed" | "Just Sold" | "Coming Soon" | "Under Contract";
  address: string;
  city: string;
  state: string;
  price: string;
};

export const salesTicker: TickerItem[] = [
  { label: "Just Closed", address: "[[1208 Maple Ave]]", city: "Charlotte", state: "NC", price: "$[[612,000]]" },
  { label: "Just Sold", address: "[[44 Lakeview Dr]]", city: "Cornelius", state: "NC", price: "$[[1,150,000]]" },
  { label: "Under Contract", address: "[[330 Oak St]]", city: "Davidson", state: "NC", price: "$[[489,000]]" },
  { label: "Just Closed", address: "[[7 Birch Ln]]", city: "Huntersville", state: "NC", price: "$[[725,000]]" },
  { label: "Coming Soon", address: "[[19 Harbor Pt]]", city: "Mooresville", state: "NC", price: "$[[1,495,000]]" },
];
