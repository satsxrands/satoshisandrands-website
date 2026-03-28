"use client";

import { useState } from "react";

const TAX_BRACKETS = [
  { rate: 0.18, label: "18%" },
  { rate: 0.26, label: "26%" },
  { rate: 0.31, label: "31%" },
  { rate: 0.36, label: "36%" },
  { rate: 0.39, label: "39%" },
  { rate: 0.41, label: "41%" },
  { rate: 0.45, label: "45%" },
];

const ANNUAL_EXCLUSION = 50000;
const INCLUSION_RATE = 0.4;

function fmt(n: number) {
  return "R" + Math.abs(n).toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function pct(n: number) {
  return (n * 100).toFixed(1) + "%";
}

export default function CGTPage() {
  const [asset, setAsset] = useState("BTC");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [units, setUnits] = useState("");
  const [classification, setClassification] = useState<"investor" | "trader">("investor");
  const [bracket, setBracket] = useState(0.36);

  const buy = parseFloat(buyPrice) || 0;
  const sell = parseFloat(sellPrice) || 0;
  const qty = parseFloat(units) || 0;

  const grossGain = (sell - buy) * qty;
  const isGain = grossGain >= 0;

  const afterExclusion =
    classification === "investor" ? Math.max(0, grossGain - ANNUAL_EXCLUSION) : grossGain;
  const taxableAmount =
    classification === "investor" ? afterExclusion * INCLUSION_RATE : Math.max(0, grossGain);
  const taxOwed = taxableAmount * bracket;
  const effectiveRate = grossGain > 0 ? taxOwed / grossGain : 0;

  const hasResult = buy > 0 && sell > 0 && qty > 0;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "10px 14px",
    color: "var(--white)",
    fontFamily: "var(--font-space-mono), monospace",
    fontSize: 14,
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-nunito), sans-serif",
    fontSize: 12,
    fontWeight: 800,
    color: "var(--muted)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 6,
  };

  return (
    <div className="tool-page" style={{ padding: "40px", maxWidth: 720, width: "100%" }}>
      <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: 16, marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: 36,
            color: "var(--white)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          CGT CALCULATOR
        </h1>
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          Calculate your South African capital gains tax on crypto. Uses SARS 2026/27 brackets.
        </p>
      </div>

      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 28,
          marginBottom: 24,
        }}
      >
        <div className="input-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Asset */}
          <div>
            <label style={labelStyle}>Asset</label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              {["BTC", "ETH", "SOL", "Other"].map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Units */}
          <div>
            <label style={labelStyle}>Number of Units</label>
            <input
              type="number"
              placeholder="e.g. 0.5"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Buy price */}
          <div>
            <label style={labelStyle}>Buy Price (ZAR per unit)</label>
            <input
              type="number"
              placeholder="e.g. 850000"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Sell price */}
          <div>
            <label style={labelStyle}>Sell Price (ZAR per unit)</label>
            <input
              type="number"
              placeholder="e.g. 1200000"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Classification toggle */}
        <div style={{ marginTop: 24 }}>
          <label style={labelStyle}>I am classified as a...</label>
          <div style={{ display: "flex", gap: 12 }}>
            {(["investor", "trader"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setClassification(c)}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  borderRadius: 8,
                  border: `1px solid ${classification === c ? "var(--gold)" : "var(--border)"}`,
                  background: classification === c ? "rgba(245,166,35,0.1)" : "transparent",
                  color: classification === c ? "var(--gold)" : "var(--muted)",
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 13,
                  fontWeight: 800,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 150ms",
                }}
              >
                {c === "investor" ? "Investor (CGT)" : "Trader (Income Tax)"}
              </button>
            ))}
          </div>
        </div>

        {/* Marginal tax rate */}
        <div style={{ marginTop: 20 }}>
          <label style={labelStyle}>Marginal Tax Rate</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TAX_BRACKETS.map((b) => (
              <button
                key={b.rate}
                onClick={() => setBracket(b.rate)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  border: `1px solid ${bracket === b.rate ? "var(--gold)" : "var(--border)"}`,
                  background: bracket === b.rate ? "rgba(245,166,35,0.1)" : "transparent",
                  color: bracket === b.rate ? "var(--gold)" : "var(--muted)",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 150ms",
                }}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {hasResult && (
        <div
          style={{
            background: "var(--card)",
            border: `1px solid ${isGain ? "rgba(6,214,160,0.3)" : "rgba(239,35,60,0.3)"}`,
            borderRadius: 12,
            padding: 28,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: 20,
              letterSpacing: "0.08em",
              color: "var(--muted)",
              marginBottom: 20,
            }}
          >
            RESULTS
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            <ResultRow
              label="Gross Gain / Loss"
              value={fmt(grossGain)}
              prefix={grossGain >= 0 ? "+" : "-"}
              color={isGain ? "var(--green)" : "var(--red)"}
            />
            {classification === "investor" && grossGain > 0 && (
              <ResultRow
                label={`After R50,000 Annual Exclusion`}
                value={fmt(afterExclusion)}
                color="var(--white)"
              />
            )}
            <ResultRow
              label={classification === "investor" ? "Taxable Portion (40% inclusion)" : "Taxable Amount (100%)"}
              value={fmt(taxableAmount)}
              color="var(--white)"
            />
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 12, marginTop: 4 }}>
              <ResultRow
                label={`Estimated Tax @ ${pct(bracket)} marginal rate`}
                value={fmt(taxOwed)}
                color={isGain ? "var(--red)" : "var(--green)"}
                large
              />
              <ResultRow
                label="Effective Tax Rate on Gain"
                value={pct(effectiveRate)}
                color="var(--muted)"
              />
            </div>
          </div>

          <p
            style={{
              marginTop: 20,
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--muted)",
              padding: "10px 14px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 6,
            }}
          >
            Estimate only. Does not account for base cost adjustments, fees, or multiple disposals. Not tax advice — consult a registered tax practitioner.
          </p>
        </div>
      )}
    </div>
  );
}

function ResultRow({
  label,
  value,
  prefix = "",
  color,
  large,
}: {
  label: string;
  value: string;
  prefix?: string;
  color: string;
  large?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <span
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontSize: large ? 14 : 13,
          fontWeight: 700,
          color: "var(--muted)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: large ? 18 : 14,
          fontWeight: 700,
          color,
        }}
      >
        {prefix}{value}
      </span>
    </div>
  );
}
