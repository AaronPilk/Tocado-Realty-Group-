// Neighborhood guides — SEO landing pages + interactive area map centers.
// Each entry powers /neighborhoods/<slug>. Copy is original to Tocado Realty Group.

export type Neighborhood = {
  slug: string;
  name: string;
  city: string;
  state: string;
  group: string; // dropdown grouping
  blurb: string; // short, for dropdown + cards
  intro: string; // hero sub-line
  paragraphs: string[]; // SEO body
  highlights: string[]; // quick "known for"
  faqs: { q: string; a: string }[];
  center: { lat: number; lng: number };
  treatment: "warm" | "dark" | "charcoal";
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "southpark-charlotte",
    name: "SouthPark",
    city: "Charlotte",
    state: "NC",
    group: "Featured Neighborhoods",
    blurb: "Charlotte's upscale shopping and luxury-living district.",
    intro: "Luxury living minutes from Charlotte's premier shopping, dining, and green space.",
    paragraphs: [
      "SouthPark is one of Charlotte's most desirable addresses — a polished, walkable district built around SouthPark Mall, the Carolinas' premier shopping destination, and lined with tree-canopied streets, established estates, and modern luxury condos. Buyers are drawn here for the rare combination of high-end retail, top restaurants, and quiet residential pockets just six miles from Uptown.",
      "Homes range from classic brick traditionals in Beverly Woods and Foxcroft to new-construction luxury townhomes and high-rise condos at Capitol Towers and The Arlington. With strong schools, mature landscaping, and steady long-term appreciation, SouthPark consistently holds its value as a blue-chip Charlotte market.",
    ],
    highlights: ["SouthPark Mall & Phillips Place", "Symphony Park concerts", "Top-rated dining", "Easy Uptown access"],
    faqs: [
      { q: "What's the typical home price in SouthPark?", a: "SouthPark spans a wide range — from condos in the $300Ks to luxury estates well over $2M. We can pull current, address-specific values anytime." },
      { q: "Is SouthPark a good place to invest?", a: "SouthPark is considered one of Charlotte's most stable, blue-chip markets thanks to its location, retail anchor, and limited new land — historically a strong hold for long-term value." },
    ],
    center: { lat: 35.1510, lng: -80.8310 },
    treatment: "dark",
  },
  {
    slug: "fort-mill-sc",
    name: "Fort Mill",
    city: "Fort Mill",
    state: "SC",
    group: "Featured Neighborhoods",
    blurb: "Top-rated schools and small-town charm just over the SC line.",
    intro: "Award-winning schools, master-planned communities, and easy Charlotte access.",
    paragraphs: [
      "Fort Mill has become one of the fastest-growing communities in the Charlotte region, prized for its top-ranked schools, charming historic downtown, and lower South Carolina taxes — all within a 25-minute commute to Uptown Charlotte and the Ballantyne corridor.",
      "Buyers find everything from established neighborhoods near Main Street to large master-planned communities like Baxter Village, Massey, and Springfield, with amenities, trails, and new construction. It's a top pick for families relocating to the area who want space, schools, and value.",
    ],
    highlights: ["Fort Mill Schools (highly rated)", "Baxter Village town center", "Lower SC taxes", "Anne Springs Close Greenway"],
    faqs: [
      { q: "Why do families move to Fort Mill?", a: "The Fort Mill School District is among the most sought-after in the region, and South Carolina's lower property taxes plus newer housing stock make it a strong value compared to similar NC suburbs." },
      { q: "How far is Fort Mill from Charlotte?", a: "Most of Fort Mill is 20–30 minutes from Uptown Charlotte via I-77, and even closer to Ballantyne and the SouthPark area." },
    ],
    center: { lat: 35.0074, lng: -80.9451 },
    treatment: "warm",
  },
  {
    slug: "waxhaw-nc",
    name: "Waxhaw",
    city: "Waxhaw",
    state: "NC",
    group: "Featured Neighborhoods",
    blurb: "Historic small-town feel with top Union County schools.",
    intro: "Equestrian estates, a storybook downtown, and some of NC's best schools.",
    paragraphs: [
      "Waxhaw blends a historic, walkable downtown with rolling countryside, equestrian estates, and sought-after newer communities — all anchored by the highly rated Marvin Ridge and Cuthbertson school zones that draw families from across the country.",
      "From custom homes on acreage to amenity-rich neighborhoods like Cureton and Millbridge, Waxhaw offers space and quality of life while keeping Charlotte and Ballantyne within easy reach. Its antique shops, festivals, and farm-to-table dining give it a genuine sense of place.",
    ],
    highlights: ["Marvin Ridge school zone", "Historic downtown Waxhaw", "Equestrian & acreage homes", "Family master-planned communities"],
    faqs: [
      { q: "Is Waxhaw good for families?", a: "Waxhaw is one of the most popular family destinations in the Charlotte metro, largely for its top Union County Public Schools and newer, amenity-rich neighborhoods." },
      { q: "What kind of homes are in Waxhaw?", a: "You'll find everything from luxury custom homes on acreage to master-planned communities with pools and trails, plus charming older homes near the historic center." },
    ],
    center: { lat: 34.9246, lng: -80.7434 },
    treatment: "charcoal",
  },
  {
    slug: "dilworth-charlotte",
    name: "Dilworth",
    city: "Charlotte",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Charlotte's historic, walkable streetcar suburb.",
    intro: "Craftsman bungalows, oak-lined streets, and walkable East Boulevard dining.",
    paragraphs: [
      "Dilworth is Charlotte's first streetcar suburb — a beloved historic neighborhood of craftsman bungalows, brick Tudors, and tree-lined sidewalks just south of Uptown. Its walkable East Boulevard corridor, Freedom Park, and tight-knit community feel make it one of the city's most charming places to live.",
      "Homes here mix lovingly restored early-1900s character with high-end renovations and infill new construction. Walkability, location, and limited inventory keep Dilworth in constant demand among buyers who want in-town living with neighborhood soul.",
    ],
    highlights: ["Historic bungalows", "Freedom Park", "Walkable East Blvd", "Minutes to Uptown & South End"],
    faqs: [
      { q: "What makes Dilworth special?", a: "Its historic architecture, mature tree canopy, walkability, and proximity to Uptown and South End make Dilworth one of Charlotte's most coveted in-town neighborhoods." },
      { q: "Are homes in Dilworth expensive?", a: "Dilworth commands a premium for its location and character; prices vary widely by street and condition. We can prepare a current valuation for any address." },
    ],
    center: { lat: 35.2050, lng: -80.8510 },
    treatment: "warm",
  },
  {
    slug: "steele-creek-charlotte",
    name: "Steele Creek",
    city: "Charlotte",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Fast-growing southwest Charlotte near Lake Wylie.",
    intro: "New communities, retail, and lake access in booming southwest Charlotte.",
    paragraphs: [
      "Steele Creek is one of southwest Charlotte's fastest-growing areas, popular for its newer homes, convenient retail at Rivergate, and proximity to Lake Wylie and Charlotte Douglas International Airport. It's a practical, value-driven choice for commuters and families alike.",
      "Buyers find a wide range of newer single-family neighborhoods and townhomes, many with community amenities, plus quick access to I-485 and the airport. Ongoing growth and new construction keep options plentiful here.",
    ],
    highlights: ["Rivergate shopping", "Lake Wylie access", "Near the airport & I-485", "Newer-construction homes"],
    faqs: [
      { q: "Is Steele Creek a good value?", a: "Steele Creek often offers newer homes and amenities at a relative value versus closer-in Charlotte neighborhoods, which is a big part of its appeal." },
      { q: "What's nearby in Steele Creek?", a: "Rivergate retail, Lake Wylie, the U.S. National Whitewater Center, and the airport are all close, with easy I-485 access across the metro." },
    ],
    center: { lat: 35.1310, lng: -80.9620 },
    treatment: "charcoal",
  },
  {
    slug: "pineville-nc",
    name: "Pineville",
    city: "Pineville",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Small-town convenience at Charlotte's southern edge.",
    intro: "Walkable downtown, major shopping, and light-rail-adjacent convenience.",
    paragraphs: [
      "Pineville is a small, established town on Charlotte's southern border, offering a historic Main Street, major retail at Carolina Place Mall, and quick access to both Charlotte and the South Carolina line. It's a convenient, value-oriented spot with genuine small-town character.",
      "Housing leans toward established single-family homes and townhomes, with newer infill mixed in. Proximity to I-485, the LYNX Blue Line terminus nearby, and abundant shopping makes Pineville an easy-living choice.",
    ],
    highlights: ["Carolina Place Mall", "Historic Main Street", "Near I-485 & light rail", "Convenient to SC line"],
    faqs: [
      { q: "Is Pineville part of Charlotte?", a: "Pineville is its own incorporated town within Mecklenburg County, bordering south Charlotte — so you get small-town governance with big-city access." },
      { q: "What's the housing like in Pineville?", a: "Mostly established single-family homes and townhomes at an approachable price point, with some newer construction nearby." },
    ],
    center: { lat: 35.0832, lng: -80.8923 },
    treatment: "warm",
  },
  {
    slug: "huntersville-nc",
    name: "Huntersville",
    city: "Huntersville",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Lake Norman living with the Birkdale Village lifestyle.",
    intro: "Family neighborhoods, Birkdale Village, and southern Lake Norman access.",
    paragraphs: [
      "Huntersville sits at the southern end of Lake Norman and has grown into one of the metro's most popular family suburbs, anchored by the shop-dine-live experience at Birkdale Village and excellent access to I-77 and Charlotte.",
      "From established neighborhoods to large master-planned communities and lakefront pockets, Huntersville offers strong amenities, parks, and greenways. It's a top choice for buyers who want suburban space with quick connections to the city and the lake.",
    ],
    highlights: ["Birkdale Village", "Southern Lake Norman", "Greenways & parks", "Easy I-77 commute"],
    faqs: [
      { q: "Why is Huntersville popular?", a: "Its mix of family neighborhoods, the Birkdale Village lifestyle hub, lake access, and a manageable commute to Charlotte make it a perennial favorite." },
      { q: "Is Huntersville on Lake Norman?", a: "Yes — Huntersville borders the southern end of Lake Norman, with some waterfront and water-access communities." },
    ],
    center: { lat: 35.4107, lng: -80.8428 },
    treatment: "dark",
  },
  {
    slug: "mooresville-nc",
    name: "Mooresville",
    city: "Mooresville",
    state: "NC",
    group: "Charlotte Area",
    blurb: "\"Race City USA\" on the shores of Lake Norman.",
    intro: "Waterfront estates, NASCAR roots, and a vibrant downtown on Lake Norman.",
    paragraphs: [
      "Mooresville — known as 'Race City USA' for its concentration of NASCAR teams — is a Lake Norman favorite offering waterfront estates, golf communities, and a lively, revitalized downtown. It draws buyers who want lake lifestyle with real town amenities.",
      "Options span luxury lakefront homes, gated golf communities like The Point, and established and new neighborhoods inland. With strong shopping, dining, and recreation, Mooresville balances resort-style living with everyday convenience.",
    ],
    highlights: ["Lake Norman waterfront", "Downtown Mooresville", "Golf & gated communities", "NASCAR & motorsports hub"],
    faqs: [
      { q: "What's Mooresville known for?", a: "Lake Norman waterfront living and its identity as 'Race City USA,' home to many NASCAR teams and motorsports businesses." },
      { q: "Can you buy waterfront homes in Mooresville?", a: "Yes — Mooresville has some of Lake Norman's most sought-after waterfront and water-access properties, from cottages to luxury estates." },
    ],
    center: { lat: 35.5849, lng: -80.8101 },
    treatment: "warm",
  },
  {
    slug: "concord-nc",
    name: "Concord",
    city: "Concord",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Growing Cabarrus County hub with major attractions.",
    intro: "Affordable growth, big attractions, and a historic downtown northeast of Charlotte.",
    paragraphs: [
      "Concord, the seat of Cabarrus County, pairs a charming historic downtown with major regional attractions like Charlotte Motor Speedway and Concord Mills, North Carolina's largest outlet and retail destination. It's a fast-growing, value-friendly market northeast of Charlotte.",
      "Buyers find a broad mix of established neighborhoods, new construction, and master-planned communities, often at a relative value to inner Charlotte. Good highway access via I-85 keeps the city and airport within reach.",
    ],
    highlights: ["Charlotte Motor Speedway", "Concord Mills", "Historic downtown", "Value-friendly new construction"],
    faqs: [
      { q: "Is Concord affordable?", a: "Concord generally offers strong value versus close-in Charlotte, with newer homes and master-planned communities at accessible price points." },
      { q: "What's there to do in Concord?", a: "Charlotte Motor Speedway, Concord Mills, the AvidXchange Music Factory nearby, and a revitalized historic downtown are all big draws." },
    ],
    center: { lat: 35.4087, lng: -80.5795 },
    treatment: "charcoal",
  },
  {
    slug: "harrisburg-nc",
    name: "Harrisburg",
    city: "Harrisburg",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Quiet Cabarrus suburb with strong schools.",
    intro: "Family-friendly neighborhoods and top schools between Charlotte and Concord.",
    paragraphs: [
      "Harrisburg is a quieter Cabarrus County suburb that's become a favorite for families thanks to well-regarded schools, newer neighborhoods, and an easy location between Charlotte, Concord, and the I-485/I-85 corridor.",
      "Housing is largely newer single-family construction in amenity neighborhoods, offering space and value with a short hop to UNC Charlotte, the airport, and major employers. It's a calm, family-first community on the rise.",
    ],
    highlights: ["Highly rated schools", "Newer family neighborhoods", "Near UNC Charlotte", "Quick I-485/I-85 access"],
    faqs: [
      { q: "Why move to Harrisburg?", a: "Families are drawn to Harrisburg for its schools, newer housing, and central spot between Charlotte and Concord — quiet, but close to everything." },
      { q: "Is Harrisburg growing?", a: "Yes — Harrisburg has seen steady residential growth with new neighborhoods and amenities, while keeping a small-town feel." },
    ],
    center: { lat: 35.3238, lng: -80.6581 },
    treatment: "warm",
  },
  {
    slug: "monroe-nc",
    name: "Monroe",
    city: "Monroe",
    state: "NC",
    group: "Charlotte Area",
    blurb: "Union County seat with space and value.",
    intro: "Historic county seat offering room to grow at an approachable price.",
    paragraphs: [
      "Monroe, the seat of Union County, offers a historic downtown, more land, and a lower price point than many closer-in suburbs — making it attractive to buyers who want space and value while staying connected to the Charlotte metro.",
      "From established in-town homes to newer subdivisions and properties on acreage, Monroe gives buyers options. Ongoing investment downtown and improving connectivity (including the Monroe Expressway) continue to boost its appeal.",
    ],
    highlights: ["Historic downtown Monroe", "Homes on acreage", "Monroe Expressway access", "Strong value per square foot"],
    faqs: [
      { q: "Is Monroe a good value?", a: "Monroe typically offers more home and land for the money than closer-in Union County towns, which is a key reason buyers consider it." },
      { q: "How's the commute from Monroe?", a: "The Monroe Expressway (US-74 toll) has significantly improved the drive toward Charlotte and the I-485 corridor." },
    ],
    center: { lat: 34.9854, lng: -80.5495 },
    treatment: "charcoal",
  },
  {
    slug: "belmont-nc",
    name: "Belmont",
    city: "Belmont",
    state: "NC",
    group: "Gaston County",
    blurb: "Charming riverfront downtown west of Charlotte.",
    intro: "A revitalized historic downtown, river access, and quick Charlotte commutes.",
    paragraphs: [
      "Belmont has transformed into one of the region's most charming small towns, with a thriving historic Main Street full of local shops and restaurants, riverfront access along the Catawba, and a quick commute across the river to Charlotte and the airport.",
      "Buyers find a mix of historic homes near downtown, newer neighborhoods, and riverfront properties. Attractions like Daniel Stowe Botanical Garden and the nearby U.S. National Whitewater Center add to Belmont's growing appeal and value story.",
    ],
    highlights: ["Revitalized Main Street", "Catawba River access", "Daniel Stowe Botanical Garden", "Minutes to the airport"],
    faqs: [
      { q: "Why is Belmont so popular now?", a: "Its walkable, revitalized downtown, river access, and short commute to Charlotte and the airport have made Belmont one of Gaston County's hottest markets." },
      { q: "What homes are available in Belmont?", a: "A mix of historic in-town homes, newer subdivisions, and riverfront properties — we can match you to the right pocket of town." },
    ],
    center: { lat: 35.2429, lng: -81.0376 },
    treatment: "warm",
  },
  {
    slug: "gastonia-nc",
    name: "Gastonia",
    city: "Gastonia",
    state: "NC",
    group: "Gaston County",
    blurb: "Gaston County's affordable, revitalizing hub.",
    intro: "Strong value, a revitalizing downtown, and easy Charlotte access.",
    paragraphs: [
      "Gastonia, the seat of Gaston County, is one of the most affordable markets in the Charlotte region and is seeing real momentum — including the FUSE District revitalization and a new downtown ballpark — while keeping Charlotte a straightforward I-85 commute away.",
      "Buyers find character-filled older homes, newer subdivisions, and standout value per square foot. For first-time buyers and investors, Gastonia offers an accessible entry point into the metro with upside as the area continues to grow.",
    ],
    highlights: ["FUSE District & ballpark", "Strong affordability", "Crowders Mountain nearby", "Easy I-85 to Charlotte"],
    faqs: [
      { q: "Is Gastonia affordable?", a: "Gastonia is among the most affordable markets in the Charlotte metro, making it popular with first-time buyers and investors." },
      { q: "What's happening downtown Gastonia?", a: "The FUSE District redevelopment, including a downtown ballpark and mixed-use growth, is reshaping the city center." },
    ],
    center: { lat: 35.2621, lng: -81.1873 },
    treatment: "charcoal",
  },
  {
    slug: "rock-hill-sc",
    name: "Rock Hill",
    city: "Rock Hill",
    state: "SC",
    group: "South Carolina",
    blurb: "York County's largest city with college-town energy.",
    intro: "Knowledge Park, Winthrop University, and value just south of Charlotte.",
    paragraphs: [
      "Rock Hill is the largest city in York County and the hub of the South Carolina side of the Charlotte metro, blending college-town energy from Winthrop University with downtown revitalization in Knowledge Park and a reputation as an amateur sports destination.",
      "Buyers find everything from historic districts and established neighborhoods to new master-planned communities, generally at a value compared with similar NC suburbs — plus lower South Carolina taxes and a quick I-77 commute to Charlotte.",
    ],
    highlights: ["Knowledge Park downtown", "Winthrop University", "Lower SC taxes", "Sports-tourism destination"],
    faqs: [
      { q: "Is Rock Hill a good place to buy?", a: "Rock Hill offers a wide range of homes at strong value, lower SC taxes, and an easy commute to Charlotte — appealing to families, professionals, and investors." },
      { q: "How far is Rock Hill from Charlotte?", a: "Rock Hill is roughly 25–30 minutes from Uptown Charlotte via I-77, depending on traffic and your exact location." },
    ],
    center: { lat: 34.9249, lng: -81.0251 },
    treatment: "dark",
  },
  {
    slug: "tega-cay-sc",
    name: "Tega Cay",
    city: "Tega Cay",
    state: "SC",
    group: "South Carolina",
    blurb: "\"The City on the Lake\" — golf and Lake Wylie living.",
    intro: "Peninsula living on Lake Wylie with golf, beaches, and top schools.",
    paragraphs: [
      "Tega Cay — 'The City on the Lake' — sits on a scenic peninsula jutting into Lake Wylie, offering golf, community beaches, marinas, and a resort-like lifestyle within the highly rated Fort Mill School District and a short drive to Charlotte.",
      "Homes range from lakefront and golf-course properties to established and newer family neighborhoods. With abundant recreation, strong schools, and South Carolina taxes, Tega Cay is a premium yet practical choice for lake-lifestyle buyers.",
    ],
    highlights: ["Lake Wylie waterfront", "Golf & community beaches", "Fort Mill schools", "Resort-style amenities"],
    faqs: [
      { q: "What makes Tega Cay unique?", a: "Its peninsula setting on Lake Wylie, community beaches and marinas, golf, and top Fort Mill schools give it a rare resort-meets-family appeal." },
      { q: "Are there waterfront homes in Tega Cay?", a: "Yes — Tega Cay has sought-after lakefront and water-access homes, along with golf-course and family neighborhoods." },
    ],
    center: { lat: 35.0299, lng: -81.0120 },
    treatment: "warm",
  },
  {
    slug: "indian-land-sc",
    name: "Indian Land",
    city: "Indian Land",
    state: "SC",
    group: "South Carolina",
    blurb: "Fast-growing Lancaster County panhandle near Ballantyne.",
    intro: "New construction, low SC taxes, and a location right next to Ballantyne.",
    paragraphs: [
      "Indian Land, in the Lancaster County panhandle, is one of the fastest-growing communities on the South Carolina side of the metro — prized for new construction, master-planned communities, and lower South Carolina taxes, all immediately south of Charlotte's Ballantyne area.",
      "Buyers relocating for jobs in Ballantyne and south Charlotte love Indian Land for its newer homes, amenities, and value. Rapid retail and residential growth along US-521 continue to expand the options here.",
    ],
    highlights: ["Adjacent to Ballantyne", "New-construction communities", "Lower SC taxes", "Fast-growing US-521 corridor"],
    faqs: [
      { q: "Why is Indian Land booming?", a: "Its location next to Ballantyne, abundant new construction, amenities, and lower South Carolina taxes have fueled rapid growth and strong buyer demand." },
      { q: "Is Indian Land in South Carolina?", a: "Yes — Indian Land is in Lancaster County, SC, but sits right against the North Carolina line next to south Charlotte's Ballantyne area." },
    ],
    center: { lat: 34.9668, lng: -80.8701 },
    treatment: "charcoal",
  },
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}

// Grouped, in display order, for the Home Search dropdown.
const groupOrder = ["Featured Neighborhoods", "Charlotte Area", "Gaston County", "South Carolina"];
export const neighborhoodGroups = groupOrder.map((heading) => ({
  heading,
  items: neighborhoods.filter((n) => n.group === heading),
}));
