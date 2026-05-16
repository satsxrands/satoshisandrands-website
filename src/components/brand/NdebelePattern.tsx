"use client";

import { useId } from "react";

type Props = {
  opacity?: number;
  accent?: string;
  accent2?: string;
  accent3?: string;
};

export function NdebelePattern({
  opacity = 0.7,
  accent = "var(--gold)",
  accent2 = "var(--red)",
  accent3 = "var(--accent-orange, #E07A2C)",
}: Props) {
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
          <rect width="96" height="96" fill="transparent" />
          {/* Top zigzag band — gold */}
          <path d="M0 0 L48 24 L96 0 L96 12 L48 36 L0 12 Z" fill={accent} />
          {/* Second zigzag — red */}
          <path d="M0 24 L24 36 L48 24 L72 36 L96 24 L96 30 L72 42 L48 30 L24 42 L0 30 Z" fill={accent2} />
          {/* Diamond row — alternating gold + orange */}
          <path d="M12 54 L18 48 L24 54 L18 60 Z" fill={accent} />
          <path d="M36 54 L42 48 L48 54 L42 60 Z" fill={accent3} />
          <path d="M60 54 L66 48 L72 54 L66 60 Z" fill={accent} />
          <path d="M84 54 L90 48 L96 54 L90 60 Z" fill={accent3} />
          <path d="M0 54 L6 48 L12 54 L6 60 Z" fill={accent3} />
          {/* Triangle row — red downward */}
          <path d="M6 66 L18 66 L12 78 Z" fill={accent2} />
          <path d="M30 66 L42 66 L36 78 Z" fill={accent2} />
          <path d="M54 66 L66 66 L60 78 Z" fill={accent2} />
          <path d="M78 66 L90 66 L84 78 Z" fill={accent2} />
          {/* Bottom zigzag — gold */}
          <path d="M0 78 L12 90 L24 78 L36 90 L48 78 L60 90 L72 78 L84 90 L96 78 L96 84 L84 96 L72 84 L60 96 L48 84 L36 96 L24 84 L12 96 L0 84 Z" fill={accent} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
