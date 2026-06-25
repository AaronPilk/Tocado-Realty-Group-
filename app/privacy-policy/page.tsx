import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      {/* TEMPLATE — have an attorney review before launch. */}
      <p>
        {siteConfig.name} (&quot;we,&quot; &quot;us&quot;) respects your privacy.
        This policy explains what we collect and how we use it when you use this
        website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly — such as your name, email,
        phone number, and message — when you submit a form, request a valuation,
        or contact us. We also collect standard analytics data (pages viewed,
        device, referral source) to improve the site.
      </p>
      <h2>How We Use It</h2>
      <p>
        We use your information to respond to inquiries, provide real estate
        services, send updates you request, and improve our website. With your
        consent, we may contact you by phone, email, and text. You can opt out at
        any time.
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share it with service
        providers (such as our CRM and email tools) who help us operate, and as
        required by law.
      </p>
      <h2>Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of your information
        by contacting us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Reach us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
        or {siteConfig.phone}.
      </p>
      <p className="text-muted">Note: This is a starter template. Have legal counsel review before publishing.</p>
    </LegalPage>
  );
}
