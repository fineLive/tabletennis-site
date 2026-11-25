import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { OlympicGoldChart } from "@/components/charts/olympic-chart";
import {
  allOtherTournaments,
  allTournaments,
  chinaOlympics,
  olympicTotals,
  wttTiers,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "重要赛事",
  description:
    "奥运会、世锦赛、世界杯三大赛的完整档案与历届单打冠军，WTT 赛事体系图解，以及中国队历届奥运会战绩。世界乒乓球大赛的观赛指南。",
};

function ChampionChip({
  year,
  name,
  country,
}: {
  year: string;
  name: string;
  country: string;
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs">
      <span className="font-mono font-semibold tabular-nums text-primary">
        {year}
      </span>
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{country}</span>
    </span>
  );
}

export default function TournamentsPage() {
  return (
    <>
      <PageHeader
        index="03"
        kicker="赛事"
        title="大赛图鉴"
        description="三大赛、WTT 职业体系与洲际赛事——看懂乒乓球世界的赛事版图，从这一页开始。"
      />

      {/* 三大赛 */}
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6">
        {allTournaments.map((t, i) => (
          <Reveal key={t.slug}>
            <article id={t.slug} className="scroll-mt-24 rounded-2xl border bg-card">
              <header className="flex flex-wrap items-center gap-3 border-b px-6 py-5">
                <span className="font-mono text-sm font-semibold text-primary">
                  0{i + 1}
                </span>
                <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                  {t.name}
                </h2>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {t.badge}
                </span>
              </header>
              <div className="px-6 py-6">
                <div className="grid gap-4 rounded-xl bg-secondary/60 p-4 sm:grid-cols-3">
                  {[
                    { label: "创办时间", value: t.founded },
                    { label: "举办周期", value: t.cycle },
                    { label: "比赛项目", value: t.events },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className="mt-0.5 text-sm font-medium">{m.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
                <div className="mt-6 space-y-5">
                  {t.champions.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2.5 text-sm font-semibold">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.list.map((c) => (
                          <ChampionChip
                            key={`${group.label}-${c.year}-${c.name}`}
                            year={c.year}
                            name={c.name}
                            country={c.country}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {t.note ? (
                  <p className="mt-5 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm text-primary">
                    {t.note}
                  </p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* WTT 体系 */}
      <div className="border-y bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            title="WTT 赛事体系"
            description="2021 年起，国际乒联巡回赛被 WTT 职业赛事体系取代，按级别与积分自上而下分层。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wttTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-xl border bg-background p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold tracking-tight">{tier.name}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {tier.level}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {tier.desc}
                  </p>
                  <p className="mt-auto pt-3 font-mono text-xs text-muted-foreground">
                    {tier.cycle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* 其他赛事 */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="其他重要赛事" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allOtherTournaments.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-xl border bg-card p-5">
                <h3 className="font-bold tracking-tight">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
                <p className="mt-auto pt-3 font-mono text-xs text-muted-foreground">
                  {t.cycle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 中国队奥运战绩 */}
      <div className="border-t bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            title="中国队奥运战绩"
            description="1988 年汉城奥运会设项以来，中国队共夺得 37 枚金牌；2024 年巴黎奥运会更是首次包揽全部 5 个项目金牌。"
          />
          <Reveal>
            <div className="rounded-2xl border bg-background p-5 sm:p-8">
              <OlympicGoldChart />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 overflow-x-auto rounded-2xl border">
              <table className="w-full min-w-[560px] border-collapse bg-background text-sm">
                <thead>
                  <tr className="bg-secondary/70 text-left">
                    <th className="px-5 py-3 font-semibold">奥运会</th>
                    <th className="px-5 py-3 font-semibold">主办国</th>
                    <th className="px-5 py-3 text-center font-semibold text-primary">
                      金牌
                    </th>
                    <th className="px-5 py-3 text-center font-semibold">
                      银牌
                    </th>
                    <th className="px-5 py-3 text-center font-semibold">
                      铜牌
                    </th>
                    <th className="px-5 py-3 text-center font-semibold">
                      合计
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {chinaOlympics.map((row) => (
                    <tr
                      key={row.games}
                      className="transition-colors hover:bg-secondary/50"
                    >
                      <td className="px-5 py-3 font-medium">{row.games}</td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {row.host}
                      </td>
                      <td className="px-5 py-3 text-center font-mono font-semibold tabular-nums text-primary">
                        {row.gold}
                      </td>
                      <td className="px-5 py-3 text-center font-mono tabular-nums text-muted-foreground">
                        {row.silver}
                      </td>
                      <td className="px-5 py-3 text-center font-mono tabular-nums text-muted-foreground">
                        {row.bronze}
                      </td>
                      <td className="px-5 py-3 text-center font-mono tabular-nums">
                        {row.gold + row.silver + row.bronze}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-secondary/70 font-semibold">
                    <td className="px-5 py-3" colSpan={2}>
                      合计
                    </td>
                    <td className="px-5 py-3 text-center font-mono tabular-nums text-primary">
                      {olympicTotals.gold}
                    </td>
                    <td className="px-5 py-3 text-center font-mono tabular-nums">
                      {olympicTotals.silver}
                    </td>
                    <td className="px-5 py-3 text-center font-mono tabular-nums">
                      {olympicTotals.bronze}
                    </td>
                    <td className="px-5 py-3 text-center font-mono tabular-nums">
                      {olympicTotals.gold + olympicTotals.silver + olympicTotals.bronze}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-3 text-xs text-muted-foreground">
            * 金牌数与历届冠军名单可交叉验证；银、铜牌数为整理值，详见「关于本站」的内容说明。
          </p>
        </div>
      </div>
    </>
  );
}
