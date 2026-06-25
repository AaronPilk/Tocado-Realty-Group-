import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Sell Your Home in North Carolina",
  description: "Sell for more, in less time. Pricing strategy, professional marketing, and exposure that reaches the right buyers from day one.",
  path: "/sell",
});

const pillars = [
  { t: "Smart Pricing", d: "Data-driven pricing that maximizes your return without sitting on the market." },
  { t: "Standout Marketing", d: "Professional photography, video, social, and portal syndication built to convert." },
  { t: "Maximum Exposure", d: "Your listing hits the MLS and every major portal, reaching buyers on day one." },
  { t: "Skilled Negotiation", d: "Twenty years of experience protecting your price, terms, and timeline." },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell With Us"
        title="Sell for more,"
        accent="in less time."
        body="Pricing, presentation, and exposure engineered to put your home in front of the right buyers — and close on your terms."
        treatment="charcoal"
      >
        <Button href="/home-valuation" variant="orange">Get Your Home Value</Button>
        <Button href="/contact" variant="outlineLight">Speak With an Agent</Button>
      </PageHero>

      <Section className="bg-cream">
        <div className="max-w-2xl">
          <Eyebrow>What You Get</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">A listing strategy built to win</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.t} className="border border-line bg-white p-6">
              <div className="font-serif text-3xl text-orange">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-xl">{p.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl border border-line bg-cream p-8">
          <Eyebrow>Free, No Obligation</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl">What&apos;s your home worth?</h2>
          <p className="mt-2 text-sm text-muted">Tell us about your property and we&apos;ll prepare a custom valuation.</p>
          <div className="mt-6">
            <LeadForm
              leadType="home-valuation"
              fields={["firstName", "lastName", "email", "phone", "propertyAddress", "timeline", "message"]}
              submitLabel="Request Valuation"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
