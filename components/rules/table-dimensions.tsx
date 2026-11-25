/** 球台尺寸示意图：俯视图 + 侧视图 */
export function TableDimensions() {
  return (
    <svg
      viewBox="0 0 640 470"
      className="w-full max-w-2xl"
      role="img"
      aria-label="乒乓球台尺寸示意图：长 2.74 米、宽 1.525 米、台面高 0.76 米、网高 15.25 厘米"
    >
      {/* ===== 俯视图 ===== */}
      <g>
        <rect
          x="120"
          y="30"
          width="400"
          height="222"
          rx="4"
          className="fill-card stroke-foreground"
          strokeWidth="2.5"
        />
        {/* 边线 */}
        <rect
          x="124"
          y="34"
          width="392"
          height="214"
          fill="none"
          className="stroke-foreground/25"
          strokeWidth="1.5"
        />
        {/* 球网（垂直于长边，位于长的中点） */}
        <line
          x1="320"
          y1="30"
          x2="320"
          y2="252"
          className="stroke-primary"
          strokeWidth="4"
        />
        {/* 中线（双打发球区） */}
        <line
          x1="124"
          y1="141"
          x2="516"
          y2="141"
          className="stroke-foreground/30"
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        {/* 长 标注 */}
        <line
          x1="120"
          y1="272"
          x2="520"
          y2="272"
          className="stroke-muted-foreground"
          strokeWidth="1"
        />
        <line x1="120" y1="266" x2="120" y2="278" className="stroke-muted-foreground" />
        <line x1="520" y1="266" x2="520" y2="278" className="stroke-muted-foreground" />
        <text
          x="320"
          y="290"
          textAnchor="middle"
          className="fill-foreground font-mono"
          fontSize="14"
        >
          长 2.74 米
        </text>
        {/* 宽 标注 */}
        <line
          x1="540"
          y1="30"
          x2="540"
          y2="252"
          className="stroke-muted-foreground"
          strokeWidth="1"
        />
        <line x1="534" y1="30" x2="546" y2="30" className="stroke-muted-foreground" />
        <line x1="534" y1="252" x2="546" y2="252" className="stroke-muted-foreground" />
        <text
          x="556"
          y="145"
          className="fill-foreground font-mono"
          fontSize="14"
          transform="rotate(90 556 145)"
          textAnchor="middle"
        >
          宽 1.525 米
        </text>
        {/* 网标注 */}
        <text
          x="320"
          y="20"
          textAnchor="middle"
          className="fill-primary font-mono"
          fontSize="13"
        >
          球网（将台面分为两个半区）
        </text>
      </g>

      {/* ===== 侧视图 ===== */}
      <g transform="translate(0 60)">
        <text
          x="320"
          y="300"
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          fontSize="12"
        >
          侧视图
        </text>
        {/* 台面 */}
        <rect
          x="160"
          y="330"
          width="320"
          height="10"
          rx="2"
          className="fill-card stroke-foreground"
          strokeWidth="2"
        />
        {/* 球网 */}
        <rect
          x="318"
          y="315"
          width="4"
          height="15"
          className="fill-primary"
        />
        {/* 台腿 */}
        <rect x="190" y="340" width="8" height="34" className="fill-foreground/30" />
        <rect x="442" y="340" width="8" height="34" className="fill-foreground/30" />
        {/* 地面 */}
        <line
          x1="120"
          y1="374"
          x2="520"
          y2="374"
          className="stroke-muted-foreground"
          strokeWidth="1.5"
        />
        {/* 网高标注 */}
        <line
          x1="352"
          y1="315"
          x2="352"
          y2="330"
          className="stroke-primary"
          strokeWidth="1"
        />
        <text
          x="362"
          y="326"
          className="fill-primary font-mono"
          fontSize="12"
        >
          网高 15.25 厘米
        </text>
        {/* 台高标注 */}
        <line
          x1="130"
          y1="330"
          x2="130"
          y2="374"
          className="stroke-muted-foreground"
          strokeWidth="1"
        />
        <text
          x="118"
          y="356"
          textAnchor="end"
          className="fill-foreground font-mono"
          fontSize="12"
        >
          台高 0.76 米
        </text>
        {/* 球直径示意 */}
        <circle cx="430" cy="322" r="6" className="fill-accent" />
        <text
          x="444"
          y="326"
          className="fill-foreground font-mono"
          fontSize="12"
        >
          球 40 毫米
        </text>
      </g>
    </svg>
  );
}
