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

// North Carolina market pages — strong for local SEO ("<city> NC homes for sale").
// Charlotte metro is prioritized (Stephenie is Charlotte-based). Trim/expand to
// the real markets your mom serves.
export const locations: Location[] = [
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "NC",
    serviceArea: "Charlotte & Mecklenburg County",
    phone: "(704) 661-3414",
    blurb: "The Queen City — uptown energy, established neighborhoods, and steady appreciation.",
    description:
      "Charlotte is the anchor of our market. From historic Dilworth and Myers Park to fast-growing South End and Ballantyne, we help buyers and sellers move with strategy in one of the Southeast's strongest housing markets.",
    treatment: "dark",
    image: "/images/locations/charlotte.jpg",
  },
  {
    slug: "lake-norman",
    name: "Lake Norman",
    state: "NC",
    serviceArea: "Cornelius, Davidson, Huntersville, Mooresville",
    phone: "(704) 661-3414",
    blurb: "Waterfront living north of Charlotte — luxury, lake access, and lifestyle.",
    description:
      "The Lake Norman towns offer waterfront estates, golf communities, and easy access to Charlotte. We specialize in pricing and marketing lake-area homes where presentation and timing drive premium results.",
    treatment: "warm",
    image: "/images/locations/lake-norman.jpg",
  },
  {
    slug: "raleigh",
    name: "Raleigh",
    state: "NC",
    serviceArea: "Raleigh & Wake County",
    phone: "(704) 661-3414",
    blurb: "The Triangle's capital — research, talent, and relentless demand.",
    description:
      "Raleigh's mix of government, universities, and tech keeps demand high year-round. We guide relocating buyers and local sellers through a market that rewards preparation and sharp negotiation.",
    treatment: "charcoal",
    image: "/images/locations/raleigh.jpg",
  },
  {
    slug: "durham",
    name: "Durham",
    state: "NC",
    serviceArea: "Durham & surrounding Triangle",
    phone: "(704) 661-3414",
    blurb: "Bull City character — revitalized downtown and strong rental upside.",
    description:
      "Durham blends historic charm with new development around Duke and the Research Triangle. It's a market with real upside for buyers who move decisively and sellers who present well.",
    treatment: "warm",
    image: "/images/locations/durham.jpg",
  },
  {
    slug: "greensboro",
    name: "Greensboro",
    state: "NC",
    serviceArea: "Greensboro & the Triad",
    phone: "(704) 661-3414",
    blurb: "Triad value — affordability, space, and central NC access.",
    description:
      "Greensboro offers strong value and space for the money, with a central location connecting the Triad. We help first-time buyers and move-up families find the right fit at the right price.",
    treatment: "charcoal",
    image: "/images/locations/greensboro.jpg",
  },
  {
    slug: "asheville",
    name: "Asheville",
    state: "NC",
    serviceArea: "Asheville & Buncombe County",
    phone: "(704) 661-3414",
    blurb: "Mountain lifestyle — second homes, character, and limited inventory.",
    description:
      "Asheville's mountain setting and lifestyle keep it competitive, with limited inventory and strong second-home demand. We position listings to stand out and help buyers win in tight conditions.",
    treatment: "warm",
    image: "/images/locations/asheville.jpg",
  },
];
