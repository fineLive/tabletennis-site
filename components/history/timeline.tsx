"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/** 滚动驱动的时间线：左侧进度线随页面滚动生长 */
export function Timeline({
  items,
}: {
  items: { year: string; title: string; text: string; tag?: string; id: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative">
      {/* 轨道 */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px bg-border"
      />
      <motion.div
        aria-hidden
        style={reduce ? { scaleY: 1 } : { scaleY: progress }}
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-primary"
      />

      <ol className="space-y-10">
        {items.map((item, i) => (
          <li key={item.year} id={item.id} className="relative pl-10">
            <span
              aria-hidden
              className="absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border-2 border-primary bg-background"
            >
              {i === items.length - 1 ? (
                <span className="size-[5px] rounded-full bg-primary" />
              ) : null}
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-sm font-semibold tabular-nums text-primary">
                {item.year}
              </span>
              {item.tag ? (
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                  {item.tag}
                </span>
              ) : null}
            </div>
            <h3 className="mt-1.5 text-lg font-bold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 年代快速跳转 */
export function EraNav({
  items,
}: {
  items: { year: string; id: string }[];
}) {
  return (
    <nav
      aria-label="年代快速跳转"
      className="sticky top-20 hidden max-h-[70vh] flex-col overflow-auto pr-2 lg:flex"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        年代索引
      </p>
      <ul className="mt-4 space-y-0.5 border-l">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 border-transparent py-1 pl-4 font-mono text-sm tabular-nums text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              )}
            >
              {item.year}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
