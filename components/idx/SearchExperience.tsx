import Image from "next/image";
import Link from "next/link";
import { IDXEmbed } from "./IDXEmbed";

/**
 * Live property search — the Canopy MLS IDX feed is the principal experience.
 * No sample/preview listings; the iframe below is real, real-time MLS data.
 */
export function SearchExperience() {
  return (
    <div>
      {/* Search hero */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-forest md:min-h-[480px]">
        <Image
          src="/images/property/golf-estate.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 w-full max-w-2xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint glow-green">
            Live Canopy MLS Search
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
            Search Every Home <span className="italic text-mint glow-green">for Sale</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 md:text-base">
            Real-time listings across greater Charlotte, Lake Norman, and the NC/SC border — search
            by city, address, ZIP, price, beds, baths, and property type.
          </p>
          <a
            href="#results"
            className="mt-8 inline-block rounded-full bg-orange px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black"
          >
            Browse Listings ↓
          </a>
        </div>
      </section>

      {/* Live IDX feed */}
      <div id="results" className="mx-auto max-w-[1340px] px-4 py-10 sm:px-6">
        <IDXEmbed title="Carolina Home Search" minHeight={1150} />
        <p className="mt-4 text-[12px] leading-5 text-muted">
          Listing information is deemed reliable but not guaranteed and should be independently
          verified. Provided by Canopy MLS for consumers&apos; personal, non-commercial use. Questions
          about a listing?{" "}
          <Link href="/contact" className="text-orange underline">Contact Stephenie</Link>.
        </p>
      </div>
    </div>
  );
}
