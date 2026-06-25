"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { MobileNav } from "./MobileNav";
import { HomeSearchDropdown } from "./HomeSearchDropdown";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-shadow ${
        scrolled ? "border-line/80 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)]" : "border-transparent"
      } bg-ivory`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1340px] items-center justify-between gap-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={616}
            height={196}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-x-5 lg:flex xl:gap-x-6">
          <HomeSearchDropdown />
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-black/80 transition-colors hover:text-orange xl:text-[12px] xl:tracking-[0.12em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="hidden whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-black/70 hover:text-orange xl:inline"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-orange hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
