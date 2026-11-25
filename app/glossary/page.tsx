import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GlossaryBrowser } from "@/components/glossary/glossary-browser";
import { allTerms } from "@/lib/content";

export const metadata: Metadata = {
  title: "术语词典",
  description: `从“摆短”“拧拉”到“半出台”“神球”——${allTerms.length} 个乒乓球术语与技术黑话的通俗解释，支持即输即筛。`,
};

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        index="08"
        kicker="词典"
        title="术语词典"
        description="看比赛听不懂解说？球友聊天接不上黑话？这一页把行话翻译成人话。"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <GlossaryBrowser />
      </div>
    </>
  );
}
