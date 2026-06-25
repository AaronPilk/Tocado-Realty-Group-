"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`block h-[2px] w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span className={`block h-[2px] w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-[2px] w-6 bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-[var(--header-offset,0px)] z-50 flex flex-col bg-black px-6 pb-12 pt-8 text-white">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-2xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="text-sm uppercase tracking-[0.16em] text-white/70"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-orange px-6 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
