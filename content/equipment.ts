import type { Brand } from "./schema";

export const bladeTypes = [
  {
    name: "纯木底板",
    desc: "手感清晰、形变大、控制力强，是初学者和弧圈打法的第一选择。五层偏软吃球深，七层偏硬出球快。",
    tags: ["弧圈", "控制", "全面"],
  },
  {
    name: "碳素底板",
    desc: "含碳层提升刚性与一速，击球脆硬、脱板快，适合以快攻和一板过的进攻型选手，对动作规范要求高。",
    tags: ["快攻", "力量"],
  },
  {
    name: "纤维底板",
    desc: "芳基、蓝芳基等纤维层介于纯木与碳素之间，兼顾弹性与持球感，是当今职业选手的主流选择。",
    tags: ["全面", "弧圈"],
  },
  {
    name: "五层板",
    desc: "底板中较软的类型，吃球深、弧线好，拉弧圈时旋转强、手感通透。",
    tags: ["弧圈", "初学"],
  },
  {
    name: "七层板",
    desc: "更硬更快的纯木结构，一速快、发力直接，适合近台快攻结合弧圈。",
    tags: ["快攻", "力量"],
  },
];

export const rubberTypes = [
  {
    name: "反胶",
    desc: "胶面光滑朝外、摩擦最强，能制造强烈旋转，是使用率最高的胶皮类型，正手主流选择。",
    tags: ["旋转", "主流"],
  },
  {
    name: "正胶",
    desc: "颗粒朝外、颗粒较短，出球速度快、下沉感强，是传统快攻的代表胶皮。",
    tags: ["快攻", "速度"],
  },
  {
    name: "生胶",
    desc: "颗粒较硬较粗，弹性大、回球下沉飘忽，多用于反手弹击与快速进攻（如伊藤美诚）。 ",
    tags: ["快攻", "怪异"],
  },
  {
    name: "长胶",
    desc: "颗粒细长，回球旋转反转、节奏怪异，防守中让对方“自己失误”，业余圈所谓的“骚扰神器”。",
    tags: ["防守", "怪异"],
  },
  {
    name: "防弧胶",
    desc: "表面涩性无粘性、海绵软，专门用来抵消弧圈球的旋转，属小众防守胶皮。",
    tags: ["防守"],
  },
];

export const ballSpecs = {
  standard: [
    "直径：40 毫米（40+ 新材料球）",
    "重量：约 2.7 克",
    "材质：高分子新材料（赛璐珞已于 2014 年后被淘汰）",
    "颜色：白色或橙色，表面无光泽",
    "弹性：从 30 厘米高度自由落下，反弹约 23 厘米",
  ],
  starLevels: [
    { level: "三星球", desc: "国际比赛指定用球，圆度与弹性的均匀度最高，正式比赛与认真训练必选。" },
    { level: "二星球", desc: "质量中等的比赛级用球，适合俱乐部活动与日常训练。" },
    { level: "一星球", desc: "训练用球，圆度一般、易变形，适合多球训练等高消耗场景。" },
  ],
};

export const apparel = [
  {
    name: "运动服",
    desc: "透气速干面料是底线；正式比赛时服装主色不得与比赛用球颜色相同。业余选择合身、不影响挥拍幅度的即可。",
    tips: ["选速干透气面料", "颜色避开白/橙（比赛规则）", "袖口不影响挥拍"],
  },
  {
    name: "乒乓球鞋",
    desc: "乒乓球移动以横向蹬停为主，需要专业球鞋的侧向支撑与防滑底。跑鞋偏纵向缓震，打乒乓球反而容易崴脚。",
    tips: ["选专业乒乓球鞋或羽毛球鞋", "鞋底防滑且不留痕迹", "包裹性好、重量轻"],
  },
];

