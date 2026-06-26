import Link from "next/link";
import Image from "next/image";
import { Listing } from "@/lib/idx/types";
import { formatPrice, formatNumber } from "@/lib/utils";

const treatmentClass: Record<string, string> = {
  warm: "photo-warm",
  dark: "photo-dark",
  charcoal: "photo-charcoal",
};

const statusColor: Record<string, string> = {
  Active: "bg-emerald-600",
  "Coming Soon": "bg-orange",
  Pending: "bg-amber-500",
  Contingent: "bg-amber-500",
  Closed: "bg-neutral-600",
  Sold: "bg-neutral-600",
};

export function ListingCard({ listing }: { listing: Listing }) {
  const hasPhoto = listing.images.length > 0;
  return (
    <Link
      href={`/listing/${listing.id}`}
      className="group block overflow-hidden reveal rounded-2xl border border-black/5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasPhoto ? (
          <Image
            src={listing.images[0].url}
            alt={listing.address}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className={`photo-fill ${treatmentClass[listing.treatment || "warm"]}`} />
        )}
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${statusColor[listing.status] || "bg-neutral-700"}`}>
          {listing.status}
        </span>
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black/60 backdrop-blur transition-colors group-hover:text-orange">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </span>
      </div>
      <div className="p-4">
        <div className="text-[22px] font-semibold tracking-tight text-black">
          {formatPrice(listing.listPrice)}
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-[13px] text-black/80">
          <span className="font-medium">{formatNumber(listing.beds)} bds</span>
          <span className="text-black/20">•</span>
          <span className="font-medium">{formatNumber(listing.baths)} ba</span>
          <span className="text-black/20">•</span>
          <span className="font-medium">{formatNumber(listing.sqft)} sqft</span>
        </div>
        <div className="mt-1.5 truncate text-sm text-muted">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </div>
      </div>
    </Link>
  );
}
