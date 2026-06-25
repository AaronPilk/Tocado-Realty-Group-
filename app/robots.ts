import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep transient/search-result pages out of the index.
      disallow: ["/search/results", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
