import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing your use of this website.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="[[Month YYYY]]">
      {/* TEMPLATE — have an attorney review before launch. */}
      <p>
        By using this website, you agree to these terms. If you do not agree,
        please do not use the site.
      </p>
      <h2>Use of the Site</h2>
      <p>
        This website is provided for general informational purposes about real
        estate services offered by {siteConfig.name}. Listing information is
        provided through IDX and is deemed reliable but not guaranteed.
      </p>
      <h2>No Warranty</h2>
      <p>
        Content is provided &quot;as is&quot; without warranties of any kind. We
        are not liable for decisions made based on information found on this site.
        Always verify property details independently.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content, branding, and design on this site are owned by{" "}
        {siteConfig.name} or used with permission and may not be copied without
        authorization.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Contact{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <p className="text-muted">Note: This is a starter template. Have legal counsel review before publishing.</p>
    </LegalPage>
  );
}
