import type { ReactNode } from "react";
import { NdebelePattern } from "./NdebelePattern";

type Props = {
  left: ReactNode;
  right: ReactNode;
};

export function HeroPanel({ left, right }: Props) {
  return (
    <section style={{
      position: "relative",
      background: "var(--bg)",
      overflow: "hidden",
      padding: "96px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <NdebelePattern opacity={0.12} />
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}>
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </section>
  );
}
