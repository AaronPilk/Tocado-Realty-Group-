"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  { n: "01", title: "Let's Talk", body: "It starts with a real conversation — your goals, your timeline, and what a great outcome looks like for you." },
  { n: "02", title: "Build the Plan", body: "We map out a clear, written game plan — pricing, search criteria, or marketing — tailored to your situation." },
  { n: "03", title: "Make Your Move", body: "Buyers get hand-picked options and a head start. Sellers get professional marketing that launches with momentum." },
  { n: "04", title: "Negotiate Hard", body: "We go to bat for you on price, terms, and contingencies — protecting your money at every turn." },
  { n: "05", title: "Get to Closing", body: "Decades of deals behind us means a smoother, on-time close with far fewer surprises." },
  { n: "06", title: "Stay in Your Corner", body: "The relationship doesn't end at the keys — trusted vendors, market updates, and advice whenever you need it." },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-forest2 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <div className="reveal text-center">
          <Eyebrow className="!text-mint block">How It Works</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">From first call to closing day</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-white/15 md:left-1/2" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`reveal relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
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
