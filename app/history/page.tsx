import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { EraNav, Timeline } from "@/components/history/timeline";
import { allTimeline, allTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "历史",
  description:
    "从 1880 年代的英国餐桌到今天的国球统治力——乒乓球 150 年历史的完整时间线，以及乒乓外交、长盛密码、器材革命三个专题故事。",
};

export default function HistoryPage() {
  const items = allTimeline.map((t) => ({ ...t, id: `y-${t.year.replace(/\s/g, "")}` }));

  return (
    <>
      <PageHeader
        index="01"
        kicker="历史"
        title="一百五十年的乒乓长卷"
        description="从英国军官的餐桌游戏，到“小球转动大球”的外交佳话，再到今天中国队的长盛不衰。"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <EraNav items={items} />
          <Reveal>
            <Timeline items={items} />
          </Reveal>
        </div>
      </div>

      {/* 专题故事 */}
      <div className="border-t bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            title="专题故事"
            description="时间线之外，有三段值得单独讲完的故事。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {allTopics.map((topic, i) => (
              <Reveal key={topic.slug} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-xl border bg-background p-6">
                  <h3 className="text-lg font-bold tracking-tight">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {topic.intro}
                  </p>
                  <div className="mt-4 space-y-3 border-t pt-4 text-sm leading-relaxed text-muted-foreground">
                    {topic.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
