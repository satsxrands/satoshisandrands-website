"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: "sa_exchange",
    question: "Do you hold crypto on a SA exchange (Luno, VALR, AltCoinTrader)?",
    yes_risk: 1,
    no_risk: 0,
    yes_note: "SA exchanges now report to SARS automatically under CARF.",
    no_note: "Good to confirm you have no SA exchange exposure.",
  },
  {
    id: "intl_exchange",
    question: "Do you hold crypto on international exchanges (Binance, Kraken, Coinbase, etc.)?",
    yes_risk: 2,
    no_risk: 0,
    yes_note: "CARF covers 120+ countries. International exchanges reporting SA residents is expanding rapidly.",
    no_note: "Lower CARF exposure, but SARS may still receive data via treaty exchange.",
  },
  {
    id: "declared",
    question: "Have you declared crypto gains to SARS before (on your ITR12)?",
    yes_risk: 0,
    no_risk: 3,
    yes_note: "You're ahead of most SA crypto holders. Keep your records consistent.",
    no_note: "SARS expects disclosure of all crypto gains since 2018. Undisclosed gains are a compliance risk.",
  },
  {
    id: "records",
    question: "Do you have records of all your buy/sell transactions?",
    yes_risk: 0,
    no_risk: 2,
    yes_note: "Solid position. SARS can request records going back 5 years.",
    no_note: "Start downloading transaction history from your exchanges now — SARS can request this.",
  },
  {
    id: "cost_base",
    question: "Do you know your cost base (purchase price in ZAR) for each holding?",
    yes_risk: 0,
    no_risk: 2,
    yes_note: "Essential for accurate CGT calculation. Well done.",
    no_note: "Without cost base, SARS may use zero as your base cost, maximising your taxable gain.",
  },
  {
    id: "vdp",
    question: "Have you heard of SARS' Voluntary Disclosure Programme (VDP)?",
    yes_risk: 0,
    no_risk: 1,
    yes_note: "VDP allows you to come forward voluntarily — penalty relief may apply.",
    no_note: "VDP is a key tool for correcting past non-disclosure. Look into it if you have undeclared gains.",
  },
  {
    id: "auto_report",
    question: "Did you know SA exchanges now automatically report to SARS?",
    yes_risk: 0,
    no_risk: 1,
    yes_note: "Awareness is step one. Your exchange data is already visible to SARS.",
    no_note: "Luno and VALR submit user transaction data to SARS. Assume SARS has your history.",
  },
];

type Answers = Record<string, boolean>;

function getResult(answers: Answers) {
  const answered = Object.keys(answers).length;
  if (answered < QUESTIONS.length) return null;

  let score = 0;
  for (const q of QUESTIONS) {
    const ans = answers[q.id];
    score += ans ? q.yes_risk : q.no_risk;
  }

  if (score <= 2) {
    return {
      level: "Low Risk",
      icon: "🟢",
      color: "var(--green)",
      summary: "Your CARF compliance position looks solid. Keep your records current and continue declaring on your ITR12.",
      actions: [
        "Continue declaring crypto gains on your annual ITR12",
        "Keep transaction records for at least 5 years",
        "Review your cost base annually — ZAR weakening means ZAR gains even if crypto prices drop",
      ],
    };
  }
  if (score <= 5) {
    return {
      level: "Medium Risk",
      icon: "🟡",
      color: "var(--gold)",
      summary: "There are gaps in your compliance position that CARF reporting could expose. Take action before SARS comes to you.",
      actions: [
        "Download full transaction history from all exchanges now",
        "Calculate your cost base in ZAR for all holdings",
        "Consider using a crypto tax tool (Koinly, CoinTracker) to auto-calculate",
        "If you have undeclared gains, research the VDP — voluntary disclosure attracts lower penalties",
        "Consult a tax practitioner before filing your next ITR12",
      ],
    };
  }
  return {
    level: "High Risk",
    icon: "🔴",
    color: "var(--red)",
    summary: "Your profile suggests material CARF compliance risk. SARS likely already has data on your exchange activity. Act urgently.",
    actions: [
      "Do not wait for SARS to contact you — voluntary disclosure is far better than audit",
      "Apply for the SARS Voluntary Disclosure Programme (VDP) immediately",
      "Engage a registered tax practitioner with crypto experience",
      "Reconstruct your full trade history — exchanges can provide statements",
      "Calculate all gains from 2018 to present using ZAR values at trade date",
      "SARS VDP line: 0800 00 7277 or visit sars.gov.za/VDP",
    ],
  };
}

