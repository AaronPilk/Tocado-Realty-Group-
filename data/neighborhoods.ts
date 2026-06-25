// Powers the "Home Search" mega-dropdown in the header.
// Each item links to the search page pre-filtered by area.
export type Neighborhood = { name: string; query: string };
export type NeighborhoodGroup = { heading: string; items: Neighborhood[] };

export const neighborhoodGroups: NeighborhoodGroup[] = [
  {
    heading: "Featured Neighborhoods",
    items: [
      { name: "SouthPark, Charlotte", query: "SouthPark" },
      { name: "Fort Mill, SC", query: "Fort Mill" },
      { name: "Waxhaw, NC", query: "Waxhaw" },
    ],
  },
  {
    heading: "Charlotte Area",
    items: [
      { name: "Dilworth, Charlotte", query: "Dilworth" },
      { name: "Steele Creek, Charlotte", query: "Steele Creek" },
      { name: "Pineville, NC", query: "Pineville" },
      { name: "Huntersville, NC", query: "Huntersville" },
      { name: "Mooresville, NC", query: "Mooresville" },
      { name: "Concord, NC", query: "Concord" },
      { name: "Harrisburg, NC", query: "Harrisburg" },
      { name: "Monroe, NC", query: "Monroe" },
    ],
  },
  {
    heading: "Gaston County",
    items: [
      { name: "Belmont, NC", query: "Belmont" },
      { name: "Gastonia, NC", query: "Gastonia" },
    ],
  },
  {
    heading: "South Carolina",
    items: [
      { name: "Rock Hill, SC", query: "Rock Hill" },
      { name: "Tega Cay, SC", query: "Tega Cay" },
    ],
  },
];
