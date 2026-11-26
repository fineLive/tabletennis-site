# 乒乓球世界 - Table Tennis World

介绍乒乓球运动的文化站点：历史、规则、技术、装备、传奇运动员、重要赛事，以及数据中心与术语词典。

> 2026 年重构版：从纯静态 HTML 升级为 **Next.js + React + Tailwind CSS** 技术栈，
> 内容与页面彻底分离，新增深色模式、全站搜索、筛选交互与滚动动效。
> 重构方案见 [docs/upgrade-plan.md](docs/upgrade-plan.md)。

## 🚀 本地开发

```bash
npm install       # 安装依赖
npm run dev       # 开发模式 http://localhost:3000
npm run build     # 生产构建（静态导出到 out/）
npm run deploy    # 构建 + 部署到 Cloudflare Workers
npm run typecheck # 类型检查
```

构建产物 `out/` 是纯静态文件（不入库），可直接部署到 Cloudflare Workers、GitHub Pages、
Vercel 等任意静态托管（仓库内 `wrangler.jsonc` 已按 Cloudflare Workers 配置）。

**Cloudflare Workers Builds 部署命令请配置为 `npm run deploy`**
（即先构建生成 `out/`，再执行 `wrangler deploy`；只跑 `wrangler deploy` 会因找不到 `out/` 而失败）。

## 📁 项目结构

```
tabletennis-site/
├── app/                    # 路由（App Router，静态导出）
│   ├── page.tsx            # 首页
│   ├── history/            # 历史（时间线 + 专题故事）
│   ├── players/            # 运动员名录 + [slug] 详情页
│   ├── tournaments/        # 赛事图鉴 + 中国队奥运战绩
│   ├── techniques/         # 技术要领 + [slug] 详情页
│   ├── rules/              # 规则手册（交互计分演示 + 尺寸图）
│   ├── equipment/          # 装备指南（选拍向导）
│   ├── stats/              # 数据中心（图表）
│   ├── glossary/           # 术语词典（即输即筛）
│   ├── about/              # 关于与内容更正记录
│   └── search-index.json/  # 全站搜索索引（构建期生成）
├── content/                # ⭐ 内容层：全部栏目数据（纯数据 + Zod Schema）
│   ├── players/            #   运动员（按分组文件添加新选手）
│   ├── schema.ts           #   数据结构定义
│   └── *.ts                #   赛事 / 技术 / 规则 / 装备 / 历史 / 词典 / 统计
├── components/             # 组件
│   ├── ui/                 #   shadcn/ui 基础组件
│   ├── layout/             #   导航、页脚、页头
│   ├── motion/             #   滚动进场、数字滚动等动效
│   └── ...                 #   搜索面板、筛选器、向导、图表等
└── lib/                    # 内容读取与校验（构建期报错拦截脏数据）
```

## ✏️ 如何改内容

- **加一位运动员**：在 `content/players/` 对应分组文件里追加一条记录，名录与详情页自动生成
- **补一个术语**：在 `content/glossary.ts` 加一条
- **修正数据**：所有内容集中在 `content/` 目录，改完 `npm run build` 即可；
  不符合 Schema 的数据会让构建直接失败，避免脏数据上线

## 🛠 技术栈

Next.js 16（App Router + 静态导出）· React 19 · TypeScript · Tailwind CSS 4 ·
shadcn/ui · Motion · Recharts · Zod · lucide-react

- 深色模式（跟随系统 + 手动切换）
- Ctrl / ⌘ + K 全站搜索
- 运动员多维筛选（地区 / 性别 / 握拍 / 世代），动效遵循系统"减弱动态效果"设置

## 📊 内容规模

41 位中外传奇选手（每人一个详情页）· 25 项技术动作 · 三大赛历届冠军名录 ·
中国队 1988-2024 奥运战绩 · 46 个术语词条 · 8 条规则章节

内容整理自公开资料，仅供学习交流。更正记录见[关于页](app/about/page.tsx)。

## 📄 许可证

MIT License

---

**弘扬国球精神，传播乒乓文化** 🏓
