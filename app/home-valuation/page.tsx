import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Free Home Valuation",
  description: "Get a free, no-obligation valuation of your North Carolina home from a team with two decades of experience.",
  path: "/home-valuation",
});

export default function HomeValuationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Home Valuation"
        title="What is your home"
        accent="really worth?"
        body="Get a custom, data-backed valuation — not an automated guess. We'll factor in your home's condition, upgrades, and the current local market."
        treatment="dark"
      />
      <Section className="bg-cream">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 shadow-float bg-white p-8">
          <LeadForm
            leadType="home-valuation"
            fields={["firstName", "lastName", "email", "phone", "propertyAddress", "timeline", "message"]}
            submitLabel="Get My Valuation"
          />
        </div>
      </Section>
    </>
  );
}
