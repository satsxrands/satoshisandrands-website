"use client";

import type { Module } from "@/content/learn/modules";
import { ModuleCard } from "./ModuleCard";

interface RelatedModulesProps {
  module: Module;
  allModules: Module[];
}

export function RelatedModules({ module, allModules }: RelatedModulesProps) {
  // Get related modules (same category, exclude current)
  const relatedModules = allModules
    .filter((m) => m.category === module.category && m.slug !== module.slug)
    .slice(0, 5);

  if (relatedModules.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: "60px",
        paddingTop: "40px",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section Heading */}
      <h2
        style={{
          margin: "0 0 24px 0",
          fontSize: "22px",
          fontFamily: "'Bebas Neue', sans-serif",
          color: "var(--white)",
          letterSpacing: "0.5px",
        }}
      >
        Related in {module.category}
      </h2>

      {/* Grid of related modules */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {relatedModules.map((relatedModule) => (
          <ModuleCard key={relatedModule.slug} module={relatedModule} />
        ))}
      </div>
    </section>
  );
}
