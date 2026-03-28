"use client";

import type { Module } from "@/content/learn/modules";
import { ModuleCard } from "./ModuleCard";

interface ModuleGridProps {
  modules: Module[];
}

export function ModuleGrid({ modules }: ModuleGridProps) {
  if (modules.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          color: "var(--muted)",
        }}
      >
        <p style={{ fontSize: "14px", fontFamily: "'Nunito', sans-serif" }}>
          No modules found in this category.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px",
        marginTop: "32px",
      }}
    >
      {modules.map((module) => (
        <ModuleCard key={module.slug} module={module} />
      ))}
    </div>
  );
}
