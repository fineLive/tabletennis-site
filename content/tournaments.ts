import type {
  ChinaOlympicRow,
  MajorTournament,
  OtherTournament,
} from "./schema";

/** 三大赛 */
export const majorTournaments: MajorTournament[] = [
  {
    slug: "olympics",
    name: "奥运会乒乓球比赛",
    badge: "最高荣誉",
    founded: "1988 年（汉城）",
    cycle: "每 4 年一届",
    events: "男单、女单、男团、女团、混双（5 项）",
    desc: "奥运会是乒乓球运动员的最高殿堂。1988 年汉城奥运会首次设项，当时为男单、女单、男双、女双四个项目；2008 年北京奥运会起双打改为团体赛；2020 年东京奥运会新增混双。1988 年至今的 10 届奥运会中，中国女队包揽了全部 10 枚女单金牌，男单金牌也仅有 3 次旁落。",
    champions: [
      {
        label: "历届男单冠军",
        list: [
          { year: "1988", name: "刘南奎", country: "韩国" },
          { year: "1992", name: "瓦尔德内尔", country: "瑞典" },
          { year: "1996", name: "刘国梁", country: "中国" },
          { year: "2000", name: "孔令辉", country: "中国" },
          { year: "2004", name: "柳承敏", country: "韩国" },
          { year: "2008", name: "马琳", country: "中国" },
          { year: "2012", name: "张继科", country: "中国" },
          { year: "2016", name: "马龙", country: "中国" },
          { year: "2020", name: "马龙", country: "中国" },
          { year: "2024", name: "樊振东", country: "中国" },
        ],
      },
      {
        label: "历届女单冠军",
        list: [
          { year: "1988", name: "陈静", country: "中国" },
          { year: "1992", name: "邓亚萍", country: "中国" },
          { year: "1996", name: "邓亚萍", country: "中国" },
          { year: "2000", name: "王楠", country: "中国" },
          { year: "2004", name: "张怡宁", country: "中国" },
          { year: "2008", name: "张怡宁", country: "中国" },
          { year: "2012", name: "李晓霞", country: "中国" },
          { year: "2016", name: "丁宁", country: "中国" },
          { year: "2020", name: "陈梦", country: "中国" },
          { year: "2024", name: "陈梦", country: "中国" },
        ],
      },
    ],
    note: "2024 年巴黎奥运会，中国队包揽全部 5 个项目金牌。",
  },
  {
    slug: "world-championships",
    name: "世界乒乓球锦标赛",
    badge: "历史最悠久",
    founded: "1926 年（伦敦）",
    cycle: "每 2 年一届，单项赛与团体赛交替举行",
    events: "男单、女单、男双、女双、混双、男团、女团（7 项）",
    desc: "由国际乒联主办的世乒赛是历史最悠久的乒乓球国际赛事，1926 年首届在伦敦举行。自 1999 年起，单项赛与团体赛分开举办：单项赛在奇数年举行，团体赛在偶数年举行。男单冠军杯为圣勃莱德杯，女单冠军杯为吉盖斯特杯，男团为斯韦思林杯，女团为考比伦杯。",
    champions: [
      {
        label: "历届男单冠军（1959 年起）",
        list: [
          { year: "1959", name: "容国团", country: "中国" },
          { year: "1961", name: "庄则栋", country: "中国" },
          { year: "1963", name: "庄则栋", country: "中国" },
          { year: "1965", name: "庄则栋", country: "中国" },
          { year: "1971", name: "S·本格森", country: "瑞典" },
          { year: "1973", name: "郗恩庭", country: "中国" },
          { year: "1977", name: "河野满", country: "日本" },
          { year: "1981", name: "郭跃华", country: "中国" },
          { year: "1983", name: "郭跃华", country: "中国" },
          { year: "1985", name: "江嘉良", country: "中国" },
          { year: "1987", name: "江嘉良", country: "中国" },
          { year: "1989", name: "瓦尔德内尔", country: "瑞典" },
          { year: "1991", name: "佩尔森", country: "瑞典" },
          { year: "1993", name: "盖亭", country: "法国" },
          { year: "1995", name: "孔令辉", country: "中国" },
          { year: "1997", name: "瓦尔德内尔", country: "瑞典" },
          { year: "1999", name: "刘国梁", country: "中国" },
          { year: "2001", name: "王励勤", country: "中国" },
          { year: "2003", name: "施拉格", country: "奥地利" },
          { year: "2005", name: "王励勤", country: "中国" },
          { year: "2007", name: "王励勤", country: "中国" },
          { year: "2009", name: "王皓", country: "中国" },
          { year: "2011", name: "张继科", country: "中国" },
          { year: "2013", name: "张继科", country: "中国" },
          { year: "2015", name: "马龙", country: "中国" },
          { year: "2017", name: "马龙", country: "中国" },
          { year: "2019", name: "马龙", country: "中国" },
          { year: "2021", name: "樊振东", country: "中国" },
          { year: "2023", name: "樊振东", country: "中国" },
          { year: "2025", name: "王楚钦", country: "中国" },
        ],
      },
      {
        label: "历届女单冠军（1981 年起）",
        list: [
          { year: "1981", name: "童玲", country: "中国" },
          { year: "1983", name: "曹燕华", country: "中国" },
          { year: "1985", name: "曹燕华", country: "中国" },
          { year: "1987", name: "何智丽", country: "中国" },
          { year: "1989", name: "乔红", country: "中国" },
          { year: "1991", name: "邓亚萍", country: "中国" },
          { year: "1993", name: "玄静和", country: "韩国" },
          { year: "1995", name: "邓亚萍", country: "中国" },
          { year: "1997", name: "邓亚萍", country: "中国" },
          { year: "1999", name: "王楠", country: "中国" },
          { year: "2001", name: "王楠", country: "中国" },
          { year: "2003", name: "王楠", country: "中国" },
          { year: "2005", name: "张怡宁", country: "中国" },
          { year: "2007", name: "郭跃", country: "中国" },
          { year: "2009", name: "张怡宁", country: "中国" },
          { year: "2011", name: "丁宁", country: "中国" },
          { year: "2013", name: "李晓霞", country: "中国" },
          { year: "2015", name: "丁宁", country: "中国" },
          { year: "2017", name: "丁宁", country: "中国" },
          { year: "2019", name: "刘诗雯", country: "中国" },
          { year: "2021", name: "王曼昱", country: "中国" },
          { year: "2023", name: "孙颖莎", country: "中国" },
          { year: "2025", name: "孙颖莎", country: "中国" },
        ],
      },
    ],
    note: "中国选手获得了 1959 年以来绝大多数世乒赛单项冠军；1993 年玄静和的女单金牌是 90 年代唯一的旁落。",
  },
  {
    slug: "world-cup",
    name: "乒乓球世界杯",
    badge: "年度盛事",
    founded: "1980 年（香港，首届男子）",
    cycle: "每年一届（2021-2024 年停办，2025 年复办）",
    events: "男子单打、女子单打",
    desc: "1980 年首届男子世界杯在香港举办，1996 年增设女子世界杯。世界杯参赛规模小、赛制紧凑，采用小组循环加淘汰赛。2020 年后赛事一度停办，2025 年在澳门复办——巴西选手雨果·卡尔德拉诺成为首位来自美洲的男单冠军。",
    champions: [
      {
        label: "男单夺冠次数排行",
        list: [
          { year: "4 次", name: "马琳（2000-2006）", country: "中国" },
          { year: "4 次", name: "樊振东（2016-2020）", country: "中国" },
          { year: "3 次", name: "萨姆索诺夫（1999-2009）", country: "白俄罗斯" },
          { year: "2 次", name: "马龙（2012、2015）", country: "中国" },
          { year: "2 次", name: "张继科（2011、2014）", country: "中国" },
          { year: "2 次", name: "波尔（2002、2005）", country: "德国" },
        ],
      },
      {
        label: "近年男单冠军",
        list: [
          { year: "2016", name: "樊振东", country: "中国" },
          { year: "2017", name: "奥恰洛夫", country: "德国" },
          { year: "2018", name: "樊振东", country: "中国" },
          { year: "2019", name: "樊振东", country: "中国" },
          { year: "2020", name: "樊振东", country: "中国" },
          { year: "2025", name: "雨果·卡尔德拉诺", country: "巴西" },
        ],
      },
      {
        label: "近年女单冠军",
        list: [
          { year: "2016", name: "平野美宇（16 岁，最年轻冠军）", country: "日本" },
          { year: "2017", name: "朱雨玲", country: "中国" },
          { year: "2018", name: "丁宁", country: "中国" },
          { year: "2019", name: "刘诗雯", country: "中国" },
          { year: "2020", name: "陈梦", country: "中国" },
          { year: "2025", name: "孙颖莎", country: "中国" },
        ],
      },
    ],
    note: "刘诗雯以 5 次女单冠军保持世界杯女单纪录。",
  },
];

