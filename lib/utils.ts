export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(n?: number): string {
  if (n == null) return "Price upon request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatNumber(n?: number): string {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US").format(n);
}
