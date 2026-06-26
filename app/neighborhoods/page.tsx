import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { neighborhoodGroups } from "@/data/neighborhoods";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Charlotte Area Neighborhoods",
  description: "Explore neighborhood guides across the Charlotte metro and South Carolina — SouthPark, Dilworth, Fort Mill, Waxhaw, Lake Norman towns, and more.",
  path: "/neighborhoods",
});

const treatmentClass: Record<string, string> = {
  warm: "photo-warm", dark: "photo-dark", charcoal: "photo-charcoal",
};

export default function NeighborhoodsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore The Area"
        title="Neighborhood"
        accent="guides."
        body="In-depth local guides across the Charlotte metro and South Carolina — schools, lifestyle, market notes, and a map for every area we serve."
        treatment="ivory"
      />
      {neighborhoodGroups.map((group) => (
        <Section key={group.heading} className="bg-cream [&:nth-child(even)]:bg-white">
          <Eyebrow>{group.heading}</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">{group.heading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.items.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="lift group block overflow-hidden reveal rounded-2xl border border-black/5 bg-white shadow-float"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`photo-fill ${treatmentClass[n.treatment]}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-serif text-2xl text-white">{n.name}</h3>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-white/70">{n.city}, {n.state}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-muted">{n.blurb}</p>
                  <span className="mt-3 inline-block text-[12px] font-semibold uppercase tracking-[0.14em] text-orange group-hover:text-black">
                    Explore {n.name} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
