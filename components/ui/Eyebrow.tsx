import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.22em] text-orange",
        className
      )}
    >
      {children}
    </p>
  );
}
