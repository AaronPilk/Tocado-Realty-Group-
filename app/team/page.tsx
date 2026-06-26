import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AgentGrid } from "@/components/team/AgentGrid";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Meet The Team",
  description: "Meet the North Carolina real estate team behind every smooth, strategic move.",
  path: "/team",
});

const values = [
  { t: "Local Knowledge", d: "We live and work in these communities — and it shows in every recommendation." },
  { t: "Long-Term Relationships", d: "We're here for the long haul, not a one-and-done transaction." },
  { t: "Steady Guidance", d: "Two decades of experience means you always know your next smart move." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Meet the team"
        body="A relationship-first group of North Carolina agents led by founder Richard Tocado."
        treatment="ivory"
      >
        <Button href="/contact" variant="orange">Contact the Team</Button>
        <Button href="/join-the-team" variant="outlineDark">Join Our Team</Button>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-black/5 shadow-float bg-cream p-7 text-center">
              <h3 className="font-serif text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="mb-10">
          <Eyebrow>The Agents</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Our agents</h2>
        </div>
        <AgentGrid />
      </Section>
    </>
  );
}
