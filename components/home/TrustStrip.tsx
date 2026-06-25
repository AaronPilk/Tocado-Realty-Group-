import { Eyebrow } from "@/components/ui/Eyebrow";

const reviewCards = [
  { source: "Zillow", rating: "★★★★★", note: "Verified buyer & seller reviews" },
  { source: "Google", rating: "★★★★★", note: "Trusted across the Carolinas" },
  { source: "Realtor.com", rating: "★★★★★", note: "Top-rated local agents" },
];

export function TrustStrip() {
  return (
    <section className="bg-cream py-14">
      <div className="mx-auto max-w-container px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <Eyebrow>Trusted &amp; Reviewed</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl">
              A top-ranked team in the Carolinas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {reviewCards.map((c) => (
              <div key={c.source} className="min-w-[150px] rounded-2xl border border-black/5 shadow-float bg-white px-5 py-4 text-center">
                <div className="text-orange">{c.rating}</div>
                <div className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em]">{c.source}</div>
                <div className="mt-1 text-[11px] text-muted">{c.note}</div>
              </div>
            ))}
          </div>

          <p className="text-sm leading-6 text-muted lg:text-right">
            Relationship-first guidance, backed by two decades of real estate
            and mortgage experience.
          </p>
        </div>
      </div>
    </section>
  );
}
