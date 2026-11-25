import Link from "next/link";
import { Code2 } from "lucide-react";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "内容栏目",
    links: [
      { href: "/history", label: "历史" },
      { href: "/players", label: "运动员" },
      { href: "/tournaments", label: "赛事" },
      { href: "/techniques", label: "技术" },
    ],
  },
  {
    title: "实用工具",
    links: [
      { href: "/rules", label: "规则手册" },
      { href: "/equipment", label: "装备指南" },
      { href: "/stats", label: "数据中心" },
      { href: "/glossary", label: "术语词典" },
    ],
  },
  {
    title: "关于",
    links: [
      { href: "/about", label: "关于本站" },
      { href: "/about#corrections", label: "内容更正说明" },
      { href: "https://github.com/fineLive/tabletennis-site", label: "GitHub 仓库" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-black tracking-tight">🏓 乒乓球世界</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              弘扬国球精神，传播乒乓文化。内容整理自公开资料，献给每一位热爱小球的人。
            </p>
            <a
              href="https://github.com/fineLive/tabletennis-site"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Code2 className="size-4" />
              fineLive/tabletennis-site
            </a>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 乒乓球世界 · 内容整理自公开资料，仅供学习交流</p>
          <p className="font-mono">Next.js · Tailwind CSS · Motion</p>
        </div>
      </div>
    </footer>
  );
}
