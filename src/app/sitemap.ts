import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { districts } from "@/lib/districts";
import { servicePages } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...districts.map((district) => ({
      url: `${siteConfig.url}/${district.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
