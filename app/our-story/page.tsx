import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About Stephenie Tocado",
  description:
    "Meet Stephenie Tocado — Owner and Broker-in-Charge of Tocado & Company, with 20+ years across real estate, mortgage lending, mortgage processing, and title insurance in NC and SC.",
  path: "/our-story",
});

const expertise = [
  { t: "Real Estate", d: "Residential sales and closings across the Carolinas — from the first showing to the closing table." },
  { t: "Mortgage Lending", d: "A working knowledge of financing that helps buyers move with confidence and sellers weigh offers." },
  { t: "Mortgage Processing", d: "Deep familiarity with loan processing, so nothing stalls between contract and close." },
  { t: "Title Insurance", d: "Understanding of title and closing details that protect your purchase and your money." },
];

const communities = [
  "Charlotte", "Ballantyne", "Lake Norman", "Huntersville", "Cornelius", "Davidson",
  "Mooresville", "Statesville", "Concord", "Kannapolis", "Matthews", "Mint Hill",
  "Monroe", "Indian Trail", "Waxhaw", "Weddington", "Oakboro", "Belmont",
  "McAdenville", "Fort Mill", "Indian Land", "Clover", "Rock Hill",
];

export default function AboutStepheniePage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Stephenie Tocado,"
        accent="Broker / Owner."
        body="A different perspective on real estate — built on two decades across sales, financing, processing, and title."
        treatment="dark"
        image="/images/property/exterior-white.jpg"
      />

      {/* Bio split */}
      <Section className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-[360px_1fr]">
          <div className="reveal overflow-hidden rounded-2xl border border-black/5 shadow-float">
            <div className="relative aspect-[4/5]">
              <Image
                src={siteConfig.founder.image}
                alt={siteConfig.founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
            <div className="bg-forest p-5 text-white">
              <div className="font-serif text-xl">{siteConfig.founder.name}</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-mint">{siteConfig.founder.title}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/60">Tocado &amp; Company</div>
            </div>
          </div>

          <div>
            <Eyebrow>Her Story</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">A well-rounded perspective</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-black/80">
              <p>
                With more than 20 years of experience in real estate, mortgage lending, mortgage
                processing, and title insurance, Stephenie Tocado brings a unique and well-rounded
                perspective to helping clients buy and sell homes throughout North Carolina and
                South Carolina.
              </p>
              <p>
                Since beginning her career in 2002, Stephenie has worked across nearly every stage of
                the real estate process — residential sales, mortgage financing, loan processing,
                title insurance, and real estate closings. That broad experience gives clients the
                benefit of working with someone who understands not only how to market and sell a
                home, but also the financing and closing details that are critical to a successful
                transaction.
              </p>
              <p>
                As the owner and Broker-in-Charge of Tocado &amp; Company, an independent boutique
                real estate brokerage, Stephenie takes a personal, straightforward approach. She
                believes in honest communication, practical guidance, and building lasting
                relationships with her clients.
              </p>
              <p>
                Whether you are buying, selling, or simply exploring your options, Stephenie&apos;s
                goal is to make the process as smooth, informed, and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials strip (verifiable — no sales totals) */}
      <section className="bg-forest py-16">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} light />)}
        </div>
      </section>

      {/* Expertise */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="block">What Sets Her Apart</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Four fields, one trusted guide</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Most agents know sales. Stephenie has worked the financing and closing side too — so she
            sees the whole transaction, not just the listing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => (
            <div key={e.t} className="reveal rounded-2xl border border-black/5 shadow-float bg-white p-6">
              <div className="font-serif text-3xl text-orange">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-xl">{e.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{e.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service area */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="block">Where She Works</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Serving the greater Charlotte region</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Licensed in both North Carolina and South Carolina, Stephenie serves Charlotte and the
            communities across the NC/SC border — roughly Statesville to Clover and Oakboro to
            McAdenville.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {communities.map((c) => (
              <span key={c} className="rounded-full border border-black/10 bg-cream px-4 py-2 text-[12px] font-medium tracking-[0.04em] text-black/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-forest2">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Experienced guidance, <span className="glow-green italic text-mint">personal service.</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="orange">Get in Touch</Button>
            <Button href="/search" variant="outlineLight">Search Homes</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
