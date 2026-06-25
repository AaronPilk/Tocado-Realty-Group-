import { SearchExperience } from "@/components/idx/SearchExperience";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Home Search",
  description: "Search every home for sale across North Carolina with live Canopy MLS listings.",
  path: "/search",
});

export default function SearchPage() {
  return <SearchExperience />;
}
