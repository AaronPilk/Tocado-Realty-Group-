import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Accessibility",
  description: "Our commitment to an accessible website for all users.",
  path: "/accessibility",
  noindex: true,
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility">
      <p>
        {siteConfig.name} is committed to making our website accessible to
        everyone, including people with disabilities. We strive to meet WCAG 2.1
        Level AA standards.
      </p>
      <h2>Ongoing Effort</h2>
      <p>
        We regularly review the site to improve accessibility — including
        keyboard navigation, color contrast, descriptive labels, and screen
        reader compatibility.
      </p>
      <h2>Need Help?</h2>
      <p>
        If you experience any difficulty accessing part of this site, please
        contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
        or {siteConfig.phone} and we&apos;ll be glad to assist or provide the
        information you need in an alternative format.
      </p>
      <h2>Equal Housing Opportunity</h2>
      <p>
        {siteConfig.name} fully supports the principles of the Fair Housing Act
        and the Equal Opportunity Act. We do not discriminate on the basis of
        race, color, religion, sex, handicap, familial status, or national origin.
      </p>
    </LegalPage>
  );
}
