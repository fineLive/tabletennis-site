"use client";

import { useState } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** 交互式计分演示：模拟一局 11 分制的比分与发球轮换 */
export function ScoreDemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = a + b;
  const deuce = a >= 10 || b >= 10;
  // 平时每 2 球轮换发球；10 平后每球轮换
  const aServes = deuce ? sum % 2 === 0 : Math.floor(sum / 2) % 2 === 0;
  const finished = (a >= 11 || b >= 11) && Math.abs(a - b) >= 2;

  const reset = () => {
    setA(0);
    setB(0);
  };

  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {(
          [
            { name: "你", score: a, serving: aServes, onInc: () => setA((v) => v + 1) },
            {
              name: "对手",
              score: b,
              serving: !aServes,
              onInc: () => setB((v) => v + 1),
            },
          ] as const
        ).map((side) => (
          <div
            key={side.name}
            className={cn(
              "rounded-xl border p-5 text-center transition-all",
              side.serving && !finished ? "border-primary bg-primary/5" : ""
            )}
          >
            <p className="text-sm text-muted-foreground">
              {side.name}
              {side.serving && !finished ? (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                  <span className="inline-block size-1.5 rounded-full bg-primary" />
                  发球中
                </span>
              ) : null}
            </p>
            <p
              className={cn(
                "mt-1 font-mono text-6xl font-black tabular-nums tracking-tight transition-colors",
                finished
                  ? a > b
                    ? side.name === "你"
                      ? "text-primary"
                      : "text-muted-foreground"
                    : side.name === "对手"
                      ? "text-primary"
                      : "text-muted-foreground"
                  : "text-foreground"
              )}
            >
              {side.score}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full"
              disabled={finished}
              onClick={side.onInc}
            >
              +1 分
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {finished ? (
            <span className="inline-flex items-center gap-1.5 font-medium text-primary">
              <Trophy className="size-4" />
              比赛结束：
              {a > b ? "你" : "对手"}
              以 {Math.max(a, b)}:{Math.min(a, b)} 获胜！
            </span>
          ) : deuce ? (
            `当前 ${a}:${b}，进入 10 平后的“每球轮换发球”，需领先 2 分才能获胜。`
          ) : (
            `当前 ${a}:${b}，每 2 球交换一次发球权；先到 11 分且领先 2 分者胜。`
          )}
        </p>
        <Button variant="ghost" size="sm" className="shrink-0" onClick={reset}>
          <RotateCcw className="size-4" />
          重置比分
        </Button>
      </div>
    </div>
  );
}
