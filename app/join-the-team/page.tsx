import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JoinTeamForm } from "@/components/forms/JoinTeamForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Join The Team",
  description: "Grow your real estate career in North Carolina with coaching, marketing, and lead flow — without sacrificing your life.",
  path: "/join-the-team",
});

const support = [
  { t: "Instructional Coaching", d: "Hands-on mentorship from someone who's closed deals for two decades." },
  { t: "Elevated Marketing", d: "Done-for-you listing media, social content, and brand support." },
  { t: "Operational Leverage", d: "Systems and admin support so you can focus on clients, not paperwork." },
  { t: "Consistent Lead Flow", d: "Real opportunities to grow your pipeline from day one." },
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
        title="Grow your career."
        accent="Without sacrificing your life."
        body="A team built to give agents real support — coaching, marketing, and leverage — so you can do the best work of your career."
        treatment="charcoal"
      />

      <Section className="bg-cream">
        <div className="max-w-2xl">
          <Eyebrow>Why Agents Choose Us</Eyebrow>
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
