import { Hero } from "@/components/home/Hero";
import { SalesTicker } from "@/components/home/SalesTicker";
import { BuyerSellerCards } from "@/components/home/BuyerSellerCards";
import { FounderStory } from "@/components/home/FounderStory";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { OfficeLocations } from "@/components/home/OfficeLocations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SalesTicker />
      <BuyerSellerCards />
      <FounderStory />
      <ProcessTimeline />
      <OfficeLocations />
    </>
  );
}
