type Props = {
  size?: "sm" | "md" | "xl";
  stacked?: boolean;
};

const SIZE_PX = { sm: 24, md: 48, xl: 96 } as const;

export function BrandWordmark({ size = "xl", stacked = true }: Props) {
  const px = SIZE_PX[size];
  return (
    <div style={{
      fontFamily: "var(--font-bebas)",
      color: "var(--white)",
      lineHeight: 0.9,
      letterSpacing: "0.01em",
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      gap: stacked ? 0 : 12,
    }}>
      <span style={{ fontSize: px }}>SATOSHIS</span>
      <span style={{ fontSize: px, color: "var(--gold)" }}>{stacked ? "& RANDS" : "& RANDS"}</span>
    </div>
  );
}
