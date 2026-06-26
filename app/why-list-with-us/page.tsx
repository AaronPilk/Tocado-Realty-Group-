import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { LeadForm } from "@/components/forms/LeadForm";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Why List With Us",
  description: "Premium listing exposure, smart pricing, and a marketing engine built to sell your North Carolina home for more.",
  path: "/why-list-with-us",
});

const features = [
  { t: "Standout Media", d: "Magazine-quality photos, video, and floor plans that stop buyers mid-scroll." },
  { t: "Everywhere Buyers Look", d: "Your home on the MLS, Zillow, Realtor.com, Redfin, and every major search site." },
  { t: "Social & Paid Reach", d: "Targeted social campaigns and paid ads that put your listing in front of active buyers." },
  { t: "The Agent Network", d: "We get your home in front of the local agent community the day it goes live." },
];

const plan = [
  { day: "Day 1–2", t: "Prep & Stage", d: "Walkthrough, pricing strategy, and a staging plan to maximize appeal." },
  { day: "Day 3–4", t: "Media Day", d: "Professional photo, video, and floor-plan shoot." },
  { day: "Day 5–6", t: "Pre-Launch Buzz", d: "Coming-soon promotion to build demand before the home hits the market." },
  { day: "Day 7", t: "Go Live", d: "Full MLS + portal launch with social and paid campaigns firing." },
  { day: "Day 8–9", t: "Showings & Open House", d: "Coordinated showings and a high-impact open house." },
  { day: "Day 10", t: "Review Offers", d: "We review and negotiate offers to protect your bottom line." },
];

export default function WhyListPage() {
  return (
    <>
      <PageHero
        eyebrow="Why List With Us"
        title={`Why list with ${siteConfig.shortName}?`}
        accent="Because how you sell matters."
        body="A pricing and marketing system designed to sell your home for more, in less time — backed by two decades of experience."
        treatment="dark"
      >
        <Button href="/home-valuation" variant="orange">Get Your Home Valuation</Button>
        <Button href="/contact" variant="outlineLight">Speak With an Agent</Button>
      </PageHero>

      <section className="bg-forest py-16">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} light />)}
        </div>
      </section>

      <Section className="bg-cream">
        <div className="max-w-2xl">
          <Eyebrow>Marketing That Sells</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">We put your home in front of the right buyers</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            We combine professional media, full portal syndication, social and
            paid advertising, and direct agent outreach so your home reaches the
            widest pool of qualified buyers from day one.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border border-black/5 shadow-float bg-white p-6">
              <h3 className="font-serif text-xl">{f.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-2xl">
          <Eyebrow>The Launch Plan</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">From prep to offers, without the guesswork</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plan.map((p) => (
            <div key={p.day} className="rounded-2xl border border-black/5 shadow-float bg-cream p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">{p.day}</div>
              <h3 className="mt-2 font-serif text-xl">{p.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-forest2">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="glow-green !text-mint block">Ready When You Are</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Let&apos;s get your home sold</h2>
          <p className="mt-3 text-sm text-white/70">Start with a free, no-obligation valuation.</p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 p-8">
          <LeadForm
            leadType="home-valuation"
            fields={["firstName", "lastName", "email", "phone", "propertyAddress", "message"]}
            submitLabel="Request Valuation"
            dark
          />
        </div>
      </Section>
    </>
  );
}
