import type { MetadataRoute } from "next";
import { allPlayers, allTechniques } from "@/lib/content";

// 部署后把域名替换为实际线上地址
const SITE_URL = "https://tabletennis-site.pages.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/history",
    "/players",
    "/tournaments",
    "/techniques",
    "/rules",
    "/equipment",
    "/stats",
    "/glossary",
    "/about",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const players = allPlayers.map((p) => ({
    url: `${SITE_URL}/players/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const techniques = allTechniques.map((t) => ({
    url: `${SITE_URL}/techniques/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...players, ...techniques];
}
