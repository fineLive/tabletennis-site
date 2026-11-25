import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { PlayersBrowser } from "@/components/players/players-browser";
import { allPlayers } from "@/lib/content";

export const metadata: Metadata = {
  title: "运动员",
  description: `${allPlayers.length} 位中外乒乓球传奇的生涯档案：从容国团、邓亚萍到马龙、孙颖莎，以及瓦尔德内尔、波尔等国际名将。`,
};

export default function PlayersPage() {
  return (
    <>
      <PageHeader
        index="02"
        kicker="运动员"
        title="传奇名人堂"
        description={`横跨 1959 年至今的 ${allPlayers.length} 位传奇——包括三大赛冠军、打法开宗立派者与乒坛常青树。支持按地区、性别、握拍与世代筛选。`}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <PlayersBrowser />
      </div>
    </>
  );
}
