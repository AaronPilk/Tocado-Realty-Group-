"use client";

import Link from "next/link";
import { useState } from "react";
import { neighborhoodGroups } from "@/data/neighborhoods";

export function HomeSearchDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/search"
        className="flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-black/80 transition-colors hover:text-orange xl:text-[12px] xl:tracking-[0.12em]"
      >
        Home Search
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div className="w-[640px] rounded-2xl border border-black/5 shadow-float bg-ivory p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="mb-5 flex gap-6 border-b border-line pb-4">
              <Link href="/search" className="text-[12px] font-semibold uppercase tracking-[0.12em] text-orange hover:text-black">
                Browse All Listings →
              </Link>
              <Link href="/neighborhoods" className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/70 hover:text-orange">
                Compare Neighborhoods →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
              {neighborhoodGroups.map((group) => (
                <div key={group.heading}>
                  <h4 className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {group.heading}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.items.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/neighborhoods/${n.slug}`}
                          className="text-[13px] leading-snug text-black/75 hover:text-orange"
                        >
                          {n.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
