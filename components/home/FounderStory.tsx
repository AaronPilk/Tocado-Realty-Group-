import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site";

export function FounderStory() {
  const f = siteConfig.founder;
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid items-stretch overflow-hidden border border-line bg-white shadow-[0_40px_90px_-50px_rgba(0,0,0,0.4)] md:grid-cols-2">
          {/* Portrait */}
          <div className="relative min-h-[380px]">
            <Image
              src={f.image}
              alt={f.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">{f.name}</div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-white/70">{f.title}</div>
            </div>
          </div>

          {/* Copy */}
          <div className="bg-black p-9 text-white md:p-12">
            <Eyebrow>The Person Behind The Team</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Real estate built on{" "}
              <span className="italic text-orange">relationships, not transactions.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Stephenie Tocado has spent more than twenty years inside the
              transaction — real estate, title, and mortgage since 2002. That
              full-picture experience means she sees what most agents miss: the
              details that protect your money, your timeline, and your peace of
              mind.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Licensed in North Carolina and South Carolina, she built this team
              to give buyers and sellers a calmer, sharper way to move — proactive
              communication, real strategy, and a standard of care that doesn&apos;t
              end at the closing table.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="font-serif text-2xl text-orange">20+</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-orange">2</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">States Licensed</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-orange">100%</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Client-First</div>
              </div>
            </div>

            <a href="/our-story" className="mt-8 inline-block text-[12px] font-semibold uppercase tracking-[0.16em] text-orange hover:text-white">
              Our Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
