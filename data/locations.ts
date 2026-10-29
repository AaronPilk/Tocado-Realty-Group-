export type Location = {
  slug: string;
  name: string;
  state: string;
  serviceArea: string;
  phone: string;
  blurb: string;
  description: string;
  treatment: "warm" | "dark" | "charcoal";
  /** Optional. Drop a photo at /public/images/locations/<slug>.jpg and set this
   *  to "/images/locations/<slug>.jpg" — it replaces the gradient automatically. */
  image?: string;
};

// Stephenie's real service area: greater Charlotte + the NC/SC border region
// (roughly Statesville to Clover, Oakboro to McAdenville). Kept to markets she
// actually serves — no unsupported geographic coverage.
export const locations: Location[] = [
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "NC",
    serviceArea: "Charlotte & Mecklenburg County",
    phone: "(704) 661-3414",
    blurb: "The Queen City — uptown energy, established neighborhoods, and steady demand.",
    description:
      "Charlotte is the heart of our market. From Ballantyne and SouthPark to Myers Park, Dilworth, and South End, Stephenie helps buyers and sellers move with strategy in one of the Southeast's strongest housing markets.",
    treatment: "dark",
    image: "/images/locations/charlotte.jpg",
  },
  {
    slug: "ballantyne",
    name: "Ballantyne",
    state: "NC",
    serviceArea: "Ballantyne & South Charlotte",
    phone: "(704) 661-3414",
    blurb: "South Charlotte's polished hub — corporate park, golf, and sought-after schools.",
    description:
      "Home base for Tocado & Company. Ballantyne pairs master-planned neighborhoods, golf, and top schools with quick access to uptown — a perennial favorite for move-up buyers and relocating families.",
    treatment: "warm",
  },
  {
    slug: "lake-norman",
    name: "Lake Norman",
    state: "NC",
    serviceArea: "Cornelius, Davidson, Huntersville",
    phone: "(704) 661-3414",
    blurb: "Waterfront living north of Charlotte — lake access, golf, and lifestyle.",
    description:
      "The Lake Norman towns offer waterfront homes, golf communities, and an easy commute to Charlotte. Stephenie helps price, market, and win in an area where presentation and timing drive premium results.",
    treatment: "charcoal",
    image: "/images/locations/lake-norman.jpg",
  },
  {
    slug: "mooresville",
    name: "Mooresville",
    state: "NC",
    serviceArea: "Mooresville, Statesville & northern Iredell",
    phone: "(704) 661-3414",
    blurb: "Lake-town value north of the metro — new construction and room to grow.",
    description:
      "Mooresville and Statesville offer space, newer construction, and strong value at the north end of the market. A great fit for buyers trading square footage and lake access for a short drive to Charlotte.",
    treatment: "warm",
  },
  {
    slug: "waxhaw",
    name: "Waxhaw & Weddington",
    state: "NC",
    serviceArea: "Waxhaw, Weddington, Marvin & Union County",
    phone: "(704) 661-3414",
    blurb: "Union County's upscale small-town charm — larger lots and top schools.",
    description:
      "Waxhaw, Weddington, and Marvin blend small-town character with some of the region's most sought-after schools and larger lots. Popular with families looking for space without leaving the Charlotte orbit.",
    treatment: "dark",
  },
  {
    slug: "fort-mill",
    name: "Fort Mill",
    state: "SC",
    serviceArea: "Fort Mill, Indian Land, Clover & Rock Hill",
    phone: "(704) 661-3414",
    blurb: "Just over the SC line — low taxes, strong schools, and easy Charlotte access.",
    description:
      "The South Carolina border towns — Fort Mill, Indian Land, Clover, and Rock Hill — draw buyers with lower taxes, highly rated schools, and a quick commute into Charlotte. Licensed in SC, Stephenie covers both sides of the line.",
    treatment: "charcoal",
  },
];