/** WTT 赛事体系 */
export const wttTiers = [
  {
    name: "WTT 大满贯赛",
    level: "顶级",
    desc: "2022 年首届（新加坡）举办，冠军积分 2000 分，与世乒赛看齐，是职业球员最重要的积分来源之一。每年在世界多地举办多站。",
    cycle: "每年多站",
  },
  {
    name: "WTT 总总决赛",
    level: "年终",
    desc: "年末举行的收官赛事，只有全年积分排名靠前的选手有资格参加。",
    cycle: "每年一届",
  },
  {
    name: "WTT 冠军赛",
    level: "高级",
    desc: "仅邀请世界排名前列的选手参加，冠军积分 1000 分，单打为主。",
    cycle: "每年多站",
  },
  {
    name: "WTT 球星挑战赛",
    level: "中高级",
    desc: "参赛门槛与积分次于冠军赛，是新秀冲击高级别赛事的跳板。",
    cycle: "每年多站",
  },
  {
    name: "WTT 常规挑战赛",
    level: "中级",
    desc: "覆盖面最广的职业赛事，为各国年轻选手提供国际赛场。",
    cycle: "每年多站",
  },
  {
    name: "WTT 支线赛",
    level: "基础",
    desc: "职业体系的底层赛事，积分较少，主要面向低排名选手。",
    cycle: "每年多站",
  },
];

