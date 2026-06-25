import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadForm } from "@/components/forms/LeadForm";
import { getListing } from "@/lib/idx/provider";
import { formatPrice, formatNumber } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const treatmentClass: Record<string, string> = {
  warm: "photo-warm",
  dark: "photo-dark",
  charcoal: "photo-charcoal",
};

export default async function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = await getListing(params.id);
  if (!listing) notFound();

  const hasPhoto = listing.images.length > 0;

  return (
    <>
      {/* Gallery / hero */}
      <div className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden bg-black">
        {hasPhoto ? (
          <Image src={listing.images[0].url} alt={listing.address} fill className="object-cover" priority />
        ) : (
          <div className={`photo-fill ${treatmentClass[listing.treatment || "warm"]}`} />
        )}
        <span className="absolute left-6 top-6 bg-black/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
          {listing.status}
        </span>
      </div>

      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Details */}
          <div>
            <div className="font-serif text-4xl text-orange">{formatPrice(listing.listPrice)}</div>
            <h1 className="mt-2 font-serif text-3xl">{listing.address}</h1>
            <p className="text-muted">{listing.city}, {listing.state} {listing.zip}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 sm:grid-cols-4">
              {[
                ["Beds", formatNumber(listing.beds)],
                ["Baths", formatNumber(listing.baths)],
                ["Sq Ft", formatNumber(listing.sqft)],
                ["Year", listing.yearBuilt ? String(listing.yearBuilt) : "—"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="font-serif text-2xl">{value}</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Eyebrow>About This Home</Eyebrow>
              <p className="mt-3 text-sm leading-7 text-black/80">{listing.description}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
              {listing.mlsNumber && <Detail label="MLS #" value={listing.mlsNumber} />}
              {listing.propertyType && <Detail label="Type" value={listing.propertyType} />}
              {listing.subdivision && <Detail label="Subdivision" value={listing.subdivision} />}
              {listing.county && <Detail label="County" value={listing.county} />}
              {listing.lotSizeAcres != null && <Detail label="Lot (acres)" value={String(listing.lotSizeAcres)} />}
              {listing.daysOnMarket != null && <Detail label="Days on Market" value={String(listing.daysOnMarket)} />}
            </div>

            <p className="mt-10 border-t border-line pt-6 text-[12px] leading-5 text-muted">
              {listing.attribution ? `Listing courtesy of ${listing.attribution}. ` : ""}
              {siteConfig.legal.idxDisclaimer}
            </p>
          </div>

          {/* Inquiry */}
          <aside className="h-fit border border-line bg-white p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl">Request a showing</h2>
            <p className="mt-2 text-sm text-muted">
              Ask a question or schedule a private tour of this home.
            </p>
            <div className="mt-5">
              <LeadForm
                leadType="schedule-showing"
                listingId={listing.id}
                fields={["firstName", "lastName", "email", "phone", "message"]}
                submitLabel="Request Showing"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-line py-2 pr-6">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
