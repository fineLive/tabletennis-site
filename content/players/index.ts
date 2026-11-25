import type { Player } from "../schema";
import { chinaMen } from "./china-men";
import { chinaWomen } from "./china-women";
import { international } from "./international";

/** 全部选手数据。新增选手：在对应分组文件中追加一条记录即可。 */
export const players: Player[] = [
  ...chinaMen,
  ...chinaWomen,
  ...international,
];
