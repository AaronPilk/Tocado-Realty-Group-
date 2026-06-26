import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { stats } from "@/data/stats";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Our Story",
  description: "The story behind Tocado Realty Group — a relationship-first North Carolina real estate team founded by Richard Tocado.",
  path: "/our-story",
});

const coreValues = [
  { n: "01", t: "People Before Paperwork", d: "We measure success by trust earned, not just deals closed." },
  { n: "02", t: "A Real Game Plan", d: "Every move is backed by data, experience, and a plan that fits you." },
  { n: "03", t: "A Smoother Experience", d: "A calmer, clearer, less stressful way to buy or sell." },
  { n: "04", t: "In It For The Long Run", d: "We're building relationships, not chasing one-time commissions." },
  { n: "05", t: "Building Real Wealth", d: "We treat real estate as a long-term strategy, not a single transaction." },
];

const traits = ["Down-to-Earth", "Strategic", "Approachable", "Trusted", "Straightforward", "Relentless"];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Real estate that"
        accent="actually feels personal."
        treatment="dark"
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="block">Our Approach</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">A better way to buy and sell</h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            Tocado Realty Group started with one idea: working with a real estate
            agent should feel like having a trusted expert on your side — not a
            salesperson pushing you to sign. After more than twenty years across
            real estate, title, and mortgage since 2002, Richard set out to give
            North Carolina buyers and sellers exactly that: clarity, strategy,
            and genuine care.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Licensed in both North Carolina and South Carolina, he brings a
            rare, full-picture view of how a deal really comes together — the kind
            of insight that protects your money and your peace of mind from the
            first conversation through closing and well beyond.
          </p>
        </div>
      </Section>

      <section className="bg-forest py-16">
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

      <Section className="bg-forest2">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Ready for real estate that <span className="glow-green italic text-mint">puts you first?</span>
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
