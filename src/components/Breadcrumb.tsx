"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const toolNames: Record<string, string> = {
  cgt: "CGT Calculator",
  classifier: "Trader Classifier",
  carf: "CARF Checker",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segment = pathname.split("/").pop() ?? "";
  // On /tax-tools index, segment is "tax-tools" — show no child
  const toolName = segment === "tax-tools" ? "" : (toolNames[segment] ?? segment);

  return (
    <div
      style={{
        height: 48,
        padding: "0 40px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <span style={{ color: "var(--muted)", fontSize: 12 }}>›</span>
      <Link
        href="/tax-tools"
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        Tax Tools
      </Link>
      {toolName && (
        <>
          <span style={{ color: "var(--muted)", fontSize: 12 }}>›</span>
          <span
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 12,
              fontWeight: 800,
              color: "var(--white)",
            }}
          >
            {toolName}
          </span>
        </>
      )}
    </div>
  );
}
