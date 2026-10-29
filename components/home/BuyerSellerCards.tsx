import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

const cards = [
  {
    title: "Search Homes",
    image: "/images/property/golf-estate.jpg",
    body: "Browse live listings across greater Charlotte, Lake Norman, and the NC/SC border — with a local broker who knows the market to guide you to the right one.",
    cta: "Start Your Search",
    href: "/search",
  },
  {
    title: "Sell Your Home",
    image: "/images/property/living-room.jpg",
    body: "Sharp pricing, standout marketing, and broad exposure that put your home in front of serious buyers — backed by 20+ years across real estate, mortgage, and title.",
    cta: "What's Your Home Worth?",
    href: "/sell",
  },
];

export function BuyerSellerCards() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="block">How Can We Help?</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Buying or selling, handled personally
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Whether you&apos;re just starting your search or ready to list, you work
            directly with Stephenie — clear guidance and a real plan at every step.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-12 bg-orange" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="lift group block overflow-hidden reveal rounded-2xl border border-black/5 bg-white shadow-float"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-5 left-6 font-serif text-3xl text-white">{c.title}</h3>
              </div>
              <div className="p-7">
                <p className="text-sm leading-7 text-muted">{c.body}</p>
                <span className="mt-5 inline-block text-[12px] font-semibold uppercase tracking-[0.16em] text-orange group-hover:text-black">
                  {c.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
