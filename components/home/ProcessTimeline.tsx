import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  { n: "01", title: "The Conversation", body: "We start by understanding your goals, timeline, and what a win actually looks like for you." },
  { n: "02", title: "The Strategy", body: "A clear, written plan — pricing, search criteria, or marketing — built around your situation." },
  { n: "03", title: "The Search / Launch", body: "Buyers get curated options and early access. Sellers get pro marketing that hits the market with momentum." },
  { n: "04", title: "The Negotiation", body: "We protect your position and your money — terms, contingencies, and price handled with care." },
  { n: "05", title: "The Close", body: "Two decades of transaction experience means a smoother, on-time closing with fewer surprises." },
  { n: "06", title: "Beyond the Close", body: "We stay in your corner — vendors, market updates, and guidance long after the keys change hands." },
];

export function ProcessTimeline() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Eyebrow className="block">Our Process</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">How we work with you</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-white/15 md:left-1/2" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2" />
                <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-orange text-[12px] font-semibold text-white md:left-1/2">
                  {s.n}
                </div>
                <div className={`pl-14 md:w-1/2 md:pl-0 ${i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <h3 className="font-serif text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
