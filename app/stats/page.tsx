import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { OlympicGoldChart } from "@/components/charts/olympic-chart";
import { grandSlams, keyStats, notableRecords, olympicTotals } from "@/lib/content";

export const metadata: Metadata = {
  title: "数据中心",
  description:
    "用数据看乒乓球：中国队 37 枚奥运金牌的走势图、11 位大满贯得主名录、奥运女单 10/10 等标志性纪录。",
};

export default function StatsPage() {
  return (
    <>
      <PageHeader
        index="07"
        kicker="数据"
        title="数据中心"
        description="统治力是什么样子的？把它画成图表给你看。"
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {/* 关键数字 */}
        <Reveal>
          <div className="grid grid-cols-2 divide-x divide-border rounded-2xl border bg-card lg:grid-cols-4">
            {keyStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-8 text-center ${i >= 2 ? "border-t border-border lg:border-t-0" : ""}`}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block text-3xl font-black tabular-nums tracking-tight text-primary sm:text-4xl"
                />
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 金牌走势 */}
        <section>
          <SectionHeading
            no="01"
            title="奥运金牌走势"
            description={`1988 年设项以来，中国队每个奥运周期的乒乓球金牌数；合计 ${olympicTotals.gold} 金 ${olympicTotals.silver} 银 ${olympicTotals.bronze} 铜。`}
          />
          <Reveal>
            <div className="rounded-2xl border bg-card p-5 sm:p-8">
              <OlympicGoldChart />
            </div>
          </Reveal>
        </section>

        {/* 标志性纪录 */}
        <section>
          <SectionHeading no="02" title="标志性纪录" />
          <div className="grid gap-4 sm:grid-cols-2">
            {notableRecords.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border bg-card p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    {r.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 大满贯 */}
        <section>
          <SectionHeading
            no="03"
            title="大满贯名录"
            description="奥运会、世锦赛、世界杯单打冠军集齐者，乒乓球生涯的终极荣誉。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {(
              [
                { title: "男子（6 人）", list: grandSlams.men },
                { title: "女子（5 人）", list: grandSlams.women },
              ] as const
            ).map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.08}>
                <div className="h-full rounded-xl border bg-card p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    {group.title}
                  </p>
                  <ul className="mt-4 divide-y divide-border">
                    {group.list.map((s) => (
                      <li key={s.name} className="py-3">
                        <div className="flex items-baseline gap-2.5 text-sm">
                          <span className="font-mono text-xs tabular-nums text-muted-foreground">
                            {s.completed}
                          </span>
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {s.country}
                          </span>
                        </div>
                        <p className="mt-0.5 pl-8 text-xs text-muted-foreground">
                          {s.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            想看完整的历届奥运会战绩表？前往
            <Link
              href="/tournaments"
              className="mx-1 inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
            >
              赛事图鉴
              <ArrowRight className="size-3.5" />
            </Link>
            页面。
          </p>
        </section>
      </div>
    </>
  );
}
