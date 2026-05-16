type Props = {
  size?: "sm" | "md" | "xl" | "hero";
  stacked?: boolean;
};

const SIZE_PX = { sm: 24, md: 48, xl: 96, hero: 156 } as const;

export function BrandWordmark({ size = "xl", stacked = true }: Props) {
  const px = SIZE_PX[size];
  if (stacked) {
    return (
      <div style={{
        fontFamily: "var(--font-bebas)",
        color: "var(--white)",
        lineHeight: 0.88,
        letterSpacing: "0.01em",
        display: "inline-flex",
        flexDirection: "column",
      }}>
        <span style={{ fontSize: px, color: "var(--gold)" }}>SATOSHIS</span>
        <span style={{ fontSize: px, color: "var(--gold)" }}>&amp;</span>
        <span style={{ fontSize: px }}>RANDS</span>
      </div>
    );
  }
  return (
    <div style={{
      fontFamily: "var(--font-bebas)",
      color: "var(--white)",
      lineHeight: 0.9,
      letterSpacing: "0.01em",
      display: "inline-flex",
      flexDirection: "row",
      gap: 12,
    }}>
      <span style={{ fontSize: px, color: "var(--gold)" }}>SATOSHIS &amp;</span>
      <span style={{ fontSize: px }}>RANDS</span>
    </div>
  );
}
