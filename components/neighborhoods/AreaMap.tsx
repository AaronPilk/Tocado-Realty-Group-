"use client";

import { useEffect, useRef, useState } from "react";

type Cat = {
  key: string;
  label: string;
  type: string;
  color: string;
  emoji: string;
};

const CATEGORIES: Cat[] = [
  { key: "schools", label: "Schools", type: "school", color: "#2563eb", emoji: "🎓" },
  { key: "parks", label: "Parks", type: "park", color: "#16a34a", emoji: "🌳" },
  { key: "dining", label: "Dining", type: "restaurant", color: "#f97316", emoji: "🍽️" },
  { key: "shopping", label: "Shopping", type: "shopping_mall", color: "#7c3aed", emoji: "🛍️" },
  { key: "healthcare", label: "Healthcare", type: "hospital", color: "#dc2626", emoji: "🏥" },
];

const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

// Load the Google Maps JS API once.
let mapsPromise: Promise<void> | null = null;
function loadMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).google?.maps?.places) return Promise.resolve();
  if (mapsPromise) return mapsPromise;
  mapsPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places&loading=async`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject();
    document.head.appendChild(s);
  });
  return mapsPromise;
}

export function AreaMap({ name, center }: { name: string; center: { lat: number; lng: number } }) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<Record<string, any[]>>({});
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [active, setActive] = useState<string[]>(CATEGORIES.map((c) => c.key));
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(!MAPS_KEY);

  useEffect(() => {
    if (!MAPS_KEY) return;
    let cancelled = false;

    loadMaps()
      .then(() => {
        if (cancelled || !mapRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const google = (window as any).google;
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom: 13,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        });
        const service = new google.maps.places.PlacesService(map);
        const info = new google.maps.InfoWindow();

        CATEGORIES.forEach((cat) => {
          service.nearbySearch(
            { location: center, radius: 4000, type: cat.type },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (results: any[], status: string) => {
              if (status !== google.maps.places.PlacesServiceStatus.OK || !results) return;
              const top = results.slice(0, 8);
              setCounts((c) => ({ ...c, [cat.key]: top.length }));
              markersRef.current[cat.key] = top.map((place) => {
                const marker = new google.maps.Marker({
                  map,
                  position: place.geometry.location,
                  title: place.name,
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: cat.color,
                    fillOpacity: 1,
                    strokeColor: "#fff",
                    strokeWeight: 2,
                    scale: 8,
                  },
                });
                marker.addListener("click", () => {
                  info.setContent(
                    `<div style="font-family:system-ui;max-width:220px">
                      <div style="font-weight:600;font-size:14px">${place.name}</div>
                      <div style="font-size:12px;color:#666;margin-top:2px">${cat.emoji} ${cat.label}${place.rating ? ` · ★ ${place.rating}` : ""}</div>
                      <div style="font-size:12px;color:#888;margin-top:2px">${place.vicinity || ""}</div>
                    </div>`
                  );
                  info.open(map, marker);
                });
                return marker;
              });
            }
          );
        });
        setReady(true);
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
    };
  }, [center]);

  function toggle(key: string) {
    const next = active.includes(key) ? active.filter((k) => k !== key) : [...active, key];
    setActive(next);
    const markers = markersRef.current[key] || [];
    markers.forEach((m) => m.setVisible(next.includes(key)));
  }

  // Fallback: simple Google Maps embed (no key needed) — still shows the area.
  if (failed) {
    const q = encodeURIComponent(`${name}, North Carolina`);
    return (
      <div className="overflow-hidden reveal rounded-2xl border border-black/5 shadow-float">
        <iframe
          title={`Map of ${name}`}
          src={`https://maps.google.com/maps?q=${q}&z=13&output=embed`}
          className="h-[460px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div>
      {/* Category filter chips */}
      <div className="mb-5 flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => {
          const on = active.includes(cat.key);
          return (
            <button
              key={cat.key}
              onClick={() => toggle(cat.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                on ? "border-black/10 bg-white shadow-float" : "border-black/10 bg-transparent opacity-50"
              }`}
            >
              <span style={{ color: cat.color }}>{cat.emoji}</span>
              {cat.label}
              <span
                className="flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold text-white"
                style={{ backgroundColor: cat.color }}
              >
                {counts[cat.key] ?? "·"}
              </span>
            </button>
          );
        })}
      </div>

      <div ref={mapRef} className="h-[460px] w-full overflow-hidden reveal rounded-2xl border border-black/5 shadow-float md:h-[520px]" />

      <p className="mt-3 text-[12px] text-muted">
        {ready ? "Click any marker to learn more." : "Loading nearby places…"} Local points of interest near {name}.
      </p>
    </div>
  );
}
