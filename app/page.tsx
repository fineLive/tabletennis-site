import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  ClipboardList,
  Landmark,
  Layers,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Hero } from "@/components/home/hero";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { PlayerCard } from "@/components/entity/player-card";
import {
  allPlayers,
  allTournaments,
  grandSlams,
  keyStats,
} from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const SECTIONS = [
  { href: "/history", icon: Landmark, title: "历史", desc: "从英国餐桌到世界舞台，150 年的乒乓长卷" },
  { href: "/players", icon: Users, title: "运动员", desc: "中外传奇的生涯档案与荣誉" },
  { href: "/tournaments", icon: Trophy, title: "赛事", desc: "三大赛与 WTT 体系的完整图鉴" },
  { href: "/techniques", icon: Zap, title: "技术", desc: "从握拍到拧拉的动作要领速查" },
  { href: "/rules", icon: ClipboardList, title: "规则", desc: "计分、发球、判罚的规则手册" },
  { href: "/equipment", icon: Layers, title: "装备", desc: "底板、套胶、用球的选购与保养" },
  { href: "/stats", icon: BarChart3, title: "数据", desc: "大满贯名录与中国队奥运战绩" },
  { href: "/glossary", icon: BookMarked, title: "词典", desc: "从“摆短”到“神球”的术语解释" },
];

export default function HomePage() {
  const featured = allPlayers.filter((p) => p.featured);

  return (
    <>
      <Hero playerCount={allPlayers.length} />

      {/* 荣誉数据带 */}
      <section className="border-y bg-card">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4">
          {keyStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-10 text-center ${i >= 2 ? "border-t border-border lg:border-t-0" : ""}`}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                className="block text-4xl font-black tabular-nums tracking-tight text-primary sm:text-5xl"
              />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 栏目导航 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          title="开始探索"
          description="八个栏目，覆盖乒乓球的过去、现在与打法本身。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.href} delay={i * 0.05}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  进入栏目
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 精选运动员 */}
      <section className="border-y bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            title="传奇人物"
            description="从“人生能有几回搏”的容国团，到唯一的双圈大满贯马龙。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} className="h-full">
                <PlayerCard player={p} className="h-full" />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/players"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              浏览全部 {allPlayers.length} 位选手
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 大满贯俱乐部 */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          title="大满贯俱乐部"
          description="集齐奥运会、世锦赛、世界杯三大赛单打冠军，乒坛至高荣誉，历史上共 11 人。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              { title: "男子大满贯", list: grandSlams.men },
              { title: "女子大满贯", list: grandSlams.women },
            ] as const
          ).map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="h-full rounded-xl border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </p>
                <ul className="mt-4 divide-y divide-border">
                  {group.list.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center gap-3 py-2.5 text-sm"
                    >
                      <span className="font-mono text-xs tabular-nums text-muted-foreground">
                        {s.completed}
                      </span>
                      <span className="font-semibold">{s.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {s.country}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {s.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 三大赛速览 */}
      <section className="border-t bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading title="三大赛" description="乒乓球运动员生涯的三个坐标点。" />
          <div className="grid gap-4 md:grid-cols-3">
            {allTournaments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.08}>
                <Link
                  href={`/tournaments#${t.slug}`}
                  className="group flex h-full flex-col rounded-xl border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {t.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {t.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {t.founded} · {t.cycle}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                    查看历届冠军
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-14 text-center text-background sm:px-12">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 0.8px, transparent 0.8px)",
                backgroundSize: "18px 18px",
                opacity: 0.08,
              }}
            />
            <h2 className="relative text-3xl font-black tracking-tight sm:text-4xl">
              轮到你了。
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
              看懂规则，选好球拍，练好第一板正手攻——国球的乐趣从站上球台开始。
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/techniques"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                技术速查
              </Link>
              <Link
                href="/equipment"
                className="rounded-full border border-background/30 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-background/10"
              >
                选拍向导
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
