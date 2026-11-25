import Link from "next/link";
import { ArrowRight, Medal } from "lucide-react";
import type { Player } from "@/content/schema";
import { countryColor } from "@/lib/content";
import { cn } from "@/lib/utils";

/** 运动员卡片：名录与首页共用 */
export function PlayerCard({
  player,
  className,
}: {
  player: Player;
  className?: string;
}) {
  const color = countryColor(player.countryCode);

  return (
    <Link
      href={`/players/${player.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-xl border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        <span
          aria-hidden
          className="grid size-12 shrink-0 place-items-center rounded-lg text-xl font-black"
          style={{ backgroundColor: `${color}1f`, color }}
        >
          {player.name.slice(0, 1)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-tight">
            {player.name}
            {player.deathYear ? (
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                ({player.born}-{player.deathYear})
              </span>
            ) : null}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            {player.nickname ?? player.title}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block size-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          {player.country}
        </span>
        <span>{player.era}</span>
        <span>{player.grip}</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5">
          {player.gender}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {player.intro}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4 text-xs">
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <Medal className="size-3.5 text-primary" />
          {player.highlights.length} 项主要成就
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          查看档案
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
