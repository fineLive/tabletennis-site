/** 大满贯得主（完成年份 = 集齐三大赛单打冠军的时间） */
export const grandSlams = {
  men: [
    { name: "瓦尔德内尔", country: "瑞典", completed: "1992", note: "史上首位大满贯" },
    { name: "刘国梁", country: "中国", completed: "1999", note: "中国首位男子大满贯" },
    { name: "孔令辉", country: "中国", completed: "2000", note: "悉尼奥运登顶完成" },
    { name: "张继科", country: "中国", completed: "2012", note: "445 天最快纪录" },
    { name: "马龙", country: "中国", completed: "2016", note: "唯一男子双圈大满贯" },
    { name: "樊振东", country: "中国", completed: "2024", note: "巴黎奥运登顶完成" },
  ],
  women: [
    { name: "邓亚萍", country: "中国", completed: "1996", note: "史上首位女子大满贯" },
    { name: "王楠", country: "中国", completed: "2000", note: "24 个世界冠军保持者" },
    { name: "张怡宁", country: "中国", completed: "2004", note: "首位女子双圈大满贯" },
    { name: "李晓霞", country: "中国", completed: "2013", note: "伦敦奥运登顶完成" },
    { name: "丁宁", country: "中国", completed: "2017", note: "世乒赛三冠王" },
  ],
};

/** 首页与数据中心共用的关键数字 */
export const keyStats = [
  { value: 37, label: "中国队奥运金牌", suffix: "枚" },
  { value: 10, label: "奥运女单金牌全包揽", suffix: "/10" },
  { value: 11, label: "乒坛大满贯得主", suffix: "人" },
  { value: 1926, label: "首届世乒赛举办", suffix: "年" },
];

/** 大满贯之外的可查纪录 */
export const notableRecords = [
  {
    title: "奥运女单 10/10",
    detail: "1988 年至今的 10 届奥运会，女单金牌全部由中国选手获得，无一次旁落。",
  },
  {
    title: "庄则栋与马龙的三连冠",
    detail: "世乒赛男单三连冠历史上仅两人做到：庄则栋（1961-1965）与马龙（2015-2019）。",
  },
  {
    title: "445 天最快大满贯",
    detail: "张继科从 2011 年世界杯到 2012 年伦敦奥运会，445 天集齐三大赛冠军，至今无人接近。",
  },
  {
    title: "刘诗雯世界杯五冠",
    detail: "世界杯女单 5 次夺冠是赛事纪录；男单纪录为马琳与樊振东的 4 次。",
  },
];
