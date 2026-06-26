import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JoinTeamForm } from "@/components/forms/JoinTeamForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Join The Team",
  description: "Build your real estate career in North Carolina with real mentorship, marketing, and lead flow — and the support to actually grow.",
  path: "/join-the-team",
});

const support = [
  { t: "Real Mentorship", d: "Hands-on guidance from someone who's been closing deals for two decades." },
  { t: "Done-For-You Marketing", d: "Listing media, social content, and brand support handled for you." },
  { t: "Systems & Admin", d: "The back-office support to keep you focused on clients, not paperwork." },
  { t: "Steady Lead Flow", d: "Real opportunities to grow your pipeline from your very first week." },
];

const paths = [
  { t: "Experienced Agents", d: "Already licensed and producing? We give you leverage, marketing, and mentorship to scale without burning out." },
  { t: "Newly Licensed Agents", d: "Just getting started? We provide the training, systems, and support to build a real career — the right way." },
];

export default function JoinTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career"
        accent="you're proud of."
        body="A team built to give agents what they actually need — mentorship, marketing, and real support — so you can do the best work of your career."
        treatment="charcoal"
      />

      <Section className="bg-cream">
        <div className="max-w-2xl">
          <Eyebrow>Why Agents Join Us</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Support that actually moves the needle</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {support.map((s) => (
            <div key={s.t} className="rounded-2xl border border-black/5 shadow-float bg-white p-6">
              <h3 className="font-serif text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Two Pathways</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">Wherever you are in your career</h2>
            <div className="mt-6 space-y-6">
              {paths.map((p) => (
                <div key={p.t} className="border-l-2 border-orange pl-5">
                  <h3 className="font-serif text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 shadow-float bg-cream p-8">
            <h2 className="font-serif text-2xl">Apply or book a call</h2>
            <p className="mt-2 text-sm text-muted">Confidential — let&apos;s see if it&apos;s a fit.</p>
            <div className="mt-6">
              <JoinTeamForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
