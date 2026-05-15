import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  accent: string;
  title: string;
  desc: string;
};

export function ToolCard({ href, icon, accent, title, desc }: Props) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div style={{
        position: "relative",
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "var(--radius-card)",
        padding: "24px 20px 20px",
        boxShadow: "var(--shadow-card)",
        transition: `border-color var(--motion-base) var(--ease-standard), transform var(--motion-fast) var(--ease-standard)`,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: accent,
        }} />
        <div style={{ marginBottom: 16 }}>{icon}</div>
        <div style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: "0.04em", color: "var(--white)" }}>
          {title}
        </div>
        <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 13, lineHeight: 1.5 }}>
          {desc}
        </div>
      </div>
    </Link>
  );
}
