"use client";

import { useState } from "react";
import { RotateCcw, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wizard } from "@/lib/content";
import { cn } from "@/lib/utils";

type Answer = Record<string, string | null>;

/** 选拍向导：按水平、打法与预算给出器材组合建议 */
export function RacketWizard() {
  const [answers, setAnswers] = useState<Answer>({
    level: null,
    style: null,
    budget: null,
  });

  const done = wizard.questions.every((q) => answers[q.id]);
  const key = wizard.questions.map((q) => answers[q.id]).join("-");
  const rec = done ? wizard.recs[key] : undefined;
  const budgetNote = done ? wizard.budgetNotes[answers.budget ?? ""] : undefined;

  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8">
      <div className="space-y-7">
        {wizard.questions.map((q, qi) => (
          <div key={q.id}>
            <p className="flex items-baseline gap-2.5 font-semibold">
              <span className="font-mono text-sm text-primary">
                Q{qi + 1}
              </span>
              {q.question}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() =>
                    setAnswers((a) => ({ ...a, [q.id]: opt.value }))
                  }
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    answers[q.id] === opt.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {done && rec ? (
        <div className="mt-8 rounded-xl border border-primary/40 bg-primary/5 p-6">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Wand2 className="size-4" />
            你的器材方案
          </p>
          <h3 className="mt-3 text-xl font-black tracking-tight">{rec.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {rec.detail}
          </p>
          {budgetNote ? (
            <p className="mt-3 rounded-lg bg-card px-4 py-2.5 text-sm text-muted-foreground">
              💡 {budgetNote}
            </p>
          ) : null}
          <Button
            variant="ghost"
            size="sm"
            className="mt-4"
            onClick={() =>
              setAnswers({ level: null, style: null, budget: null })
            }
          >
            <RotateCcw className="size-4" />
            重新选择
          </Button>
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          回答完 3 个问题，即可获得一份器材组合建议。
        </p>
      )}
    </div>
  );
}
