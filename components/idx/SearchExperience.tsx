"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Listing } from "@/lib/idx/types";
import { searchMockListings } from "@/lib/idx/mock-provider";
import { ListingCard } from "./ListingCard";

const selectClass =
  "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black/80 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20";

const priceOptions = [200000, 300000, 400000, 500000, 750000, 1000000, 1500000, 2000000];
const searchModes = [
  { key: "area", label: "Search area", placeholder: "City, neighborhood, or ZIP" },
  { key: "address", label: "Search address", placeholder: "Street address" },
  { key: "mls", label: "MLS#", placeholder: "MLS number" },
] as const;

function fmt(n: number) {
  if (n >= 1000000) return `$${n / 1000000}M`;
  if (n >= 1000) return `$${n / 1000}K`;
  return `$${n}`;
}

/**
 * Property search. Uses placeholder listing data with the full search UI
 * (filters, sort, cards). When Stephenie's MLS API is connected, swap
 * `searchMockListings` for a live fetch — the UI stays exactly the same.
 */
export function SearchExperience() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [heroInput, setHeroInput] = useState("");
  const [mode, setMode] = useState<(typeof searchModes)[number]["key"]>("area");

  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [sort, setSort] = useState("newest");

  // Pick up ?q= / ?query= / ?maxPrice= from nav + calculator links.
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const q = sp.get("q") || sp.get("query") || "";
    if (q) { setQuery(q); setHeroInput(q); }
    const mp = sp.get("maxPrice");
    if (mp) setMaxPrice(Number(mp));
  }, []);

  const search = useCallback(async () => {
    setLoading(true);
    const data = await searchMockListings({
      query: query || undefined,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      beds: beds || undefined,
      baths: baths || undefined,
      sort: sort as never,
      limit: 48,
    });
    setListings(data.listings);
    setTotal(data.total);
    setLoading(false);
  }, [query, minPrice, maxPrice, beds, baths, sort]);

  useEffect(() => {
    const t = setTimeout(search, 250);
    return () => clearTimeout(t);
  }, [search]);

  function submitHero(e: React.FormEvent) {
    e.preventDefault();
    setQuery(heroInput);
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      {/* ── Search hero ───────────────────────────────────────── */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-forest md:min-h-[540px]">
        <Image src="/images/property/golf-estate.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/70" />
        <div className="relative z-10 w-full max-w-2xl px-6 text-center">
          <h1 className="hero-text-shadow font-serif text-4xl leading-tight text-white md:text-6xl">
            Finding Your Dream Home <span className="italic text-mint glow-green">Starts Here</span>
          </h1>
          <p className="hero-text-shadow mt-4 text-sm text-white/90 md:text-base">
            Search with confidence knowing your local broker has the latest listings.
          </p>

          <form onSubmit={submitHero} className="mx-auto mt-8 w-full rounded-2xl bg-white p-3 shadow-2xl">
            <div className="flex items-center gap-2">
              <svg className="ml-2 shrink-0 text-black/30" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                placeholder={searchModes.find((s) => s.key === mode)!.placeholder}
                className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-black/40"
              />
              <button type="submit" className="hidden rounded-xl bg-orange px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-black sm:block">
                Search
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center gap-5 border-t border-black/5 pt-3 text-[13px]">
              {searchModes.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setMode(s.key)}
                  className="flex items-center gap-2 text-black/70"
                >
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${mode === s.key ? "border-orange" : "border-black/30"}`}>
                    {mode === s.key && <span className="h-2 w-2 rounded-full bg-orange" />}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* Filter bar */}
      <div id="results" className="sticky top-[78px] z-20 border-y border-black/5 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1340px] flex-wrap items-center gap-2.5 px-4 py-3 sm:px-6">
          <div className="relative min-w-[220px] flex-1">
            <svg className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="City, address, or ZIP"
              className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
            />
          </div>
          <select value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className={selectClass}>
            <option value={0}>Min Price</option>
            {priceOptions.map((n) => <option key={n} value={n}>{fmt(n)}</option>)}
          </select>
          <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className={selectClass}>
            <option value={0}>Max Price</option>
            {priceOptions.map((n) => <option key={n} value={n}>{fmt(n)}</option>)}
          </select>
          <select value={beds} onChange={(e) => setBeds(Number(e.target.value))} className={selectClass}>
            <option value={0}>Beds</option>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+ bd</option>)}
          </select>
          <select value={baths} onChange={(e) => setBaths(Number(e.target.value))} className={selectClass}>
            <option value={0}>Baths</option>
            {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}+ ba</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={`${selectClass} ml-auto`}>
            <option value="newest">Newest</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="beds">Most Beds</option>
            <option value="sqft">Largest</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-[1340px] px-4 py-8 sm:px-6">
        <p className="mb-5 text-sm text-black/60">
          {loading ? "Searching…" : `${total} ${total === 1 ? "home" : "homes"} for sale`}
        </p>
        {listings.length === 0 && !loading ? (
          <div className="rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center text-muted">
            No homes match your filters. Try widening your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
        <p className="mt-8 text-[12px] leading-5 text-muted">
          Sample listings shown for preview. Live MLS listings will populate this view automatically
          once Stephenie&apos;s MLS data feed is connected.
        </p>
      </div>
    </div>
  );
}
