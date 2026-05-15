type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, align = "center" }: Props) {
  return (
    <header style={{ textAlign: align, marginBottom: 32 }}>
      <div style={{
        display: "inline-block",
        fontFamily: "var(--font-space-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--gold)",
        border: "1px solid var(--card-border)",
        borderRadius: "var(--radius-pill)",
        padding: "4px 12px",
      }}>
        {eyebrow}
      </div>
      <h2 style={{
        fontFamily: "var(--font-bebas)",
        fontSize: 40,
        letterSpacing: "0.03em",
        marginTop: 12,
        color: "var(--white)",
      }}>
        {title}
      </h2>
    </header>
  );
}
