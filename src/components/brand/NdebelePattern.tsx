"use client";

import { useId } from "react";

type Props = {
  opacity?: number;
  accent?: string;
};

export function NdebelePattern({ opacity = 0.12, accent = "var(--gold)" }: Props) {
  const reactId = useId();
  const patternId = `ndebele-tile-${reactId.replace(/:/g, "")}`;
  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="96" height="96" patternUnits="userSpaceOnUse">
          {/* Stacked Ndebele-inspired geometric motif. Triangles + chevrons + step blocks. */}
          <rect width="96" height="96" fill="transparent" />
          <path d="M0 0 L48 24 L96 0 L96 12 L48 36 L0 12 Z" fill={accent} />
          <path d="M0 24 L24 36 L48 24 L72 36 L96 24 L96 30 L72 42 L48 30 L24 42 L0 30 Z" fill={accent} />
          <rect x="12" y="48" width="12" height="12" fill={accent} />
          <rect x="36" y="48" width="12" height="12" fill={accent} />
          <rect x="60" y="48" width="12" height="12" fill={accent} />
          <rect x="84" y="48" width="12" height="12" fill={accent} />
          <rect x="0" y="48" width="12" height="12" fill={accent} />
          <path d="M0 72 L12 84 L24 72 L36 84 L48 72 L60 84 L72 72 L84 84 L96 72 L96 78 L84 90 L72 78 L60 90 L48 78 L36 90 L24 78 L12 90 L0 78 Z" fill={accent} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