export default function CARFPage() {
  const [answers, setAnswers] = useState<Answers>({});

  const answered = Object.keys(answers).length;
  const result = getResult(answers);

  return (
    <div className="tool-page" style={{ padding: "40px", maxWidth: 680, width: "100%" }}>
      <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 16, marginBottom: 32 }}>
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
          CARF COMPLIANCE CHECKER
        </h1>
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          The Crypto-Asset Reporting Framework is live. SA exchanges report to SARS. Check your exposure in 2 minutes.
        </p>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        {QUESTIONS.map((q, qi) => {
          const selected = answers[q.id];
          const isAnswered = selected !== undefined;
          const note = isAnswered ? (selected ? q.yes_note : q.no_note) : null;

          return (
            <div
              key={q.id}
              style={{
                background: "var(--card)",
                border: `1px solid ${isAnswered ? (selected && q.yes_risk > 1 ? "rgba(239,35,60,0.3)" : "rgba(6,214,160,0.2)") : "var(--border)"}`,
                borderRadius: 12,
                padding: 20,
                transition: "border-color 200ms",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                <p
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 14,
                    fontWeight: 900,
                    color: "var(--white)",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: "var(--muted)", marginRight: 8, fontWeight: 600 }}>{qi + 1}.</span>
                  {q.question}
                </p>
                {isAnswered && (
                  <span style={{ fontSize: 18, flexShrink: 0 }}>
                    {selected && q.yes_risk > 1 ? "⚠️" : "✅"}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {(["Yes", "No"] as const).map((opt) => {
                  const val = opt === "Yes";
                  const isSel = selected === val;
                  return (
                    <button
                      key={opt}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: val }))}
                      style={{
                        padding: "8px 24px",
                        borderRadius: 8,
                        border: `1px solid ${isSel ? (val && q.yes_risk > 1 ? "var(--red)" : "var(--green)") : "var(--border)"}`,
                        background: isSel ? (val && q.yes_risk > 1 ? "rgba(239,35,60,0.1)" : "rgba(6,214,160,0.1)") : "transparent",
                        color: isSel ? "var(--white)" : "var(--muted)",
                        fontFamily: "var(--font-nunito), sans-serif",
                        fontSize: 13,
                        fontWeight: 800,
                        cursor: "pointer",
                        transition: "all 150ms",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {note && (
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--muted)",
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {note}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress */}
      {answered < QUESTIONS.length && answered > 0 && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>
            {QUESTIONS.length - answered} question{QUESTIONS.length - answered !== 1 ? "s" : ""} remaining…
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div
          style={{
            marginTop: 28,
            background: "var(--card)",
            border: `1px solid ${result.color}44`,
            borderRadius: 12,
            padding: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <span style={{ fontSize: 36 }}>{result.icon}</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: 28,
                  color: result.color,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                {result.level}
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "var(--white)",
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            {result.summary}
          </p>

          <div>
            <p
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontSize: 11,
                fontWeight: 900,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Action Items
            </p>
            <ul style={{ listStyle: "none", display: "grid", gap: 8 }}>
              {result.actions.map((action, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--white)",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: result.color, flexShrink: 0 }}>→</span>
                  {action}
                </li>
              ))}
            </ul>
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
            ⚠️ Not legal or tax advice. Risk levels are indicative only. Consult a registered tax practitioner for your specific situation.
          </p>
        </div>
      )}
    </div>
  );
}
