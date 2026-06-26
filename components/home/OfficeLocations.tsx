"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { locations } from "@/data/locations";

const treatmentClass: Record<string, string> = {
  warm: "photo-warm",
  dark: "photo-dark",
  charcoal: "photo-charcoal",
};

export function OfficeLocations() {
  const [active, setActive] = useState(0);
  const current = locations[active];

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <Eyebrow>Areas We Serve</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Communities across the Carolinas</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Accordion */}
          <div className="divide-y divide-line border-y border-line">
            {locations.map((loc, i) => (
              <div key={loc.slug}>
                <button
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className={`font-serif text-2xl ${active === i ? "text-orange" : "text-black"}`}>
                    {loc.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{loc.state}</span>
                </button>
                {active === i && (
                  <div className="pb-6">
                    <p className="text-sm leading-6 text-muted">{loc.blurb}</p>
                    <div className="mt-3 text-[12px] uppercase tracking-[0.1em] text-black/70">
                      {loc.serviceArea} · {loc.phone}
                    </div>
                    <Link href={`/locations/${loc.slug}`} className="mt-3 inline-block text-[12px] font-semibold uppercase tracking-[0.16em] text-orange hover:text-black">
                      Explore {loc.name} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image card */}
          <div className="relative min-h-[420px] overflow-hidden reveal rounded-2xl border border-black/5 shadow-float">
            {current.image ? (
              <Image src={current.image} alt={`${current.name}, ${current.state}`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            ) : (
              <div className={`photo-fill ${treatmentClass[current.treatment]}`} />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-7">
              <h3 className="font-serif text-3xl text-white">{current.name}, {current.state}</h3>
              <p className="mt-1 text-sm text-white/70">{current.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
