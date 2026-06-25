import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const loc = locations.find((l) => l.slug === params.slug);
  return buildMetadata({
    title: loc ? `${loc.name}, NC Homes for Sale` : "Location",
    description: loc?.description || "North Carolina real estate.",
    path: `/locations/${params.slug}`,
  });
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  const faqs = [
    { q: `Is now a good time to buy in ${loc.name}?`, a: `Market conditions in ${loc.name} shift by neighborhood and price point. We give you current, local data so you can move with confidence.` },
    { q: `What's my ${loc.name} home worth?`, a: `We prepare custom, data-backed valuations for ${loc.name} homes — request one anytime, free and with no obligation.` },
  ];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Locations", path: "/locations" },
        { name: loc.name, path: `/locations/${loc.slug}` },
      ])} />

      <PageHero
        eyebrow={`${loc.serviceArea}`}
        title={`${loc.name}, ${loc.state}`}
        accent="real estate."
        body={loc.blurb}
        image={loc.image}
        treatment={loc.treatment === "warm" ? "warm" : loc.treatment === "charcoal" ? "charcoal" : "dark"}
      >
        <Button href="/search" variant="orange">Search {loc.name} Homes</Button>
        <Button href="/home-valuation" variant="outlineLight">Get Your Home Value</Button>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Eyebrow>About {loc.name}</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">Living in {loc.name}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{loc.description}</p>

            <h3 className="mt-10 font-serif text-2xl">Common questions</h3>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h4 className="font-medium">{f.q}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-black/5 shadow-float bg-cream p-6">
            <h2 className="font-serif text-2xl">Talk to a {loc.name} expert</h2>
            <div className="mt-5">
              <LeadForm
                leadType="buyer-inquiry"
                fields={["firstName", "lastName", "email", "phone", "message"]}
                submitLabel="Get in Touch"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
