import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Featured Listings",
  description: "A curated selection of featured North Carolina homes for sale.",
  path: "/featured-listings",
});

export default function FeaturedListingsPage() {
  return (
    <>
      <FeaturedProperties />
      <section className="bg-cream pb-20 text-center">
        <Button href="/search" variant="black">Search All Listings</Button>
      </section>
    </>
  );
}
