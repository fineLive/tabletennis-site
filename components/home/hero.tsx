"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** 一个沿着弧线循环弹跳的乒乓球 */
function BouncingBall() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-[18%] left-[8%]"
        animate={{ x: [0, 260, 520, 700, 700, 0], y: [0, 90, 30, 140, 20, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          times: [0, 0.3, 0.55, 0.8, 0.9, 1],
        }}
      >
        <div className="size-3 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
      </motion.div>
      <motion.div
        className="absolute top-[64%] right-[10%]"
        animate={{ x: [0, -180, -360, -180, 0], y: [0, -60, 10, -40, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          delay: 2,
        }}
      >
        <div className="size-2.5 rounded-full bg-accent/80" />
      </motion.div>
    </div>
  );
}

export function Hero({ playerCount }: { playerCount: number }) {
  return (
    <section className="relative overflow-hidden">
      {/* 细点网格底纹 */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 78%)",
        }}
      />
      <BouncingBall />

      <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <motion.p
          initial={false}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-muted-foreground"
        >
          <span className="inline-block size-1.5 rounded-full bg-primary" />
          EST. 1926 · 从餐桌游戏到国球
        </motion.p>

        <h1 className="mt-8 text-balance text-5xl font-black leading-[1.05] tracking-tighter sm:text-7xl md:text-8xl">
          小球，
          <span className="text-primary">转动世界</span>
          <span className="text-primary">。</span>
        </h1>

        <motion.p
          initial={false}
          className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          150 年历史、{playerCount} 位传奇、11 位大满贯——
          这座国球文化站收录了乒乓球的一切值得被记住的东西。
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="h-12 rounded-full px-7 text-base" asChild>
            <Link href="/players">
              探索传奇运动员
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-7 text-base"
            asChild
          >
            <Link href="/techniques">打好基础</Link>
          </Button>
        </div>

        <p className="mt-14 font-mono text-xs tracking-[0.3em] text-muted-foreground">
          SCROLL ↓
        </p>
      </div>
    </section>
  );
}
