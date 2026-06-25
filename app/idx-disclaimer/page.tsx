import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IDX Disclaimer",
  description: "MLS / IDX listing data disclaimer.",
  path: "/idx-disclaimer",
  noindex: true,
});

export default function IdxDisclaimerPage() {
  return (
    <LegalPage title="IDX Disclaimer">
      {/* REVIEW: confirm exact wording required by Canopy MLS before launch. */}
      <p>{siteConfig.legal.idxDisclaimer}</p>
      <p>
        IDX information is provided by Canopy MLS exclusively for consumers&apos;
        personal, non-commercial use. It may not be used for any purpose other
        than to identify prospective properties consumers may be interested in
        purchasing. Data is deemed reliable but is not guaranteed accurate by the
        MLS.
      </p>
      <p>
        Listings displayed may be held by brokerage firms other than{" "}
        {siteConfig.name} / {siteConfig.brokerage}, and are marked with the
        appropriate attribution where required by Canopy MLS display rules.
      </p>
      <p>
        Some properties which appear for sale on this website may no longer be
        available because they are for instance under contract, sold, or no longer
        being offered for sale.
      </p>
      <p className="text-muted">
        Note: Confirm final IDX disclaimer language and brokerage attribution
        requirements with Canopy MLS and your broker-in-charge before going live.
      </p>
    </LegalPage>
  );
}
