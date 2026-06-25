import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  body?: string;
  treatment?: "warm" | "dark" | "charcoal" | "ivory";
  image?: string;
  children?: React.ReactNode;
};

/** Shared subpage hero. Dark/charcoal/warm = image-style overlay; ivory = light. */
export function PageHero({ eyebrow, title, accent, body, treatment = "dark", image, children }: PageHeroProps) {
  const isLight = treatment === "ivory";
  const bgClass =
    treatment === "warm" ? "photo-warm" : treatment === "charcoal" ? "photo-charcoal" : "photo-dark";

  return (
    <section className={`relative overflow-hidden ${isLight ? "bg-ivory" : "bg-black"}`}>
      {!isLight && image && (
        <>
          <Image src={image} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      {!isLight && !image && <div className={`photo-fill ${bgClass}`} />}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        {eyebrow && <Eyebrow className="block">{eyebrow}</Eyebrow>}
        <h1 className={`mt-4 font-serif text-4xl leading-tight md:text-6xl ${isLight ? "text-black" : "text-white"}`}>
          {title}
          {accent && <span className="block italic text-orange">{accent}</span>}
        </h1>
        {body && (
          <p className={`mx-auto mt-6 max-w-2xl text-sm leading-7 md:text-base ${isLight ? "text-muted" : "text-white/75"}`}>
            {body}
          </p>
        )}
        {children && <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
