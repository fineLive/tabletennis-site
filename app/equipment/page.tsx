import type { Metadata } from "next";
import {
  Bandage,
  Droplets,
  Footprints,
  GlassWater,
  Package,
  SprayCan,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { RacketWizard } from "@/components/equipment/racket-wizard";
import {
  allAccessories,
  allApparel,
  allBladeTypes,
  allBrands,
  allClassicGear,
  allMaintenance,
  allRubberTypes,
  ball,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "装备指南",
  description:
    "乒乓球装备全指南：底板与胶皮的类型选择、三星球标准、球鞋服装、品牌图谱、经典器材，以及按水平与预算的选拍向导。",
};

const ACCESSORY_ICONS = {
  bandage: Bandage,
  sock: Footprints,
  bag: Package,
  spray: SprayCan,
  bottle: GlassWater,
  towel: Droplets,
} as const;

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        index="06"
        kicker="装备"
        title="装备指南"
        description="乒乓球器材的门道比想象中深：从底板结构到胶皮类型，从用球标准到保养方法，还有一份按需定制的选拍向导。"
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {/* 选拍向导 */}
        <Reveal>
          <section>
            <SectionHeading
              no="01"
              title="选拍向导"
              description="不知道从哪开始？回答三个问题，得到一份器材组合建议。"
            />
            <RacketWizard />
          </section>
        </Reveal>

        {/* 底板与胶皮 */}
        <section>
          <SectionHeading
            no="02"
            title="球拍构成"
            description="一支球拍 = 底板 + 两面套胶。底板决定手感与速度骨架，套胶决定旋转与控制性格。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-xl border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  底板类型
                </p>
                <ul className="mt-4 space-y-3.5">
                  {allBladeTypes.map((b) => (
                    <li key={b.name}>
                      <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                        {b.name}
                        {b.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-normal text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="h-full">
              <div className="h-full rounded-xl border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  胶皮类型
                </p>
                <ul className="mt-4 space-y-3.5">
                  {allRubberTypes.map((r) => (
                    <li key={r.name}>
                      <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                        {r.name}
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-normal text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {r.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 经典器材 */}
        <section>
          <SectionHeading
            no="03"
            title="经典器材"
            description="被冠军们验证过的那些“名器”。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allClassicGear.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-xl border bg-card p-5">
                  <p className="text-sm font-bold tracking-tight">{g.name}</p>
                  <span className="mt-1.5 w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
                    {g.user}
                  </span>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {g.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 用球 */}
        <section>
          <SectionHeading no="04" title="比赛用球" description="小到 2.7 克，却定义了整项运动的节奏。" />
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-xl border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  规格标准
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {ball.standard.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="h-full">
              <div className="h-full space-y-3">
                {ball.starLevels.map((s) => (
                  <div key={s.level} className="rounded-xl border bg-card p-5">
                    <p className="text-sm font-bold">{s.level}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 服装与配件 */}
        <section>
          <SectionHeading no="05" title="服装、鞋与配件" />
          <div className="grid gap-4 sm:grid-cols-2">
            {allApparel.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border bg-card p-6">
                  <h3 className="font-bold tracking-tight">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {a.tips.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {allAccessories.map((acc, i) => {
              const Icon = ACCESSORY_ICONS[acc.icon];
              return (
                <Reveal key={acc.name} delay={i * 0.04}>
                  <div className="h-full rounded-xl border bg-card p-4 text-center">
                    <Icon className="mx-auto size-6 text-primary" />
                    <p className="mt-2.5 text-sm font-semibold">{acc.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {acc.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* 保养 */}
        <section>
          <SectionHeading no="06" title="球拍保养" description="一张好拍子的寿命，取决于你如何对待它。" />
          <div className="grid gap-4 md:grid-cols-3">
            {allMaintenance.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border bg-card p-6">
                  <h3 className="font-bold tracking-tight">
                    <span className="mr-2 text-primary">{i + 1}.</span>
                    {m.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 品牌 */}
        <section>
          <SectionHeading no="07" title="品牌图谱" description="国际乒坛的主要器材品牌与其标签。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allBrands.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.04} className="h-full">
                <div className="h-full rounded-xl border bg-card p-5">
                  <p className="text-sm font-bold tracking-tight">{b.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {b.origin}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
