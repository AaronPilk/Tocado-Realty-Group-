import { Listing } from "@/lib/idx/types";
import { ListingCard } from "./ListingCard";

export function ListingGrid({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) {
    return (
      <div className="border border-dashed border-line bg-white p-12 text-center text-muted">
        No listings match your search right now.
      </div>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}