/** 其他重要赛事 */
export const otherTournaments: OtherTournament[] = [
  {
    name: "亚运会乒乓球赛",
    desc: "亚洲最高水平的综合性运动会乒乓球比赛，1974 年德黑兰亚运会首次设项。",
    cycle: "每 4 年",
  },
  {
    name: "亚洲乒乓球锦标赛",
    desc: "亚洲乒联主办的最高级别洲际赛事，1972 年首届举办，被誉为“小世锦赛”。",
    cycle: "每 2 年",
  },
  {
    name: "欧洲乒乓球锦标赛",
    desc: "欧洲乒坛最高级别洲际赛事，波尔、奥恰洛夫等欧洲名将的成名舞台。",
    cycle: "每 2 年",
  },
  {
    name: "世界青少年锦标赛",
    desc: "面向 20 岁以下（U19）与更年轻组别的国际赛事，是巨星的摇篮。",
    cycle: "每年",
  },
  {
    name: "中国乒乓球俱乐部超级联赛",
    desc: "世界最高水平的俱乐部联赛，几乎所有中国主力与众多外援都曾参赛。",
    cycle: "每年",
  },
  {
    name: "德国乒乓球甲级联赛",
    desc: "欧洲最强的职业联赛，波尔长期效力；2025 年樊振东加盟萨尔布吕肯引发全球关注。",
    cycle: "每年",
  },
];

/** 中国队历届奥运会战绩（金银铜牌数）
 *  注意：金牌数与冠军名单可交叉验证；银、铜牌数为整理值，发布前请对照权威来源复核。
 */
export const chinaOlympicResults: ChinaOlympicRow[] = [
  { games: "1988 汉城", host: "韩国", gold: 2, silver: 2, bronze: 1 },
  { games: "1992 巴塞罗那", host: "西班牙", gold: 3, silver: 1, bronze: 1 },
  { games: "1996 亚特兰大", host: "美国", gold: 4, silver: 2, bronze: 0 },
  { games: "2000 悉尼", host: "澳大利亚", gold: 4, silver: 3, bronze: 1 },
  { games: "2004 雅典", host: "希腊", gold: 3, silver: 1, bronze: 2 },
  { games: "2008 北京", host: "中国", gold: 4, silver: 2, bronze: 2 },
  { games: "2012 伦敦", host: "英国", gold: 4, silver: 2, bronze: 0 },
  { games: "2016 里约", host: "巴西", gold: 4, silver: 2, bronze: 0 },
  { games: "2020 东京", host: "日本", gold: 4, silver: 2, bronze: 0 },
  { games: "2024 巴黎", host: "法国", gold: 5, silver: 1, bronze: 0 },
];
