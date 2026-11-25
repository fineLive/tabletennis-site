"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { olympicGoldTrend } from "@/lib/content";

/** 中国队历届奥运会乒乓球金牌走势 */
export function OlympicGoldChart() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";
  const barColor = dark ? "#e5383b" : "#c1121f";
  const gridColor = dark ? "#2e2b26" : "#e3ded1";
  const tickColor = dark ? "#a29a8c" : "#6e685c";

  const data = olympicGoldTrend.map((d) => ({
    ...d,
    year: d.games.slice(0, 4),
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke={gridColor} vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fill: tickColor }}
            tickLine={false}
            axisLine={{ stroke: gridColor }}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 12, fill: tickColor }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(193,18,31,0.06)" }}
            contentStyle={{
              backgroundColor: dark ? "#1b1917" : "#fffefb",
              border: `1px solid ${gridColor}`,
              borderRadius: 10,
              fontSize: 13,
              color: dark ? "#eceae3" : "#1b1917",
            }}
            formatter={(value: unknown) => [`${String(value)} 枚`, "金牌"]}
          />
          <Bar
            dataKey="gold"
            fill={barColor}
            radius={[4, 4, 0, 0]}
            maxBarSize={44}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
