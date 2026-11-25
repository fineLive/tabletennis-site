import type { ReactNode } from "react";

/** 栏目页统一页头：编号 + 栏目名 + 大标题 + 简介 */
export function PageHeader({
  index,
  kicker,
  title,
  description,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b bg-card">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-8 select-none text-[9rem] font-black leading-none tracking-tighter text-foreground/[0.04] sm:text-[12rem]"
      >
        {index}
      </span>
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pt-24">
        <p className="flex items-center gap-3 font-mono text-sm font-medium text-primary">
          <span className="inline-block h-px w-8 bg-primary" />
          {index} · {kicker}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
