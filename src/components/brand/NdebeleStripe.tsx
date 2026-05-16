"use client";

import { useId } from "react";

type Props = {
  height?: number;
  accent?: string;
  accent2?: string;
  accent3?: string;
};

export function NdebeleStripe({
  height = 14,
  accent = "var(--gold)",
  accent2 = "var(--red)",
  accent3 = "var(--accent-orange, #E07A2C)",
}: Props) {
  const reactId = useId();
  const patternId = `ndebele-stripe-${reactId.replace(/:/g, "")}`;
  return (
    <div
      aria-hidden="true"
      style={{ width: "100%", height, background: "var(--bg)", lineHeight: 0 }}
    >
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 96 ${height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="96" height={height} patternUnits="userSpaceOnUse">
            <rect width="96" height={height} fill="var(--bg)" />
            <path d="M0 0 L48 7 L96 0 L96 4 L48 11 L0 4 Z" fill={accent} />
            <path d="M0 8 L24 13 L48 8 L72 13 L96 8 L96 11 L72 14 L48 11 L24 14 L0 11 Z" fill={accent2} />
            <path d="M6 11 L12 8 L18 11 L12 14 Z" fill={accent3} />
            <path d="M30 11 L36 8 L42 11 L36 14 Z" fill={accent3} />
            <path d="M54 11 L60 8 L66 11 L60 14 Z" fill={accent3} />
            <path d="M78 11 L84 8 L90 11 L84 14 Z" fill={accent3} />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
