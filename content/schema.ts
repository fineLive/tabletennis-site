import { z } from "zod";

/**
 * 内容层 Schema
 * 所有栏目数据在 lib/content.ts 中经 Zod 校验后使用；
 * 校验失败时构建直接报错，避免脏数据上线。
 */

export const playerSchema = z.object({
  /** URL 标识，如 "ma-long" */
  slug: z.string().min(1),
  name: z.string().min(1),
  /** 国家中文名 */
  country: z.string().min(1),
  /** ISO 3166 国家/地区码，用于配色与筛选 */
  countryCode: z.string().min(2).max(3),
  /** 所属大洲板块，用于名录筛选 */
  region: z.enum(["中国", "亚洲", "欧洲", "美洲", "大洋洲"]),
  gender: z.enum(["男", "女"]),
  /** 出生年份；已故选手另填 deathYear */
  born: z.number().int().min(1900).max(2015),
  deathYear: z.number().int().optional(),
  grip: z.enum(["横拍", "直拍"]),
  /** 打法描述，如 "两面弧圈，力量型" */
  style: z.string().min(1),
  /** 巅峰时期描述，如 "1990 年代" */
  era: z.string().min(1),
  nickname: z.string().optional(),
  /** 一句话定位 */
  title: z.string().min(1),
  /** 两到三句简介 */
  intro: z.string().min(1),
  /** 主要成就，4-6 条 */
  highlights: z.array(z.string().min(1)).min(2),
  /** 是否在首页精选展示 */
  featured: z.boolean().default(false),
});

export const championSchema = z.object({
  year: z.string().min(1),
  name: z.string().min(1),
  country: z.string().min(1),
});

export const majorTournamentSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  badge: z.string().min(1),
  founded: z.string().min(1),
  cycle: z.string().min(1),
  events: z.string().min(1),
  desc: z.string().min(1),
  /** 单打冠军列表；key 为项目名 */
  champions: z.array(
    z.object({ label: z.string(), list: z.array(championSchema) })
  ),
  note: z.string().optional(),
});

export const otherTournamentSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  cycle: z.string().min(1),
});

export const chinaOlympicRowSchema = z.object({
  games: z.string().min(1),
  host: z.string().min(1),
  gold: z.number().int().min(0),
  silver: z.number().int().min(0),
  bronze: z.number().int().min(0),
});

export const techniqueSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  steps: z.array(z.string().min(1)).min(2),
  mistakes: z.array(z.string().min(1)).min(1),
  /** 代表选手 */
  masters: z.string().optional(),
});

export const timelineItemSchema = z.object({
  year: z.string().min(1),
  title: z.string().min(1),
  text: z.string().min(1),
  /** 专题标记，如 "中国" "世界" */
  tag: z.string().optional(),
});

export const topicSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
});

export const ruleSectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  items: z
    .array(z.object({ title: z.string().min(1), text: z.string().min(1) }))
    .min(1),
});

export const faqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

export const brandSchema = z.object({
  name: z.string().min(1),
  origin: z.string().min(1),
  desc: z.string().min(1),
});

export const glossaryTermSchema = z.object({
  term: z.string().min(1),
  category: z.string().min(1),
  def: z.string().min(1),
});

export type Player = z.infer<typeof playerSchema>;
export type Champion = z.infer<typeof championSchema>;
export type MajorTournament = z.infer<typeof majorTournamentSchema>;
export type OtherTournament = z.infer<typeof otherTournamentSchema>;
export type ChinaOlympicRow = z.infer<typeof chinaOlympicRowSchema>;
export type Technique = z.infer<typeof techniqueSchema>;
export type TimelineItem = z.infer<typeof timelineItemSchema>;
export type Topic = z.infer<typeof topicSchema>;
export type RuleSection = z.infer<typeof ruleSectionSchema>;
export type Faq = z.infer<typeof faqSchema>;
export type Brand = z.infer<typeof brandSchema>;
export type GlossaryTerm = z.infer<typeof glossaryTermSchema>;
