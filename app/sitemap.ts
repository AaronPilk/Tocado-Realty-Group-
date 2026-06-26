import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { neighborhoods } from "@/data/neighborhoods";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/search",
    "/featured-listings",
    "/buy",
    "/sell",
    "/home-valuation",
    "/mortgage-calculator",
    "/why-list-with-us",
    "/our-story",
    "/locations",
    "/neighborhoods",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const neighborhoodRoutes = neighborhoods.map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes, ...neighborhoodRoutes];
}
