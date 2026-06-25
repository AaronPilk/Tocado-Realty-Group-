import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${baseUrl}${opts.path || ""}`;
  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
