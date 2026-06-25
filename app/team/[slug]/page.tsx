import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadForm } from "@/components/forms/LeadForm";
import { team } from "@/data/team";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return team.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const agent = team.find((a) => a.slug === params.slug);
  return buildMetadata({
    title: agent ? `${agent.name} — ${agent.title}` : "Agent",
    description: agent?.bio.slice(0, 150) || "Meet our team.",
    path: `/team/${params.slug}`,
  });
}

export default function AgentProfilePage({ params }: { params: { slug: string } }) {
  const agent = team.find((a) => a.slug === params.slug);
  if (!agent) notFound();

  return (
    <Section className="bg-cream">
      <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
        <div>
          <div className="relative aspect-[3/4] overflow-hidden border border-line">
            {agent.image ? (
              <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="420px" priority />
            ) : (
              <div className={`photo-fill ${agent.treatment === "warm" ? "photo-warm" : "photo-charcoal"}`} />
            )}
          </div>
        </div>
        <div>
          <Eyebrow>{agent.office} · {agent.specialty}</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl">{agent.name}</h1>
          <p className="text-muted">{agent.title}</p>
          <p className="mt-6 text-sm leading-7 text-black/80">{agent.bio}</p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <a href={`tel:${agent.phone}`} className="font-medium hover:text-orange">{agent.phone}</a>
            <a href={`mailto:${agent.email}`} className="font-medium hover:text-orange">{agent.email}</a>
          </div>

          <div className="mt-10 max-w-lg border border-line bg-white p-6">
            <h2 className="font-serif text-2xl">Contact {agent.name.split(" ")[0]}</h2>
            <div className="mt-5">
              <LeadForm
                leadType="agent-contact"
                fields={["firstName", "lastName", "email", "phone", "message"]}
                submitLabel="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
