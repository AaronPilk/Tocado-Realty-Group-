import { Eyebrow } from "@/components/ui/Eyebrow";
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
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-9 flex h-24 w-24 items-center justify-center rounded-full border border-white/60 text-white">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
            {siteConfig.logoMark}
          </span>
        </div>

        <div className="mx-auto mb-8 inline-flex border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
          <Eyebrow>{siteConfig.heroEyebrow}</Eyebrow>
        </div>

        <h1 className="font-serif text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl">
          {siteConfig.heroHeadlineMain}
          <span className="block italic text-orange">{siteConfig.heroHeadlineAccent}</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl bg-white/10 px-8 py-5 text-sm leading-7 text-white/80 backdrop-blur-sm md:text-base">
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
