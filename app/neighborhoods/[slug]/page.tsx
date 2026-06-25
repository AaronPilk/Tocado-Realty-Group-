import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { AreaMap } from "@/components/neighborhoods/AreaMap";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { neighborhoods, getNeighborhood } from "@/data/neighborhoods";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const n = getNeighborhood(params.slug);
  if (!n) return buildMetadata({ title: "Neighborhood", description: "Neighborhood guide." });
  return buildMetadata({
    title: `${n.name}, ${n.state} Homes for Sale & Neighborhood Guide`,
    description: `${n.name} real estate guide: ${n.blurb} Explore homes for sale, schools, parks, dining, and a local map of ${n.name}, ${n.state}.`,
    path: `/neighborhoods/${n.slug}`,
  });
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const n = getNeighborhood(params.slug);
  if (!n) notFound();

  return (
    <>
      <JsonLd data={faqSchema(n.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Neighborhoods", path: "/neighborhoods" },
        { name: n.name, path: `/neighborhoods/${n.slug}` },
      ])} />

      <PageHero
        eyebrow={`${n.city}, ${n.state}`}
        title={`${n.name},`}
        accent={`${n.state} real estate.`}
        body={n.intro}
        treatment={n.treatment}
      >
        <Button href={`/search?q=${encodeURIComponent(n.name)}`} variant="orange">Search {n.name} Homes</Button>
        <Button href="/home-valuation" variant="outlineLight">Get Your Home Value</Button>
      </PageHero>

      {/* Overview / SEO copy */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Eyebrow>About {n.name}</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Living in {n.name}</h2>
            {n.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-sm leading-7 text-black/80">{p}</p>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-black/5 bg-cream p-6 shadow-float">
            <Eyebrow>Known For</Eyebrow>
            <ul className="mt-4 space-y-3">
              {n.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-black/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={`/search?q=${encodeURIComponent(n.name)}`} variant="black" className="w-full">
                View {n.name} Listings
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {/* At a Glance — interactive area map */}
      <Section className="bg-cream">
        <div className="mb-8 max-w-2xl">
          <Eyebrow>Explore The Area</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">{n.name} at a Glance</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Explore schools, parks, dining, shopping, and healthcare near {n.name}. Click any
            marker for details, or use the filters to focus on what matters most to you.
          </p>
        </div>
        <AreaMap name={n.name} center={n.center} />
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="block text-center">Common Questions</Eyebrow>
          <h2 className="mt-3 text-center font-serif text-3xl">{n.name} FAQs</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {n.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-medium">{f.q}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-forest2">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="!text-mint glow-green block">Thinking About {n.name}?</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Let&apos;s find your place in <span className="italic text-mint glow-green">{n.name}.</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="orange">Talk to a Local Expert</Button>
            <Button href={`/search?q=${encodeURIComponent(n.name)}`} variant="outlineLight">Browse Homes</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
