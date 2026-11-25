import {
  chinaOlympicResults,
  majorTournaments,
  otherTournaments,
  wttTiers,
} from "@/content/tournaments";
import { players } from "@/content/players";
import { techniques, techniqueCategories } from "@/content/techniques";
import { timeline, topics } from "@/content/history";
import { ruleFaqs, ruleSections } from "@/content/rules";
import { glossary } from "@/content/glossary";
import {
  accessories,
  apparel,
  ballSpecs,
  bladeTypes,
  brands,
  budgetNotes,
  classicGear,
  racketRecommendations,
  rubberTypes,
  maintenance,
  wizardQuestions,
} from "@/content/equipment";
import { grandSlams, keyStats, notableRecords } from "@/content/stats";
import {
  brandSchema,
  chinaOlympicRowSchema,
  faqSchema,
  glossaryTermSchema,
  majorTournamentSchema,
  otherTournamentSchema,
  playerSchema,
  ruleSectionSchema,
  techniqueSchema,
  timelineItemSchema,
  topicSchema,
  type Player,
} from "@/content/schema";
import { z } from "zod";

/**
 * 内容读取层：全部数据经 Zod 校验后导出。
 * 任何一条数据不符合 Schema，构建即失败——宁可报错，不上脏数据。
 */

function parse<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T>[] {
  return z.array(schema).parse(data) as z.infer<T>[];
}

const brandList = z.array(brandSchema);

export const allPlayers = parse(playerSchema, players);
export const allTournaments = parse(majorTournamentSchema, majorTournaments);
export const allOtherTournaments = parse(
  otherTournamentSchema,
  otherTournaments
);
export const chinaOlympics = parse(chinaOlympicRowSchema, chinaOlympicResults);
export const allTechniques = parse(techniqueSchema, techniques);
export const allTimeline = parse(timelineItemSchema, timeline);
export const allTopics = parse(topicSchema, topics);
export const allRules = parse(ruleSectionSchema, ruleSections);
export const allFaqs = parse(faqSchema, ruleFaqs);
export const allTerms = parse(glossaryTermSchema, glossary);
export const allBrands = brandList.parse(brands);
export const allBladeTypes = bladeTypes;
export const allRubberTypes = rubberTypes;
export const ball = ballSpecs;
export const allApparel = apparel;
export const allAccessories = accessories;
export const allMaintenance = maintenance;
export const allClassicGear = classicGear;
export const wizard = { questions: wizardQuestions, recs: racketRecommendations, budgetNotes };
export { grandSlams, keyStats, notableRecords };
export { techniqueCategories, wttTiers };

// ---------- 选手辅助 ----------

export function getPlayer(slug: string): Player | undefined {
  return allPlayers.find((p) => p.slug === slug);
}

export function getAdjacentPlayers(slug: string): {
  prev: Player | undefined;
  next: Player | undefined;
} {
  const i = allPlayers.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? allPlayers[i - 1] : undefined,
    next: i >= 0 && i < allPlayers.length - 1 ? allPlayers[i + 1] : undefined,
  };
}

export function getRelatedPlayers(player: Player, count = 4): Player[] {
  return allPlayers
    .filter(
      (p) =>
        p.slug !== player.slug &&
        (p.region === player.region || p.grip === player.grip)
    )
    .slice(0, count);
}

/** 按 世代 分组：前辈传奇（1969 年前出生）、中生代（1970-1989）、新生代（1990 后） */
export type Generation = "前辈传奇" | "中生代" | "新生代";

export function generationOf(born: number): Generation {
  if (born < 1970) return "前辈传奇";
  if (born < 1990) return "中生代";
  return "新生代";
}

export const generations: Generation[] = ["前辈传奇", "中生代", "新生代"];

// ---------- 技术辅助 ----------

export function getTechnique(slug: string) {
  return allTechniques.find((t) => t.slug === slug);
}

export function getAdjacentTechniques(slug: string) {
  const i = allTechniques.findIndex((t) => t.slug === slug);
  return {
    prev: i > 0 ? allTechniques[i - 1] : undefined,
    next: i >= 0 && i < allTechniques.length - 1 ? allTechniques[i + 1] : undefined,
  };
}

// ---------- 赛事统计 ----------

/** 中国队历届奥运金牌走势（供图表使用） */
export const olympicGoldTrend = chinaOlympics.map((row) => ({
  games: row.games,
  gold: row.gold,
}));

/** 中国队奥运奖牌合计 */
export const olympicTotals = chinaOlympics.reduce(
  (acc, row) => ({
    gold: acc.gold + row.gold,
    silver: acc.silver + row.silver,
    bronze: acc.bronze + row.bronze,
  }),
  { gold: 0, silver: 0, bronze: 0 }
);

/** 国家/地区 → 展示用色（仅用于装饰性色点与卡片配色） */
export const countryColors: Record<string, string> = {
  CHN: "#c1121f",
  JPN: "#e0862e",
  KOR: "#3b6fd4",
  TPE: "#129d8f",
  SWE: "#5b6fd6",
  GER: "#d47628",
  BLR: "#8f5fd0",
  FRA: "#3f93d6",
  SGP: "#d4537a",
  LUX: "#7ba33d",
  BRA: "#4ca344",
};

export function countryColor(code: string): string {
  return countryColors[code] ?? "#8a877e";
}
