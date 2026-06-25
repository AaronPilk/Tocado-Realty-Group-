"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockListings } from "@/data/mock-listings";
import { Listing } from "@/lib/idx/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatPrice, formatNumber } from "@/lib/utils";

const treatmentClass: Record<string, string> = {
  warm: "photo-warm", dark: "photo-dark", charcoal: "photo-charcoal",
};

const priceBuckets = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $500K", min: 0, max: 500000 },
  { label: "$500K–$750K", min: 500000, max: 750000 },
  { label: "$750K–$1M", min: 750000, max: 1000000 },
  { label: "$1M+", min: 1000000, max: Infinity },
];

function initials(name?: string) {
  if (!name) return "TRG";
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${
        active ? "border-black bg-black text-white" : "border-line bg-white text-black/60 hover:border-black/40"
      }`}
    >
      {children}
    </button>
  );
}

export function FeaturedProperties() {
  const cities = useMemo(
    () => ["All", ...Array.from(new Set(mockListings.map((l) => l.city))).sort()],
    []
  );
  const [city, setCity] = useState("All");
  const [bucket, setBucket] = useState(0);

  const filtered = useMemo(() => {
    const b = priceBuckets[bucket];
    return mockListings.filter(
      (l) => (city === "All" || l.city === city) && l.listPrice >= b.min && l.listPrice < b.max
    ).slice(0, 6);
  }, [city, bucket]);

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Curated Listings</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Featured Properties</h2>
          </div>
          <Link
            href="/search"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-black px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-black hover:text-white"
          >
            View All Listings →
          </Link>
        </div>

        {/* City chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {cities.map((c) => (
            <Chip key={c} active={city === c} onClick={() => setCity(c)}>{c}</Chip>
          ))}
        </div>

        {/* Price chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {priceBuckets.map((b, i) => (
            <Chip key={b.label} active={bucket === i} onClick={() => setBucket(i)}>{b.label}</Chip>
          ))}
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-muted">No featured homes in this range. Try another filter.</p>
        ) : (
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l) => <FeaturedCard key={l.id} listing={l} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ listing }: { listing: Listing }) {
  const hasPhoto = listing.images.length > 0;
  return (
    <div className="lift flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-float">
      <Link href={`/listing/${listing.id}`} className="group relative block aspect-[4/3] overflow-hidden">
        {hasPhoto ? (
          <Image src={listing.images[0].url} alt={listing.address} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
        ) : (
          <div className={`photo-fill ${treatmentClass[listing.treatment || "warm"]}`} />
        )}
        <span className="absolute left-3 top-3 bg-black/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {listing.status}
        </span>
        <span className="absolute right-3 top-3 bg-orange px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {listing.city}
        </span>
        <span className="absolute bottom-3 right-3 bg-white px-3 py-1.5 font-serif text-lg text-black shadow">
          {formatPrice(listing.listPrice)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/listing/${listing.id}`}>
          <h3 className="font-serif text-2xl leading-tight hover:text-orange">{listing.address}</h3>
        </Link>
        <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{listing.description}</p>

        <div className="mt-4 flex items-center gap-4 border-y border-line py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-black/70">
          <span>{formatNumber(listing.beds)} Beds</span>
          <span className="text-line">|</span>
          <span>{formatNumber(listing.baths)}{listing.halfBaths ? `/${listing.halfBaths}` : ""} Baths</span>
          <span className="text-line">|</span>
          <span>{formatNumber(listing.sqft)} Sq Ft</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
              {initials(listing.listingAgent)}
            </span>
            <div className="leading-tight">
              <div className="text-[9px] uppercase tracking-[0.14em] text-muted">Listed By</div>
              <div className="text-[12px] font-medium">{listing.listingAgent}</div>
            </div>
          </div>
          {listing.detailUrl && (
            <a
              href={listing.detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange hover:text-black"
            >
              View on Zillow →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
