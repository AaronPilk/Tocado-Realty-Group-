"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* Representative starting rates by credit tier (30-yr). Estimates only — rates
   change daily. Edit these defaults or let the user override the rate. */
const CREDIT_TIERS = [
  { key: "excellent", label: "Excellent (760+)", rate: 6.5 },
  { key: "great", label: "Very Good (700–759)", rate: 6.75 },
  { key: "good", label: "Good (660–699)", rate: 7.1 },
  { key: "fair", label: "Fair (620–659)", rate: 7.6 },
  { key: "building", label: "Building (<620)", rate: 8.5 },
];

const TAX_RATE = 0.009; // ~0.9%/yr of price (NC avg-ish)
const INS_RATE = 0.004; // ~0.4%/yr of price
const PMI_RATE = 0.006; // ~0.6%/yr of loan when <20% down

function usd(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));
}

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-black/60";

export function AffordabilityCalculator() {
  const [income, setIncome] = useState(90000);
  const [debts, setDebts] = useState(500);
  const [down, setDown] = useState(40000);
  const [tierKey, setTierKey] = useState("great");
  const [term, setTerm] = useState(30);
  const [rateOverride, setRateOverride] = useState<string>("");

  const tier = CREDIT_TIERS.find((t) => t.key === tierKey)!;
  const rate = rateOverride !== "" ? Number(rateOverride) : tier.rate;

  const result = useMemo(() => {
    const grossMonthly = income / 12;
    // DTI caps: 28% front-end (housing) and 43% back-end (housing + debts)
    const frontCap = 0.28 * grossMonthly;
    const backCap = 0.43 * grossMonthly - debts;
    const maxMonthly = Math.max(0, Math.min(frontCap, backCap));

    const r = rate / 100 / 12;
    const n = term * 12;
    const piFactor = r > 0 ? (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 1 / n;

    function monthlyForPrice(P: number) {
      const loan = Math.max(0, P - down);
      const pi = loan * piFactor;
      const tax = (P * TAX_RATE) / 12;
      const ins = (P * INS_RATE) / 12;
      const pmi = down < 0.2 * P ? (loan * PMI_RATE) / 12 : 0;
      return { total: pi + tax + ins + pmi, pi, tax, ins, pmi, loan };
    }

    // Binary search for the largest price whose payment fits the cap
    let lo = down;
    let hi = down + 5_000_000;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      if (monthlyForPrice(mid).total <= maxMonthly) lo = mid;
      else hi = mid;
    }
    const price = lo;
    const breakdown = monthlyForPrice(price);
    return { maxMonthly, price, ...breakdown };
  }, [income, debts, down, rate, term]);

  const affordsLittle = result.price <= down + 1000;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-float md:p-8">
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Annual Household Income</label>
            <input type="number" min={0} step={1000} value={income} onChange={(e) => setIncome(Number(e.target.value))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Monthly Debt Payments (car, cards, loans)</label>
            <input type="number" min={0} step={50} value={debts} onChange={(e) => setDebts(Number(e.target.value))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Down Payment</label>
            <input type="number" min={0} step={1000} value={down} onChange={(e) => setDown(Number(e.target.value))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Credit Score</label>
            <select value={tierKey} onChange={(e) => { setTierKey(e.target.value); setRateOverride(""); }} className={inputClass}>
              {CREDIT_TIERS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Loan Term</label>
              <select value={term} onChange={(e) => setTerm(Number(e.target.value))} className={inputClass}>
                <option value={30}>30 years</option>
                <option value={15}>15 years</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Interest Rate (%)</label>
              <input type="number" step={0.05} value={rateOverride !== "" ? rateOverride : tier.rate} onChange={(e) => setRateOverride(e.target.value)} className={inputClass} />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col rounded-2xl border border-black/5 bg-cream p-6 shadow-float md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">You Could Afford Up To</p>
        <div className="mt-1 font-serif text-5xl text-black md:text-6xl">
          {affordsLittle ? usd(down) : usd(result.price)}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-4 text-center shadow-float">
            <div className="font-serif text-2xl text-orange">{rate.toFixed(2)}%</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">Est. Rate</div>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-float">
            <div className="font-serif text-2xl text-orange">{usd(result.total)}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">Est. Monthly</div>
          </div>
        </div>

        <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
          <Row label="Principal & Interest" value={usd(result.pi)} />
          <Row label="Property Taxes (est.)" value={usd(result.tax)} />
          <Row label="Homeowners Insurance (est.)" value={usd(result.ins)} />
          {result.pmi > 0 && <Row label="Mortgage Insurance (PMI)" value={usd(result.pmi)} />}
          <div className="flex justify-between border-t border-line pt-2 font-semibold">
            <span>Total Monthly Payment</span><span>{usd(result.total)}</span>
          </div>
          <Row label="Loan Amount" value={usd(result.loan)} />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`/search?maxPrice=${Math.round(result.price)}`} className="rounded-full bg-orange px-6 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-black hover:shadow-lg">
            Search Homes Under {usd(result.price)}
          </Link>
          <Link href="/contact" className="rounded-full border border-black/15 px-6 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-black/70 transition hover:border-black">
            Talk to an Agent
          </Link>
        </div>

        <p className="mt-5 text-[11px] leading-5 text-muted">
          Estimate only — not a loan offer, pre-approval, or commitment to lend. Rates, taxes,
          insurance, and qualifying guidelines vary; figures use 28%/43% DTI assumptions and
          estimated tax/insurance/PMI. Consult a licensed lender for an accurate pre-approval.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-black/80">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
