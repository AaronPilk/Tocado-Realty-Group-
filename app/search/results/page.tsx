import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ListingGrid } from "@/components/idx/ListingGrid";
import { searchListings } from "@/lib/idx/provider";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Search Results",
  description: "Browse North Carolina homes matching your search.",
  path: "/search/results",
  noindex: true,
});

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { listings, total } = await searchListings({
    query: searchParams.query,
    city: searchParams.city,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    beds: searchParams.beds ? Number(searchParams.beds) : undefined,
    baths: searchParams.baths ? Number(searchParams.baths) : undefined,
    sort: (searchParams.sort as never) || "newest",
    limit: 24,
  });

  return (
    <Section className="bg-cream">
      <div className="mb-10">
        <Eyebrow>Search Results</Eyebrow>
        <h1 className="mt-3 font-serif text-3xl md:text-4xl">
          {total} {total === 1 ? "home" : "homes"} found
        </h1>
      </div>
      <ListingGrid listings={listings} />
    </Section>
  );
}
