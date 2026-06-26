"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

// MOCK market data — replace with real Canopy MLS / Charlotte Regional Realtor
// Association figures before launch.
const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const metrics = {
  dom: { label: "Days on Market", unit: "", data: [22, 25, 28, 34, 30, 26, 24, 21, 19, 17, 15, 14], fmt: (n: number) => `${Math.round(n)} days` },
  ratio: { label: "List-to-Sale Ratio", unit: "%", data: [98.1, 98.4, 98.0, 97.6, 97.9, 98.3, 98.6, 99.0, 99.2, 99.4, 99.5, 99.4], fmt: (n: number) => `${n.toFixed(1)}%` },
  price: { label: "Median Sale Price", unit: "$", data: [372, 379, 384, 388, 386, 383, 389, 394, 398, 401, 404, 405], fmt: (n: number) => `$${Math.round(n)}K` },
} as const;

type MetricKey = keyof typeof metrics;

// Build a smooth SVG path (Catmull-Rom → cubic bezier) from points.
function smoothPath(pts: [number, number][]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

export function MarketReport() {
  const [active, setActive] = useState<MetricKey>("dom");
  const m = metrics[active];

  const W = 800, H = 300, padX = 24, padY = 30;
  const min = Math.min(...m.data);
  const max = Math.max(...m.data);
  const range = max - min || 1;
  const pts: [number, number][] = m.data.map((v, i) => {
    const x = padX + (i / (m.data.length - 1)) * (W - padX * 2);
    const y = padY + (1 - (v - min) / range) * (H - padY * 2);
    return [x, y];
  });
  const line = smoothPath(pts);
  const area = `${line} L ${pts[pts.length - 1][0]},${H - padY} L ${pts[0][0]},${H - padY} Z`;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Market Intelligence</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Charlotte Metro<br />Market Report
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Real-time market conditions across the Charlotte metro area. Data sourced from
              Canopy MLS and the Charlotte Regional Realtor Association — updated monthly.
            </p>
            <div className="mt-2 h-[2px] w-12 bg-orange" />
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(metrics) as MetricKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
                  active === key ? "bg-black text-white" : "rounded-2xl border border-black/5 shadow-float text-black/60 hover:border-black/40"
                }`}
              >
                {metrics[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="mt-10 reveal rounded-2xl border border-black/5 shadow-float bg-cream/40 p-4 md:p-8">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`${m.label} over the last 12 months`}>
            <defs>
              <linearGradient id="mr-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-orange)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--color-orange)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 0.5, 1].map((g) => (
              <line key={g} x1={padX} x2={W - padX} y1={padY + g * (H - padY * 2)} y2={padY + g * (H - padY * 2)} stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3 4" />
            ))}
            <path d={area} fill="url(#mr-fill)" />
            <path d={line} fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeLinecap="round" />
            {pts.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 5 : 0} fill="var(--color-orange)" />
            ))}
          </svg>
          <div className="mt-2 flex justify-between px-1 text-[10px] uppercase tracking-[0.08em] text-muted">
            {months.map((mo) => <span key={mo}>{mo}</span>)}
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-8 grid grid-cols-1 divide-y divide-line reveal rounded-2xl border border-black/5 shadow-float sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { v: "14", l: "Avg. Days on Market" },
            { v: "99.4%", l: "List-to-Sale Ratio" },
            { v: "$405K", l: "Median Sale Price" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-7 text-center">
              <div className="font-serif text-4xl text-black">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">{s.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.1em] text-muted">
          Sample data shown · Source: Canopy MLS / Charlotte Regional Realtor Association [[verify before launch]]
        </p>

        {/* CTA bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ivory px-7 py-6 shadow-float sm:flex-row">
          <div>
            <h3 className="font-serif text-xl">Want to know what your home is worth in today&apos;s market?</h3>
            <p className="mt-1 text-sm text-muted">Get a personalized valuation based on current Charlotte-market conditions.</p>
          </div>
          <Button href="/home-valuation" variant="black">Get My Home Value</Button>
        </div>
      </div>
    </section>
  );
}
