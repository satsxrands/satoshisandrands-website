"use client";

import Link from "next/link";
import type { Module } from "@/content/learn/modules";

const categoryColors: Record<Module["category"], string> = {
  Security: "#EF233C", // red
  "Crypto 101": "#06D6A0", // green
  Trading: "#F5A623", // gold
  Tax: "#F5A623", // gold
};

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const borderColor = categoryColors[module.category];

  return (
    <Link href={`/learn/${module.slug}`}>
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderLeft: `3px solid ${borderColor}`,
          borderRadius: "12px",
          padding: "24px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = borderColor;
          el.style.backgroundColor = "#202020";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.backgroundColor = "var(--card)";
        }}
      >
        {/* Category Tag */}
        <div
          style={{
            display: "inline-flex",
            width: "fit-content",
            fontSize: "11px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.5px",
            color: borderColor,
            textTransform: "uppercase",
          }}
        >
          {module.category}
        </div>

        {/* Title */}
        <h3
          style={{
            margin: 0,
            fontSize: "20px",
            fontFamily: "'Bebas Neue', sans-serif",
            color: "var(--white)",
            letterSpacing: "0.5px",
            lineHeight: 1.2,
          }}
        >
          {module.title}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontFamily: "'Nunito', sans-serif",
            color: "var(--muted)",
            lineHeight: 1.5,
            flexGrow: 1,
          }}
        >
          {module.description}
        </p>

        {/* Metadata Footer */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "12px",
            fontFamily: "'Space Mono', monospace",
            color: "var(--muted)",
            borderTop: "1px solid var(--border)",
            paddingTop: "12px",
            marginTop: "auto",
          }}
        >
          <span>{module.lessons.length} lessons</span>
          <span>·</span>
          <span>{module.estimatedTime} min</span>
          <span>·</span>
          <span style={{ textTransform: "capitalize" }}>{module.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
