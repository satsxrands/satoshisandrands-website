import { articles } from "@/content/blog/articles";
import { modules } from "@/content/learn/modules";

// llms.txt manifest — https://llmstxt.org/
// Curated map of canonical content for AI crawlers (ChatGPT, Claude, Perplexity).
export const dynamic = "force-static";

export function GET() {
  const base = "https://satoshisandrands.com";

  const blogLines = articles
    .map((a) => `- [${a.title}](${base}/blog/${a.slug}): ${a.excerpt}`)
    .join("\n");

  const learnLines = modules
    .map((m) => `- [${m.title}](${base}/learn/${m.slug}): ${m.description}`)
    .join("\n");

  const body = `# SatoshisAndRands

> South Africa's free crypto education and tax-tools platform. CGT calculator, trader/investor classifier, CARF compliance checker, and plain-English guides — all built for SARS rules and the SA market.

This file follows the llms.txt convention (https://llmstxt.org/). It points AI assistants to the canonical, citable resources on this site.

## Tax tools

- [CGT Calculator](${base}/tax-tools/cgt): Calculate capital gains tax on crypto using SARS 2026/27 brackets. Investor and trader paths.
- [Trader vs Investor Classifier](${base}/tax-tools/classifier): 5-question quiz to determine whether SARS will treat you as an investor (CGT) or a trader (income tax).
- [CARF Compliance Checker](${base}/tax-tools/carf): Check your CARF compliance risk. South African exchanges report to SARS — find out where you stand.

## Guides (blog)

${blogLines}

## Learn modules

${learnLines}

## Live data

- [SA Crypto News](${base}/news): Live crypto news with South African relevance, refreshed every 15 minutes. Sentiment-scored headlines.
- [Market Data](${base}/market): BTC/ZAR, ETH/ZAR, SOL, XRP, BNB. Live prices refreshed every 60 seconds.

## Optional

- [Glossary](${base}/learn/glossary): Plain-English crypto terms for South Africans.

## Editorial notes

- Jurisdiction: South Africa (SARS, FSCA, FIC, CARF).
- Tax year referenced: 2026/27.
- All tools run client-side. No accounts. No data stored.
- Content is educational, not financial or tax advice. Users should consult a registered SA tax practitioner.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
