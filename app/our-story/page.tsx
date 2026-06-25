import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { stats } from "@/data/stats";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Our Story",
  description: "Real estate, done with intention — the story behind our North Carolina team, founded by Stephenie Tocado.",
  path: "/our-story",
});

const coreValues = [
  { n: "01", t: "Relationships Over Transactions", d: "We measure success in trust earned, not just deals closed." },
  { n: "02", t: "Strategic Guidance", d: "Every move backed by data, experience, and a clear plan." },
  { n: "03", t: "Elevated Experience", d: "A calmer, sharper, more polished way to buy and sell." },
  { n: "04", t: "Growth + Balance", d: "We build careers and serve clients without burning out." },
  { n: "05", t: "Wealth-Building Mindset", d: "Real estate as a long-term strategy, not a one-time event." },
];

const traits = ["Refined", "Intentional", "Approachable", "Trusted", "Confident", "Relentless"];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        title="Real Estate,"
        accent="Done With Intention."
        treatment="dark"
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="block">Our Approach</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">A different kind of real estate experience</h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            Our team was founded by Stephenie Tocado on a simple belief: real
            estate should feel like having a trusted expert in your corner — not
            a salesperson rushing you to the finish line. With more than two
            decades across real estate, title, and mortgage since 2002, Stephenie
            built this team to guide buyers and sellers across North Carolina
            with clarity, strategy, and genuine care.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Licensed in North Carolina and South Carolina, she brings a rare,
            full-picture understanding of the transaction — the kind that protects
            your money and your peace of mind from first conversation to closing
            and beyond.
          </p>
        </div>
      </Section>

      <section className="bg-black py-16">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} light />)}
        </div>
      </section>

      <Section className="bg-ivory">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow className="block">What We Stand For</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Our five core values</h2>
          </div>
          <div className="mt-10 divide-y divide-line rounded-2xl border border-black/5 shadow-float bg-white">
            {coreValues.map((v) => (
              <div key={v.n} className="flex items-start gap-6 p-7">
                <span className="font-serif text-3xl text-orange">{v.n}</span>
                <div>
                  <h3 className="font-serif text-xl">{v.t}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="block">Who We Are</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl">In a few words</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {traits.map((t) => (
              <span key={t} className="rounded-2xl border border-black/5 shadow-float px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-charcoal">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Ready to experience real estate <span className="glow-green italic text-orange">done with intention?</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="orange">Speak With Us</Button>
            <Button href="/search" variant="outlineLight">Browse Homes</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
