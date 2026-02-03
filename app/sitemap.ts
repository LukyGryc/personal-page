import type { MetadataRoute } from "next";
import { projects } from "@/const/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lukasgryc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projekty/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projekty`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
