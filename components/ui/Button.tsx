import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "orange" | "black" | "outlineDark" | "outlineLight";

const variants: Record<ButtonVariant, string> = {
  orange:
    "bg-orange text-white border border-orange hover:bg-transparent hover:text-orange",
  black:
    "bg-black text-white border border-black hover:bg-transparent hover:text-black",
  outlineDark:
    "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white hover:text-black",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 cursor-pointer";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "orange",
  className,
  children,
  href,
  type = "button",
  ...rest
}: CommonProps &
  ({ href: string } | { href?: undefined }) &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
