import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadForm } from "@/components/forms/LeadForm";
import { InstantValuation } from "@/components/forms/InstantValuation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Free Home Valuation",
  description: "Get an instant estimate of your North Carolina home's value, plus a custom valuation from a team with two decades of experience.",
  path: "/home-valuation",
});

export default function HomeValuationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Home Valuation"
        title="What is your home"
        accent="really worth?"
        body="Get an instant estimate in seconds — then a precise, custom valuation that factors in your home's condition, upgrades, and the current local market."
        treatment="dark"
      />

      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <Eyebrow className="block">Instant Estimate</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">Get a quick value now</h2>
          </div>
          <InstantValuation />
        </div>
      </Section>

      <Section id="request" className="bg-white">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <Eyebrow className="block">The Real Number</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">Request a custom valuation</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Automated estimates are a starting point. For an accurate figure, request a
              free, no-obligation market analysis prepared just for your home.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-cream p-8 shadow-float">
            <LeadForm
              leadType="home-valuation"
              fields={["firstName", "lastName", "email", "phone", "propertyAddress", "timeline", "message"]}
              submitLabel="Request Custom Valuation"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
