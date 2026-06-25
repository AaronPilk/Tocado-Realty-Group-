import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden bg-black">
      {/* Hero background video (muted/looping). Poster shows while it loads or
          if autoplay is blocked. Swap files in /public/videos + /public/images. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Darken for text legibility — solid base + gradient */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-8 inline-flex rounded-full border border-white/30 bg-black/50 px-6 py-3 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a9d8c8]">
            {siteConfig.heroEyebrow}
          </p>
        </div>

        <h1 className="hero-text-shadow font-serif text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl">
          {siteConfig.heroHeadlineMain}
          <span className="block italic text-[#9ed3c1]">{siteConfig.heroHeadlineAccent}</span>
        </h1>

        <p className="hero-text-shadow mx-auto mt-8 max-w-2xl rounded-2xl bg-black/40 px-8 py-5 text-sm leading-7 text-white/95 backdrop-blur-sm md:text-base">
          {siteConfig.heroBody}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/search" variant="orange">Browse Properties</Button>
          <Button href="/home-valuation" variant="outlineLight">Home Valuation</Button>
          <Button href="/contact" variant="outlineLight">Speak With An Agent</Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.16em] text-white/60">
          <span>Follow</span>
          {siteConfig.social.instagram && <a href={siteConfig.social.instagram} className="hover:text-orange">Instagram</a>}
          {siteConfig.social.facebook && <a href={siteConfig.social.facebook} className="hover:text-orange">Facebook</a>}
          {siteConfig.social.linkedin && <a href={siteConfig.social.linkedin} className="hover:text-orange">LinkedIn</a>}
        </div>
      </div>
    </section>
  );
}
