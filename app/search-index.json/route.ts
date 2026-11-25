import { allPlayers, allTechniques, allTerms } from "@/lib/content";

/** 全站搜索索引：构建时静态导出为 /search-index.json，客户端搜索面板按需加载 */
export const dynamic = "force-static";

const SECTION_PAGES = [
  { title: "首页", href: "/" },
  { title: "历史", href: "/history" },
  { title: "运动员", href: "/players" },
  { title: "赛事", href: "/tournaments" },
  { title: "技术", href: "/techniques" },
  { title: "规则", href: "/rules" },
  { title: "装备", href: "/equipment" },
  { title: "数据中心", href: "/stats" },
  { title: "术语词典", href: "/glossary" },
  { title: "关于本站", href: "/about" },
];

export function GET() {
  const items = [
    ...SECTION_PAGES.map((p) => ({ ...p, group: "页面" as const })),
    ...allPlayers.map((p) => ({
      title: p.name,
      subtitle: `${p.country} · ${p.title}`,
      group: "运动员" as const,
      href: `/players/${p.slug}`,
    })),
    ...allTechniques.map((t) => ({
      title: t.name,
      subtitle: t.category,
      group: "技术" as const,
      href: `/techniques/${t.slug}`,
    })),
    ...allTerms.map((t) => ({
      title: t.term,
      subtitle: t.def.slice(0, 24) + "…",
      group: "术语" as const,
      href: `/glossary`,
    })),
  ];

  return Response.json(items, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
