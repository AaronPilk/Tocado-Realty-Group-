export function Stat({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl text-orange md:text-5xl lg:text-6xl">
        {value}
      </div>
      <div
        className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
          light ? "text-white/70" : "text-muted"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
