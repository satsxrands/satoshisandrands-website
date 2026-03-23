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
  const toolName = toolNames[segment] ?? segment;

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
        href="/tax-tools/cgt"
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