export const accessories = [
  { name: "护腕 / 护膝", icon: "bandage" as const, desc: "保护手腕与膝盖，降低连续训练的劳损风险。" },
  { name: "运动袜", icon: "sock" as const, desc: "吸汗透气、减少脚部滑动摩擦，打球前别穿新袜上场。" },
  { name: "球拍包", icon: "bag" as const, desc: "保护拍面不受压，常备 1-2 块备用拍是业余进阶的标志。" },
  { name: "胶皮清洁剂", icon: "spray" as const, desc: "赛后清洁胶皮表面、延缓氧化，配合保护膜使用效果最佳。" },
  { name: "水壶", icon: "bottle" as const, desc: "高强度回合消耗远超想象，及时补水保持专注。" },
  { name: "毛巾", icon: "towel" as const, desc: "每 6 分的法定擦汗间隙，也是打断对手节奏的合法工具。" },
];

export const maintenance = [
  {
    title: "日常清洁",
    items: [
      "每次使用后用专用清洁剂喷洒胶皮表面",
      "用海绵或软布自网侧向拍边轻擦",
      "避免用水或酒精等有机溶剂直接擦拭",
    ],
  },
  {
    title: "存放方法",
    items: [
      "清洁后贴上胶皮保护膜，防止氧化",
      "放入拍包平放，避免重物挤压",
      "存放在阴凉干燥处，避免暴晒与高温（后备箱是大忌）",
    ],
  },
  {
    title: "更换时机",
    items: [
      "胶皮失去粘性或表面发亮时考虑更换",
      "海绵发硬、弹性明显下降时更换",
      "训练量大建议 3-6 个月更换套胶，底板寿命通常数年",
    ],
  },
];

export const brands: Brand[] = [
  { name: "红双喜（DHS）", origin: "中国", desc: "国家队长期器材赞助商，狂飙系列套胶是中国主力正手的标配。" },
  { name: "蝴蝶（Butterfly）", origin: "日本", desc: "世界占有率第一的品牌，张继科、波尔等名将领衔的底板与套胶体系庞大。" },
  { name: "斯蒂卡（Stiga）", origin: "瑞典", desc: "瑞典王朝的器材底色，Clipper 与 Offensive 系列是横拍经典。" },
  { name: "尤拉（Joola）", origin: "德国", desc: "欧洲老牌，性价比高，长期赞助国际赛事用台。" },
  { name: "尼塔库（Nittaku）", origin: "日本", desc: "以“最好的比赛用球”著称，底板做工精细。" },
  { name: "挺拔（TIBHAR）", origin: "德国", desc: "萨姆索诺夫长期代言，器材体系均衡全面。" },
  { name: "多尼克（Donic）", origin: "德国", desc: "瓦尔德内尔曾代言，欧洲快攻弧圈打法的代表品牌。" },
  { name: "银河（Yinhe / Milky Way）", origin: "中国", desc: "国产性价比之王，入门到中高端底板覆盖完整。" },
];

export const classicGear = [
  { name: "斯蒂卡 Clipper Wood", user: "瓦尔德内尔", desc: "七层纯木的经典中的经典，瑞典王朝的“秘密武器”，至今仍是快攻爱好者神板。" },
  { name: "狂飙龙 5（W968）", user: "马龙", desc: "马龙的现役底板，芳碳结构把持球与一速做到了罕见的平衡。" },
  { name: "狂飙 3（蓝海绵）", user: "国家队正手标配", desc: "中国主力正手套胶的标准答案，粘性胶面+硬海绵，旋转与控制的代名词。" },
  { name: "Tenergy 05", user: "波尔 / 张怡宁（反手）", desc: "蝴蝶的气垫海绵套胶，反手弧圈的全球标杆，吞吐感清晰。" },
];

