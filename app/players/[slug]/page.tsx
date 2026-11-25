import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Medal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PlayerCard } from "@/components/entity/player-card";
import { PrevNext } from "@/components/entity/prev-next";
import { Reveal } from "@/components/motion/reveal";
import {
  allPlayers,
  countryColor,
  generationOf,
  getAdjacentPlayers,
  getPlayer,
  getRelatedPlayers,
} from "@/lib/content";

export function generateStaticParams() {
  return allPlayers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) return { title: "未找到选手" };
  return {
    title: `${player.name} · ${player.title}`,
    description: player.intro,
  };
}

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) notFound();

  const { prev, next } = getAdjacentPlayers(slug);
  const related = getRelatedPlayers(player);
  const color = countryColor(player.countryCode);
  const gen = generationOf(player.born);

  const meta = [
    { label: "国家 / 地区", value: player.country },
    { label: "世代", value: gen },
    { label: "巅峰时期", value: player.era },
    { label: "握拍", value: player.grip },
    { label: "打法", value: player.style },
    {
      label: "生卒",
      value: player.deathYear
        ? `${player.born} – ${player.deathYear}`
        : `${player.born} 年生`,
    },
  ];

  return (
    <>
      <PageHeader
        index="02"
        kicker="运动员档案"
        title={player.name}
        description={player.title}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/players"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            返回名人堂
          </Link>
        </div>
      </PageHeader>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            {/* 档案头 */}
            <Reveal>
              <div className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="grid size-20 shrink-0 place-items-center rounded-2xl text-4xl font-black"
                  style={{ backgroundColor: `${color}1f`, color }}
                >
                  {player.name.slice(0, 1)}
                </span>
                <div>
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                    {player.name}
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    {player.nickname ? `${player.nickname} · ` : ""}
                    {player.title}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 简介 */}
            <Reveal delay={0.05}>
              <p className="mt-8 max-w-3xl text-base leading-loose text-foreground/90">
                {player.intro}
              </p>
            </Reveal>

            {/* 主要成就 */}
            <Reveal delay={0.1}>
              <section className="mt-10">
                <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight">
                  <Medal className="size-5 text-primary" />
                  主要成就
                </h3>
                <ul className="mt-4 divide-y divide-border rounded-xl border bg-card">
                  {player.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 px-5 py-3.5 text-sm leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* 侧栏元信息 */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                档案信息
              </p>
              <dl className="mt-4 space-y-3.5">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        {/* 相关选手 */}
        {related.length > 0 ? (
          <section className="mt-16">
            <h3 className="text-lg font-bold tracking-tight">相关选手</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <PlayerCard key={p.slug} player={p} />
              ))}
            </div>
          </section>
        ) : null}

        <PrevNext
          prev={prev}
          next={next}
          basePath="/players"
          labelPrev="上一位"
          labelNext="下一位"
        />
      </div>
    </>
  );
}
