import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { footerServices } from "@/data/nav";
import { locations } from "@/data/locations";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "IDX Disclaimer", href: "/idx-disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-light.png"
              alt={siteConfig.name}
              width={308}
              height={98}
              className="h-10 w-auto"
            />
            <p className="mt-5 text-sm leading-6 text-white/60">
              {siteConfig.heroBody}
            </p>
            <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-mint">
              ★★★★★ Trusted across the Carolinas
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Our Services
            </h4>
            <ul className="mt-5 space-y-3">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/70 hover:text-mint">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Our Markets
            </h4>
            <ul className="mt-5 space-y-3">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-sm text-white/70 hover:text-mint">
                    {l.name}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Market Updates
            </h4>
            <p className="mt-5 text-sm text-white/60">
              New listings, sold reports, and NC market trends — straight to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
            <div className="mt-6 space-y-1 text-sm text-white/60">
              <a href={siteConfig.phoneHref} className="block hover:text-mint">{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-mint">{siteConfig.email}</a>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[12px] uppercase tracking-[0.12em] text-white/50 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="text-[12px] text-white/40">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="mt-6 space-y-2 text-[11px] leading-5 text-white/40">
            <p>
              {siteConfig.name} · {siteConfig.legal.license} · {siteConfig.legal.brokerageLicense}
            </p>
            <p>{siteConfig.legal.idxDisclaimer}</p>
            <p className="flex items-center gap-2">
              <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center border border-white/40 text-[8px]">⌂</span>
              Equal Housing Opportunity. All information deemed reliable but not guaranteed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
