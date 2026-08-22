import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { districts } from "@/lib/districts";
import { servicePages } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/siparis-ver`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
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
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
