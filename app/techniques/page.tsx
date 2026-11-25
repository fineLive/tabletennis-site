import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import {
  allTechniques,
  techniqueCategories,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "技术要领",
  description:
    "从握拍、发球接发到进攻、防守与步法——乒乓球技术动作的分步要领、常见错误与代表选手速查。",
};

const CATEGORY_DESC: Record<string, string> = {
  握拍方式: "一切技术的前提，决定你后续打法的天花板。",
  发球与接发: "前三板是业余涨分最快的地方，没有之一。",
  进攻技术: "从正手攻球到反手拧拉，现代乒乓的火力来源。",
  防守与控制: "让对手难受，比自己舒服更重要。",
  步法移动: "三分手、七分脚——步法是所有技术的地基。",
  训练方法: "怎么练比练多久更关键：科学训练入门。",
};

export default function TechniquesPage() {
  return (
    <>
      <PageHeader
        index="04"
        kicker="技术"
        title="技术要领速查"
        description={`${allTechniques.length} 项核心技术：每项都包含分步动作要领、最容易犯的错误与代表选手。`}
      />

      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-16 sm:px-6">
        {techniqueCategories.map((cat, ci) => {
          const list = allTechniques.filter((t) => t.category === cat);
          if (list.length === 0) return null;
          return (
            <section key={cat} id={`cat-${ci}`}>
              <Reveal>
                <div className="mb-6 flex items-baseline gap-3">
                  <h2 className="text-2xl font-black tracking-tight">
                    {cat}
                    <span className="ml-2.5 align-middle font-mono text-sm font-medium text-primary">
                      {String(list.length).padStart(2, "0")}
                    </span>
                  </h2>
                  <p className="hidden text-sm text-muted-foreground sm:block">
                    {CATEGORY_DESC[cat]}
                  </p>
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((t, i) => (
                  <Reveal key={t.slug} delay={i * 0.04} className="h-full">
                    <Link
                      href={`/techniques/${t.slug}`}
                      className="group flex h-full flex-col rounded-xl border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold tracking-tight">
                          {t.name}
                        </h3>
                        <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                          {t.steps.length} 步
                        </span>
                      </div>
                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {t.summary}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                        查看要领
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
