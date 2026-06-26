"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll reveal. Any element with class "reveal" fades + falls into
 * place when it scrolls into view. Re-scans on DOM changes so it works across
 * client-side navigations. No per-page wiring needed.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };

    scan();

    // Re-scan when new content mounts (route changes, tab switches, etc.)
    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
