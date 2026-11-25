import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ScoreDemo } from "@/components/rules/score-demo";
import { TableDimensions } from "@/components/rules/table-dimensions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allFaqs, allRules } from "@/lib/content";

export const metadata: Metadata = {
  title: "比赛规则",
  description:
    "乒乓球规则手册：11 分制计分、发球规范、双打与团体赛制、轮换发球法、场地器材规定与红黄牌判罚，附交互计分演示与球台尺寸图。",
};

export default function RulesPage() {
  return (
    <>
      <PageHeader
        index="05"
        kicker="规则"
        title="规则手册"
        description="看得懂的规则整理：从计分与发球，到团体赛制、轮换发球法与器材规定。"
      />

      {/* 规则正文 */}
      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-16 sm:px-6">
        {allRules.map((section, i) => (
          <Reveal key={section.id}>
            <section id={section.id} className="scroll-mt-24">
              <SectionHeading
                no={String(i + 1).padStart(2, "0")}
                title={section.title}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border bg-card p-5"
                  >
                    <h3 className="font-bold tracking-tight">
                      <span className="mr-2 text-primary">·</span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}

        {/* 计分演示 */}
        <Reveal>
          <section>
            <SectionHeading
              no="09"
              title="试一试：计分演示"
              description="点按两侧按钮模拟一局比赛，观察发球权轮换与 10 平后的规则变化。"
            />
            <ScoreDemo />
          </section>
        </Reveal>

        {/* 场地尺寸 */}
        <Reveal>
          <section>
            <SectionHeading
              no="10"
              title="场地与器材尺寸"
              description="一张图看懂球台：所有尺寸均为国际乒联标准。"
            />
            <div className="flex justify-center rounded-2xl border bg-card p-6 sm:p-10">
              <TableDimensions />
            </div>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section>
            <SectionHeading title="常见疑问" />
            <Accordion type="single" collapsible className="space-y-3">
              {allFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border bg-card px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </Reveal>
      </div>
    </>
  );
}
