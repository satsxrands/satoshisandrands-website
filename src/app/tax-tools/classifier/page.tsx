"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: "frequency",
    question: "How often do you buy/sell crypto?",
    options: [
      { label: "Rarely (a few times a year)", score: 0 },
      { label: "Monthly", score: 1 },
      { label: "Weekly", score: 2 },
      { label: "Daily or more", score: 3 },
    ],
  },
  {
    id: "hold",
    question: "How long do you typically hold before selling?",
    options: [
      { label: "2+ years", score: 0 },
      { label: "6–24 months", score: 1 },
      { label: "1–6 months", score: 2 },
      { label: "Days or weeks", score: 3 },
    ],
  },
  {
    id: "goal",
    question: "What is your main goal?",
    options: [
      { label: "Long-term wealth building", score: 0 },
      { label: "Mix of growth and income", score: 1 },
      { label: "Regular income from trading", score: 2 },
    ],
  },
  {
    id: "strategy",
    question: "Do you use trading strategies, signals, or bots?",
    options: [
      { label: "No — I buy and hold", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Yes, actively", score: 3 },
    ],
  },
  {
    id: "income",
    question: "What % of your income comes from crypto trading?",
    options: [
      { label: "0% — crypto is a side investment", score: 0 },
      { label: "Less than 25%", score: 1 },
      { label: "25–75%", score: 2 },
      { label: "More than 75%", score: 3 },
    ],
  },
];

type Answers = Record<string, number>;

function getResult(score: number, answered: number) {
  if (answered < QUESTIONS.length) return null;
  if (score <= 3) {
    return {
      verdict: "Likely Investor",
      tag: "CGT Applies",
      color: "var(--green)",
      icon: "📈",
      description:
        "SARS will likely treat your crypto gains as capital in nature. The R50,000 annual exclusion applies, and only 40% of your net gain is included in taxable income. Max effective rate: 18%.",
    };
  }
  if (score <= 7) {
    return {
      verdict: "Borderline",
      tag: "Consult a Professional",
      color: "var(--gold)",
      icon: "⚖️",
      description:
        "Your profile shows mixed signals. SARS could classify you as either investor or trader depending on intent and conduct. A registered tax practitioner can help you document your position before filing.",
    };
  }
  return {
    verdict: "Likely Trader",
    tag: "Income Tax Applies",
    color: "var(--red)",
    icon: "⚡",
    description:
      "SARS will likely treat your crypto gains as revenue income. The R50,000 CGT exclusion does NOT apply. All gains are taxable at your full marginal rate (up to 45%). Consider professional advice and proper record-keeping.",
  };
}

export default function ClassifierPage() {
  const [answers, setAnswers] = useState<Answers>({});

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const answered = Object.keys(answers).length;
  const result = getResult(totalScore, answered);

  const optionStyle = (selected: boolean, color: string): React.CSSProperties => ({
    display: "block",
    width: "100%",
    padding: "12px 16px",
    borderRadius: 8,
    border: `1px solid ${selected ? color : "var(--border)"}`,
    background: selected ? `${color}14` : "transparent",
    color: selected ? "var(--white)" : "var(--muted)",
    fontFamily: "var(--font-nunito), sans-serif",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
    textAlign: "left",
    transition: "all 150ms",
    marginBottom: 8,
  });

  return (
    <div className="tool-page" style={{ padding: "40px", maxWidth: 680, width: "100%" }}>
      <div style={{ borderLeft: "3px solid var(--green)", paddingLeft: 16, marginBottom: 32 }}>
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
          TRADER VS INVESTOR
        </h1>
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          5 questions to help you understand how SARS is likely to classify your crypto activity.
        </p>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        {QUESTIONS.map((q, qi) => {
          const selected = answers[q.id];
          const isAnswered = selected !== undefined;
          return (
            <div
              key={q.id}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                opacity: qi > 0 && answers[QUESTIONS[qi - 1].id] === undefined ? 0.4 : 1,
                transition: "opacity 200ms",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 14,
                  fontWeight: 900,
                  color: "var(--white)",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: isAnswered ? "var(--green)" : "var(--border)",
                    color: isAnswered ? "#000" : "var(--muted)",
                    fontSize: 11,
                    fontWeight: 900,
                    lineHeight: "22px",
                    textAlign: "center",
                    marginRight: 10,
                    transition: "all 200ms",
                  }}
                >
                  {qi + 1}
                </span>
                {q.question}
              </p>
              <div>
                {q.options.map((opt) => {
                  const isSel = selected === opt.score;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.score }))}
                      style={optionStyle(isSel, "var(--green)")}
                    >
                      {isSel ? "✓ " : ""}{opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

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
                {result.verdict}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  color: result.color,
                  opacity: 0.7,
                  letterSpacing: "0.08em",
                }}
              >
                {result.tag}
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
              marginBottom: 16,
            }}
          >
            {result.description}
          </p>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--muted)",
              padding: "10px 14px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 6,
            }}
          >
            ⚠️ This is a guide only — not a legal determination. SARS assesses each case individually based on facts and intent.
          </p>
        </div>
      )}

      {answered > 0 && !result && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>
            {QUESTIONS.length - answered} question{QUESTIONS.length - answered !== 1 ? "s" : ""} remaining…
          </p>
        </div>
      )}
    </div>
  );
}
