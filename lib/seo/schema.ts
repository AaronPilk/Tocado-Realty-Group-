import { siteConfig } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com";

export function realEstateAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: siteConfig.heroBody,
    url: baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: "North Carolina",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressRegion: "NC",
      addressCountry: "US",
    },
    parentOrganization: { "@type": "Organization", name: siteConfig.brokerage },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${baseUrl}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
