import type { Metadata } from "next";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "关于本站",
  description:
    "乒乓球世界的升级说明：技术架构、内容来源与更正记录、数据说明与反馈渠道。",
};

const CORRECTIONS: { old: string; now: string }[] = [
  {
    old: "刘国梁 1996 年奥运会获男双冠军、男单亚军",
    now: "1996 年亚特兰大奥运会为男单、男双双料冠军",
  },
  {
    old: "张怡宁奥运会金牌 2 枚",
    now: "4 枚（2004 单打+双打、2008 单打+团体）",
  },
  {
    old: "樊振东世锦赛男单冠军 3 次（2021、2023、2025）",
    now: "2 次（2021、2023）；2025 年多哈男单冠军为王楚钦",
  },
  {
    old: "2024 年巴黎奥运会女单冠军为孙颖莎",
    now: "陈梦（决赛战胜孙颖莎，实现卫冕）",
  },
  {
    old: "世界杯“每年举办一次”",
    now: "补充 2021-2024 年停办、2025 年澳门复办的信息",
  },
  {
    old: "2020 东京奥运会中国队 4 金 2 银 1 铜",
    now: "4 金 2 银（银牌：樊振东男单、许昕/刘诗雯混双）",
  },
  {
    old: "比赛用球“赛璐珞或高分子材料”",
    now: "赛璐珞球已于 2014 年被新材料 40+ 球取代",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="09"
        kicker="关于"
        title="关于本站"
        description="乒乓球世界的重构版：为什么升级、如何升级，以及一份诚实的内容说明。"
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        <Reveal>
          <section>
            <SectionHeading no="01" title="这个站点" />
            <div className="max-w-3xl space-y-4 text-sm leading-loose text-muted-foreground sm:text-base">
              <p>
                「乒乓球世界」最初是一个 7 页面的纯静态 HTML 站。2026 年重构为
                React 技术栈：Next.js（App Router + 静态导出）、Tailwind CSS、
                shadcn/ui 与 Motion，内容与页面彻底分离——所有数据存放在
                <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 font-mono text-[13px]">content/</code>
                目录，经 Zod 校验后构建成静态站点。
              </p>
              <p>
                站点无后端、无追踪、无 Cookie，纯静态部署，加载快且对搜索引擎友好。
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="corrections" className="scroll-mt-24">
            <SectionHeading
              no="02"
              title="内容更正记录"
              description="重构同时也是一次全面校对。相比旧版，本站更正了以下内容错误："
            />
            <div className="overflow-hidden rounded-xl border">
              <ul className="divide-y">
                {CORRECTIONS.map((c, i) => (
                  <li
                    key={i}
                    className="grid gap-2 bg-card px-5 py-4 sm:grid-cols-2 sm:gap-6"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="mr-2 rounded bg-secondary px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                        旧版
                      </span>
                      {c.old}
                    </p>
                    <p className="text-sm leading-relaxed">
                      <span className="mr-2 rounded bg-primary px-1.5 py-0.5 font-mono text-[11px] text-primary-foreground">
                        更正
                      </span>
                      {c.now}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading no="03" title="数据与图片来源" />
            <div className="max-w-3xl space-y-4 text-sm leading-loose text-muted-foreground sm:text-base">
              <p>
                内容整理自国际乒联、各国乒协与主流体育媒体的公开资料。赛事页的
                奥运会金牌数与历届冠军名单可相互交叉验证；奖牌表中各届的
                <strong className="text-foreground">
                  银、铜牌数为整理值
                </strong>
                ，正式引用前请对照权威来源复核。
              </p>
              <p>
                出于版权考虑，本站未使用任何人物摄影照片；选手卡片与示意图均为原创矢量图形。
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading no="04" title="反馈与贡献" />
            <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-muted-foreground">
                发现内容错误或有想补充的人物、术语？欢迎提交 Issue 或 Pull
                Request——数据文件就在仓库的 content/ 目录里，改起来很轻松。
              </p>
              <div className="flex shrink-0 gap-3">
                <a
                  href="https://github.com/fineLive/tabletennis-site/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  提交 Issue
                </a>
                <a
                  href="https://github.com/fineLive/tabletennis-site"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Code2 className="size-4" />
                  仓库
                </a>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              返回{" "}
              <Link href="/" className="font-medium text-primary hover:underline">
                首页
              </Link>
              ，或从导航进入任意栏目。
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
}
