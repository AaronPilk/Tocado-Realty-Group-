import { salesTicker } from "@/data/ticker";

export function SalesTicker() {
  const items = [...salesTicker, ...salesTicker]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-3">
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-white/70">
            <span className="text-orange">↗</span>
            <span className="font-semibold text-orange">{it.label}</span>
            <span>· {it.address} · {it.city}, {it.state} · {it.price}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