/** 选拍向导数据 */
export const wizardQuestions = [
  {
    id: "level" as const,
    question: "你现在的水平",
    options: [
      { value: "beginner", label: "刚入门" },
      { value: "intermediate", label: "进阶业余" },
      { value: "advanced", label: "高水平" },
    ],
  },
  {
    id: "style" as const,
    question: "喜欢的打法",
    options: [
      { value: "attack", label: "近台快攻" },
      { value: "loop", label: "弧圈旋转" },
      { value: "allround", label: "全面均衡" },
      { value: "defend", label: "防守控制" },
    ],
  },
  {
    id: "budget" as const,
    question: "整套预算（底板+两面套胶）",
    options: [
      { value: "low", label: "200 元以内" },
      { value: "mid", label: "200-600 元" },
      { value: "high", label: "600 元以上" },
    ],
  },
];

export const racketRecommendations: Record<string, { title: string; detail: string }> = {
  "beginner-attack": {
    title: "七层纯木底板 + 正胶或涩性反胶",
    detail: "初学快攻推荐一块偏硬的七层纯木配正胶或入门涩性反胶，出球速度快、容错好，先把“打”的手感建立起来。",
  },
  "beginner-loop": {
    title: "五层纯木底板 + 国产粘性反胶",
    detail: "五层纯木吃球深、旋转好上手，配两面国产粘性反胶（如狂飙入门版），是学弧圈的经典起点。",
  },
  "beginner-allround": {
    title: "五层纯木底板 + 两面均衡反胶",
    detail: "全面型起点：一块手感通透的五层纯木，两面各贴一张入门反胶，正反手都能均衡发展。",
  },
  "beginner-defend": {
    title: "控制型纯木底板 + 反胶/长胶",
    detail: "以稳为主：软一点的纯木底板配反胶控制落点，若想体验旋转变化可在一面尝试长胶（建议有一定基础后再上）。",
  },
  "intermediate-attack": {
    title: "七层纯木或轻碳底板 + 涩性套胶",
    detail: "这个阶段可以上七层纯木或轻碳板，配两面涩性套胶提升一速与弹击质量，近台快攻的凶狠度立竿见影。",
  },
  "intermediate-loop": {
    title: "芳碳底板 + 狂飙系正手 + 涩性反手",
    detail: "经典进阶配置：芳碳底板吃住球又给得出速度，正手粘性狂飙打旋转，反手涩性套胶利于弹撕。",
  },
  "intermediate-allround": {
    title: "纤维底板 + 两面中性反胶",
    detail: "纤维底板的均衡属性配两面中性涩性套胶，正反手转换顺手，适合打法还在成型的全面型选手。",
  },
  "intermediate-defend": {
    title: "削球板 + 反胶与长胶组合",
    detail: "若认真走削球路线，选专门的削球底板（板面大、形变柔），一面反胶削转、一面长胶变节奏。",
  },
  "advanced-attack": {
    title: "碳素底板 + 高端涩性套胶组合",
    detail: "高水平快攻用硬质碳素板配两面顶级涩性套胶（如 D 系），一速与弹击的上限直接拉满。",
  },
  "advanced-loop": {
    title: "顶级芳碳底板 + 狂飙/D 系组合",
    detail: "对标职业配置：W968 类芳碳板，正手蓝海绵狂飙、反手 D 系套胶，旋转与速度都在职业级。",
  },
  "advanced-allround": {
    title: "均衡纤维板 + 按手感微调配胶",
    detail: "高手阶段器材取决于手感偏好：均衡纤维板打底，配胶根据正反手分工微调，多试打再定。",
  },
  "advanced-defend": {
    title: "专业削球体系",
    detail: "专业级防守需要整套削球体系：大面削球板、专用削球套胶与长胶配合，并有针对性的步法训练。",
  },
};

export const budgetNotes: Record<string, string> = {
  low: "预算内优先保证底板品质，套胶选国产入门系列即可，入门阶段手感远比器材参数重要。",
  mid: "这个预算可以买到非常体面的“一步到位”配置，建议底板与套胶各占一半。",
  high: "预算充足时请先试打再购买——高端器材个体差异大，别只看参数堆料。",
};
