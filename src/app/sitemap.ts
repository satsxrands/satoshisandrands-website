import type { MetadataRoute } from "next";
import { articles } from "@/content/blog/articles";
import { modules } from "@/content/learn/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://satoshisandrands.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tax-tools`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tax-tools/cgt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tax-tools/classifier`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tax-tools/carf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/market`, lastModified: new Date(), changeFrequency: "hourly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "hourly", priority: 0.6 },
    { url: `${base}/learn`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/learn/glossary`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const learnRoutes: MetadataRoute.Sitemap = modules.map((module) => ({
    url: `${base}/learn/${module.slug}`,
    lastModified: new Date(module.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...learnRoutes];
}
