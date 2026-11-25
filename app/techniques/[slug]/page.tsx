import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, ListOrdered, User } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PrevNext } from "@/components/entity/prev-next";
import { Reveal } from "@/components/motion/reveal";
import {
  allTechniques,
  getAdjacentTechniques,
  getTechnique,
} from "@/lib/content";

export function generateStaticParams() {
  return allTechniques.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnique(slug);
  if (!tech) return { title: "未找到技术" };
  return { title: `${tech.name} · ${tech.category}`, description: tech.summary };
}

export default async function TechniquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = getTechnique(slug);
  if (!tech) notFound();

  const { prev, next } = getAdjacentTechniques(slug);

  return (
    <>
      <PageHeader
        index="04"
        kicker={`技术 · ${tech.category}`}
        title={tech.name}
        description={tech.summary}
      >
        <div className="mt-6">
          <Link
            href="/techniques"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            返回技术速查
          </Link>
        </div>
      </PageHeader>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <Reveal>
            <section>
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight">
                <ListOrdered className="size-5 text-primary" />
                动作要领
              </h2>
              <ol className="mt-4 space-y-0 divide-y divide-border rounded-xl border bg-card">
                {tech.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 px-5 py-4">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed sm:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight">
                <AlertTriangle className="size-5 text-primary" />
                常见错误
              </h2>
              <ul className="mt-4 space-y-2.5">
                {tech.mistakes.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-destructive"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                技术信息
              </p>
              <dl className="mt-4 space-y-3.5 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">分类</dt>
                  <dd className="mt-0.5 font-medium">{tech.category}</dd>
                </div>
                {tech.masters ? (
                  <div>
                    <dt className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="size-3" />
                      代表选手
                    </dt>
                    <dd className="mt-0.5 font-medium">{tech.masters}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </aside>
        </div>

        <PrevNext
          prev={prev}
          next={next}
          basePath="/techniques"
          labelPrev="上一项"
          labelNext="下一项"
        />
      </div>
    </>
  );
}
