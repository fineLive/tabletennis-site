"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { PlayerCard } from "@/components/entity/player-card";
import {
  allPlayers,
  generationOf,
  generations,
  type Generation,
} from "@/lib/content";
import { cn } from "@/lib/utils";

type FilterKey = "region" | "gender" | "grip" | "generation";

const FILTERS: {
  key: FilterKey;
  label: string;
  values: () => string[];
}[] = [
  {
    key: "region",
    label: "地区",
    values: () => ["中国", "亚洲", "欧洲"],
  },
  { key: "gender", label: "性别", values: () => ["男", "女"] },
  { key: "grip", label: "握拍", values: () => ["横拍", "直拍"] },
  {
    key: "generation",
    label: "世代",
    values: () => [...generations],
  },
];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function PlayersBrowser() {
  const [selected, setSelected] = useState<Record<FilterKey, string | null>>({
    region: null,
    gender: null,
    grip: null,
    generation: null,
  });
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () =>
      allPlayers.filter((p) => {
        const gen = generationOf(p.born);
        return (
          (!selected.region || p.region === selected.region) &&
          (!selected.gender || p.gender === selected.gender) &&
          (!selected.grip || p.grip === selected.grip) &&
          (!selected.generation || gen === selected.generation)
        );
      }),
    [selected]
  );

  const toggle = (key: FilterKey, value: string) =>
    setSelected((s) => ({ ...s, [key]: s[key] === value ? null : value }));

  return (
    <div>
      {/* 筛选栏 */}
      <div className="mb-8 space-y-3 rounded-xl border bg-card p-5">
        {FILTERS.map((f) => (
          <div key={f.key} className="flex flex-wrap items-center gap-2">
            <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
              {f.label}
            </span>
            <Chip
              active={selected[f.key] === null}
              onClick={() => setSelected((s) => ({ ...s, [f.key]: null }))}
            >
              全部
            </Chip>
            {f.values().map((v) => (
              <Chip
                key={v}
                active={selected[f.key] === v}
                onClick={() => toggle(f.key, v)}
              >
                {v}
              </Chip>
            ))}
          </div>
        ))}
        <p className="border-t pt-3 text-sm text-muted-foreground">
          共 <span className="font-semibold tabular-nums text-primary">{filtered.length}</span> 位选手
        </p>
      </div>

      {/* 卡片网格 */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed py-20 text-muted-foreground">
          <SearchX className="size-8" />
          <p className="text-sm">没有符合条件的选手，调整一下筛选条件。</p>
        </div>
      ) : (
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <PlayerCard player={p} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export type { Generation };
