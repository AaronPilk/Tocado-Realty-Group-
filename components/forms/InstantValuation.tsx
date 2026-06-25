"use client";

import { useState } from "react";
import { submitLead } from "@/lib/forms/submitLead";
import { siteConfig } from "@/data/site";

type Result = { price: number; low: number | null; high: number | null };

function money(n: number | null) {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20";
const label = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-black/60";

export function InstantValuation() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [address, setAddress] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) {
      setError("Please enter your property address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");

    const p = new URLSearchParams({ address });
    if (beds) p.set("bedrooms", beds);
    if (baths) p.set("bathrooms", baths);
    if (sqft) p.set("squareFootage", sqft);

    // Fire a soft lead so Stephenie sees the interest even if they don't fill the full form
    submitLead({ leadType: "home-valuation", propertyAddress: address, message: "Used the instant home value tool." });

    try {
      const res = await fetch(`/api/valuation?${p.toString()}`);
      const data = await res.json();
      if (data.error || typeof data.price !== "number") {
        setError(data.error || "No estimate available for that address.");
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("done");
    } catch {
      setError("Couldn't reach the valuation service. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done" && result) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-float">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">Estimated Value</p>
        <div className="mt-3 font-serif text-5xl text-black md:text-6xl">{money(result.price)}</div>
        {result.low != null && result.high != null && (
          <p className="mt-3 text-sm text-muted">
            Likely range: <span className="font-medium text-black">{money(result.low)} – {money(result.high)}</span>
          </p>
        )}
        <p className="mx-auto mt-5 max-w-md text-[12px] leading-5 text-muted">
          This is an automated estimate and may differ from your home&apos;s true market value.
          For a precise, no-obligation valuation, {siteConfig.founder.name.split(" ")[0]} will prepare a
          custom market analysis.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#request" className="rounded-full bg-orange px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-black hover:shadow-lg">
            Get My Precise Valuation
          </a>
          <button
            onClick={() => { setStatus("idle"); setResult(null); }}
            className="rounded-full border border-black/15 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-black/70 transition hover:border-black"
          >
            Try Another Address
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-float md:p-8">
      <div>
        <label className={label}>Property Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St, Charlotte, NC 28203"
          className={input}
        />
      </div>
      <p className="mt-3 text-[12px] text-muted">Optional — add details for a more accurate estimate:</p>
      <div className="mt-2 grid grid-cols-3 gap-3">
        <input value={beds} onChange={(e) => setBeds(e.target.value)} inputMode="numeric" placeholder="Beds" className={input} />
        <input value={baths} onChange={(e) => setBaths(e.target.value)} inputMode="numeric" placeholder="Baths" className={input} />
        <input value={sqft} onChange={(e) => setSqft(e.target.value)} inputMode="numeric" placeholder="Sq Ft" className={input} />
      </div>

      {status === "error" && <p className="mt-4 text-sm text-orange">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-orange px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-black hover:shadow-lg disabled:opacity-60"
      >
        {status === "loading" ? "Estimating…" : "Get My Instant Estimate"}
      </button>
    </form>
  );
}
