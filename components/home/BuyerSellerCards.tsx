import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const cards = [
  {
    title: "For Buyers",
    treatment: "photo-warm",
    body: "We turn the search into a plan — early access to the right homes, straight answers, and tough negotiation so you buy smart and close clean.",
    cta: "Start Your Search",
    href: "/buy",
  },
  {
    title: "For Sellers",
    treatment: "photo-dark",
    body: "Sharp pricing, standout marketing, and broad exposure that put your home in front of serious buyers — and sell it for what it's worth.",
    cta: "See What It's Worth",
    href: "/home-valuation",
  },
];

export function BuyerSellerCards() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="block">How We Help</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Buying or selling, handled with care
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            First-time buyer or longtime homeowner — you get a clear game plan
            and a team that handles the details so you don&apos;t have to.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-12 bg-orange" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="lift overflow-hidden rounded-2xl border border-black/5 bg-white shadow-float">
              <div className="relative aspect-[16/10]">
                <div className={`photo-fill ${c.treatment}`} />
                <h3 className="absolute bottom-5 left-6 font-serif text-3xl text-white">{c.title}</h3>
              </div>
              <div className="p-7">
                <p className="text-sm leading-7 text-muted">{c.body}</p>
                <Link href={c.href} className="mt-5 inline-block text-[12px] font-semibold uppercase tracking-[0.16em] text-orange hover:text-black">
                  {c.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
