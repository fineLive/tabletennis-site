import { cn } from "@/lib/utils";

/** 页面内小节标题：红色编号 + 标题 + 可选描述 */
export function SectionHeading({
  no,
  title,
  description,
  className,
}: {
  no?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="flex items-baseline gap-3 text-2xl font-black tracking-tight sm:text-3xl">
        {no ? (
          <span className="font-mono text-sm font-semibold text-primary">
            {no}
          </span>
        ) : null}
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
