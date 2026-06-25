import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with our North Carolina real estate team. Call, email, or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about"
        accent="your next move."
        body="Buying, selling, or just exploring your options — reach out and we'll get back to you quickly."
        treatment="charcoal"
      />
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="border border-line bg-white p-8">
            <h2 className="font-serif text-2xl">Send us a message</h2>
            <div className="mt-6">
              <LeadForm
                leadType="contact"
                fields={["firstName", "lastName", "email", "phone", "message"]}
                submitLabel="Send Message"
              />
            </div>
          </div>
          <aside>
            <Eyebrow>Reach Us Directly</Eyebrow>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted">Phone</div>
                <a href={siteConfig.phoneHref} className="font-medium hover:text-orange">{siteConfig.phone}</a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted">Email</div>
                <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-orange">{siteConfig.email}</a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted">Office</div>
                <p className="font-medium">{siteConfig.address}</p>
              </div>
              <div className="border-t border-line pt-5 text-[12px] leading-5 text-muted">
                {siteConfig.name} · affiliated with {siteConfig.brokerage}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
