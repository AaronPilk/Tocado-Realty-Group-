import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { team } from "@/data/team";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/search",
    "/featured-listings",
    "/buy",
    "/sell",
    "/home-valuation",
    "/team",
    "/why-list-with-us",
    "/join-the-team",
    "/our-story",
    "/locations",
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

  const teamRoutes = team.map((a) => ({
    url: `${baseUrl}/team/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...locationRoutes, ...teamRoutes];
}
