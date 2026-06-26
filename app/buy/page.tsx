import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Buy a Home in North Carolina",
  description: "Buy with confidence across North Carolina — strategy, off-market access, and sharp negotiation on your side.",
  path: "/buy",
});

const steps = [
  { t: "Know Your Budget", d: "We connect you with trusted lenders so you shop with real buying power from day one." },
  { t: "Zero In", d: "We turn your must-haves into a focused search across the right Carolina neighborhoods." },
  { t: "Tour With Us", d: "Hand-picked showings and straight talk — no pressure, just honest perspective." },
  { t: "Win the Deal", d: "We negotiate hard on price and terms, then guide you cleanly to the closing table." },
];

const faqs = [
  { q: "How much do I need for a down payment in North Carolina?", a: "It varies by loan type — some programs allow as little as 3% down, while others require more. We'll connect you with a lender to map out your real options." },
  { q: "Do buyers pay agent commissions?", a: "Commission structures have changed recently and are negotiable. We'll walk you through exactly how it works before you tour any homes." },
  { q: "How competitive is the NC market right now?", a: "It depends on the city and price point. We give you current, local data so you can move at the right speed with the right strategy." },
];

export default function BuyPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Buy With Us"
        title="Buying a home,"
        accent="without the guesswork."
        body="A clear plan, real local data, and a team that negotiates hard on your behalf — from first search to keys in hand."
        treatment="dark"
      >
        <Button href="/search" variant="orange">Browse Listings</Button>
        <Button href="/mortgage-calculator" variant="outlineLight">Affordability Calculator</Button>
      </PageHero>

      <Section className="bg-cream">
        <div className="max-w-2xl">
          <Eyebrow>How Buying Works</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Four steps to the right home</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="rounded-2xl border border-black/5 shadow-float bg-white p-6">
              <div className="font-serif text-3xl text-orange">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">Buying FAQs</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-medium">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 shadow-float bg-cream p-8">
            <h2 className="font-serif text-2xl">Start your search</h2>
            <p className="mt-2 text-sm text-muted">Tell us what you&apos;re looking for and we&apos;ll take it from there.</p>
            <div className="mt-6">
              <LeadForm
                leadType="buyer-inquiry"
                fields={["firstName", "lastName", "email", "phone", "desiredLocation", "budget", "timeline", "message"]}
                submitLabel="Get Started"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
