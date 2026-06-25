import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const cards = [
  {
    title: "Guided Buying",
    treatment: "photo-warm",
    body: "From first search to final walkthrough, we help you move with confidence — strategy, off-market access, and sharp negotiation on your side.",
    cta: "Explore Properties",
    href: "/buy",
  },
  {
    title: "Strategic Selling",
    treatment: "photo-dark",
    body: "Pricing, presentation, and exposure built to sell for more, in less time. Your listing reaches the right buyers from day one.",
    cta: "Get Your Home Valued",
    href: "/home-valuation",
  },
];

export function BuyerSellerCards() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="block">How We Guide You</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            A thoughtful approach to every move
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Whether you&apos;re buying your first home or selling a long-time one,
            you get a clear plan and a team that sweats the details.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-12 bg-orange" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="overflow-hidden border border-line bg-white shadow-[0_30px_70px_-50px_rgba(0,0,0,0.4)]">
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
