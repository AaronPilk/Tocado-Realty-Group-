import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "North Carolina Markets",
  description: "Explore the North Carolina markets we serve — Charlotte, Lake Norman, Raleigh, Durham, Greensboro, and Asheville.",
  path: "/locations",
});

const treatmentClass: Record<string, string> = {
  warm: "photo-warm",
  dark: "photo-dark",
  charcoal: "photo-charcoal",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="North Carolina markets"
        body="From the Charlotte metro to the mountains, we help buyers and sellers move with strategy across the state."
        treatment="ivory"
      />
      <Section className="bg-cream">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group block overflow-hidden border border-line bg-white"
            >
              <div className="relative aspect-[4/3]">
                <div className={`photo-fill ${treatmentClass[loc.treatment]}`} />
                <h2 className="absolute bottom-4 left-5 font-serif text-3xl text-white">{loc.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted">{loc.blurb}</p>
                <span className="mt-4 inline-block text-[12px] font-semibold uppercase tracking-[0.16em] text-orange group-hover:text-black">
                  Explore {loc.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
