import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SalesTicker } from "@/components/home/SalesTicker";
import { StatsBand } from "@/components/home/StatsBand";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { FounderStory } from "@/components/home/FounderStory";
import { BuyerSellerCards } from "@/components/home/BuyerSellerCards";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { MarketReport } from "@/components/home/MarketReport";
import { OfficeLocations } from "@/components/home/OfficeLocations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SalesTicker />
      <StatsBand />
      <FeaturedProperties />
      <FounderStory />
      <BuyerSellerCards />
      <ProcessTimeline />
      <MarketReport />
      <OfficeLocations />
    </>
  );
}
