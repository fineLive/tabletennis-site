import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/** 详情页底部的上一篇 / 下一篇导航 */
export function PrevNext({
  prev,
  next,
  basePath,
  labelPrev = "上一篇",
  labelNext = "下一篇",
}: {
  prev?: { slug: string; name: string };
  next?: { slug: string; name: string };
  basePath: string;
  labelPrev?: string;
  labelNext?: string;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="上下篇导航"
      className="mt-12 grid gap-3 border-t pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`${basePath}/${prev.slug}`}
          className="group rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"
        >
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5" />
            {labelPrev}
          </p>
          <p className="mt-1 font-semibold transition-colors group-hover:text-primary">
            {prev.name}
          </p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`${basePath}/${next.slug}`}
          className="group rounded-xl border bg-card p-4 text-right transition-colors hover:border-primary/40"
        >
          <p className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            {labelNext}
            <ArrowRight className="size-3.5" />
          </p>
          <p className="mt-1 font-semibold transition-colors group-hover:text-primary">
            {next.name}
          </p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
