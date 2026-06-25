import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo/schema";
import { AffordabilityCalculator } from "@/components/forms/AffordabilityCalculator";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Home Affordability Calculator",
  description: "See how much home you can afford in North Carolina based on your income, debts, down payment, and credit score — with an estimated interest rate and monthly payment.",
  path: "/mortgage-calculator",
});

const faqs = [
  { q: "How much home can I afford?", a: "Lenders typically allow your total housing payment to be around 28% of gross monthly income, and total debts up to about 43%. Our calculator uses those ratios with your income, debts, and down payment to estimate a max price." },
  { q: "How does my credit score affect my rate?", a: "Higher credit scores generally qualify for lower interest rates, which lowers your monthly payment and increases how much home you can afford. The calculator estimates a starting rate by credit tier — your actual rate depends on the lender and current market." },
  { q: "Is this a pre-approval?", a: "No. This is an educational estimate, not a loan offer or commitment to lend. For an accurate number, get pre-approved with a licensed lender — we're happy to connect you with trusted local options." },
];

export default function MortgageCalculatorPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Buyer Tools"
        title="How much home"
        accent="can you afford?"
        body="Enter your income, debts, down payment, and credit score to estimate your price range, interest rate, and monthly payment — instantly."
        treatment="dark"
      />

      <Section className="bg-cream">
        <AffordabilityCalculator />
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="block text-center">Good To Know</Eyebrow>
          <h2 className="mt-3 text-center font-serif text-3xl">Affordability FAQs</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-medium">{f.q}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
