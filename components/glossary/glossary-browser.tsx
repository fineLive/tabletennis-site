"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { glossaryCategories } from "@/content/glossary";
import { allTerms } from "@/lib/content";
import { cn } from "@/lib/utils";

/** 术语词典：即输即筛 + 分类筛选 */
export function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allTerms.filter((t) => {
      if (category && t.category !== category) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入术语，如“拧拉”“大满贯”…"
            className="h-11 rounded-full pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              category === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            全部
          </button>
          {glossaryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c === category ? null : c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          共 <span className="font-semibold tabular-nums text-primary">{filtered.length}</span> 个术语
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-muted-foreground">
          <SearchX className="size-8" />
          <p className="text-sm">没有找到相关术语。</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div
              key={t.term}
              className="rounded-xl border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-bold tracking-tight">{t.term}</p>
                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                  {t.category}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.def}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
