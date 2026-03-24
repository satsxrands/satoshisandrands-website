export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  content: string; // HTML string
}

export const articles: Article[] = [
  {
    slug: "carf-south-africa-explained",
    title: "CARF South Africa: What It Means for Every Crypto Holder",
    excerpt: "From 1 March 2026, SA exchanges automatically report your crypto transactions to SARS and 120 other countries. Here's exactly what they see and what you need to do.",
    date: "2026-03-01",
    readTime: 5,
    category: "CARF",
    content: `
<p>On 1 March 2026, South Africa became one of the first countries to implement the <strong>Crypto-Asset Reporting Framework (CARF)</strong> — the OECD's global standard for crypto tax transparency.</p>

<p>If you hold crypto on Luno, VALR, or any other South African exchange, your transaction data is now automatically reported to SARS. And through automatic information exchange agreements, that data is shared with tax authorities in over 120 countries.</p>

<h2>What SARS Can Now See</h2>

<p>Under CARF, SA exchanges must report the following to SARS for every user:</p>

<ul>
  <li>Your full name, ID number, and tax number</li>
  <li>Every buy and sell transaction — date, amount, and ZAR value</li>
  <li>Crypto-to-crypto swaps (ETH → BTC counts as a disposal)</li>
  <li>Transfers to and from external wallets</li>
  <li>Total ZAR value of holdings at year end</li>
</ul>

<p>This is automatic. You don't need to trigger it. Every SA-registered exchange is legally required to submit this data.</p>

<h2>What About International Exchanges?</h2>

<p>If you use Binance, Kraken, or Coinbase — exchanges registered outside SA — they are also subject to CARF reporting requirements in their home jurisdictions. Through bilateral automatic exchange agreements, SARS receives this data from participating countries.</p>

<p>The practical implication: SARS has a far more complete picture of your crypto activity than most people realise.</p>

<h2>What This Means for Your Tax Filing</h2>

<p>The ITR12 (individual tax return) has a dedicated section for crypto assets. You are required to declare:</p>

<ul>
  <li><strong>Capital gains</strong> — use source code field "Financial instruments — crypto asset(s)"</li>
  <li><strong>Trading income</strong> — use ITR12 source code <strong>4522</strong> if SARS classifies you as a trader</li>
</ul>

<p>SARS cross-references what you declare against what exchanges have reported. Discrepancies trigger audits and penalties.</p>

<h2>The SARS Annual Exclusion</h2>

<p>The good news: individuals get a <strong>R50,000 annual exclusion</strong> on capital gains (up from R40,000 in the 2025/26 year). Only 40% of gains above R50,000 are included in your taxable income.</p>

<p>So if your crypto gains for the year were R80,000:</p>
<ul>
  <li>Less R50,000 exclusion = R30,000 net gain</li>
  <li>40% inclusion = R12,000 added to taxable income</li>
  <li>At 36% marginal rate = R4,320 tax owed</li>
</ul>

<h2>The Voluntary Disclosure Programme (VDP)</h2>

<p>If you have undeclared crypto gains from prior years, the VDP allows you to come clean with 100% penalty relief (provided there was no intent to evade). Once SARS has your CARF data and audits you, this option closes.</p>

<p>The window to act proactively is now.</p>

<h2>Check Your CARF Compliance Risk</h2>

<p>Use our free <a href="/tax-tools/carf">CARF Compliance Checker</a> to assess where you stand — it takes under 2 minutes and tells you exactly what action to take.</p>
    `.trim(),
  },
  {
    slug: "declare-crypto-on-itr12",
    title: "How to Declare Crypto on Your ITR12 — Step by Step (2026)",
    excerpt: "SARS requires every South African to declare crypto gains on their ITR12. Here's exactly which fields to fill, which source codes to use, and how to calculate what you owe.",
    date: "2026-03-10",
    readTime: 6,
    category: "Filing",
    content: `
<p>Tax season opens in July 2026. If you bought, sold, or swapped any cryptocurrency during the 2025/26 tax year, you are required to declare it on your ITR12 — South Africa's individual income tax return.</p>

<p>This guide covers exactly how to do it.</p>

<h2>First: Are You an Investor or a Trader?</h2>

<p>SARS treats crypto holders in one of two ways, and the tax treatment is very different:</p>

<ul>
  <li><strong>Investor (CGT)</strong> — you hold crypto for long-term appreciation. Gains are subject to Capital Gains Tax: 40% inclusion rate, maximum effective rate of 18%.</li>
  <li><strong>Trader (Income Tax)</strong> — you trade frequently for profit. Gains are treated as revenue income and taxed at your full marginal rate (up to 45%).</li>
</ul>

<p>Not sure which one you are? Use our <a href="/tax-tools/classifier">Trader vs Investor Classifier</a>.</p>

<h2>For Investors: Capital Gains on the ITR12</h2>

<p>On your ITR12, navigate to the <strong>Capital Gains</strong> section. Under "Financial instruments", you'll find a field specifically for crypto assets:</p>

<ul>
  <li>Field label: <strong>"Financial instruments — crypto asset(s)"</strong></li>
  <li>Enter your total proceeds (what you sold for) and total base cost (what you paid, including fees)</li>
  <li>SARS calculates the gain automatically</li>
</ul>

<p><strong>Annual exclusion:</strong> R50,000 is automatically excluded before inclusion. You don't need to calculate this manually — SARS applies it.</p>

<p><strong>Inclusion rate:</strong> 40% of your net gain (after exclusion) is added to your taxable income.</p>

<h2>For Traders: Revenue Income on the ITR12</h2>

<p>If SARS classifies you as a trader, your crypto profits are revenue income — not capital gains. Declare them under:</p>

<ul>
  <li><strong>Source code 4522</strong> — "Local business income: Crypto asset trading"</li>
  <li>Report gross income and deductible expenses (exchange fees, data costs, etc.)</li>
  <li>Net profit is taxed at your marginal rate</li>
</ul>

<h2>What You Need Before You File</h2>

<p>Gather the following from your exchange(s) before opening your ITR12:</p>

<ol>
  <li>Full transaction history export (Luno: Account → Statements → CSV; VALR: Reports → Transaction History)</li>
  <li>Date of every purchase and the ZAR price on that date</li>
  <li>Date of every sale and the ZAR price on that date</li>
  <li>All trading fees paid (these reduce your gain)</li>
  <li>Any crypto-to-crypto swaps — SARS treats these as a disposal at the ZAR value on the day of the swap</li>
</ol>

<h2>Cost Base Calculation</h2>

<p>SARS uses the <strong>weighted average cost method</strong> by default. If you bought BTC at multiple prices, average them:</p>

<p>Example: Bought 0.1 BTC at R400,000 and 0.1 BTC at R600,000 = average cost R500,000 per BTC. Sell price minus average cost = your gain.</p>

<h2>Calculate Your Tax Before Filing</h2>

<p>Use our free <a href="/tax-tools/cgt">CGT Calculator</a> to estimate your tax before you open the ITR12. It handles both investor (CGT) and trader (income tax) scenarios with the 2026/27 SARS brackets.</p>

<h2>Penalties for Non-Declaration</h2>

<p>With CARF live since March 2026, SA exchanges automatically report your transactions to SARS. If your ITR12 declaration doesn't match exchange data, SARS will query it. Understatement penalties range from 25% to 200% of the shortfall. The Voluntary Disclosure Programme (VDP) remains open — but only until SARS contacts you first.</p>
    `.trim(),
  },
  {
    slug: "investor-vs-trader-sars",
    title: "Investor vs Trader: How SARS Classifies SA Crypto Holders",
    excerpt: "SARS doesn't treat all crypto holders the same. Whether you're classified as an investor or a trader determines whether you pay 18% CGT or up to 45% income tax on your gains.",
    date: "2026-03-15",
    readTime: 5,
    category: "Tax Basics",
    content: `
<p>One of the most consequential tax decisions for SA crypto holders isn't what you buy — it's how SARS classifies you. Get it wrong and you could pay more than double the tax you owe.</p>

<h2>The Two Classifications</h2>

<h3>Investor — Capital Gains Tax (CGT)</h3>
<p>If SARS classifies you as an investor, your crypto profits are subject to CGT:</p>
<ul>
  <li>Annual exclusion: <strong>R50,000</strong> (2026/27)</li>
  <li>Inclusion rate: <strong>40%</strong> of net gains added to taxable income</li>
  <li>Maximum effective CGT rate: <strong>18%</strong> (40% × 45% top bracket)</li>
</ul>

<h3>Trader — Income Tax</h3>
<p>If SARS classifies you as a trader, your crypto profits are revenue income:</p>
<ul>
  <li>No annual exclusion</li>
  <li>100% of profits added to taxable income</li>
  <li>Taxed at your marginal rate — up to <strong>45%</strong></li>
</ul>

<p>On a R200,000 gain, the difference: R36,000 (investor) vs up to R90,000 (trader).</p>

<h2>How SARS Decides</h2>

<p>SARS doesn't have a single rule. They look at the totality of your behaviour. Factors that push you towards <em>trader</em> classification:</p>

<ul>
  <li><strong>Frequency</strong> — daily or weekly buying and selling</li>
  <li><strong>Holding period</strong> — selling within days or weeks of buying</li>
  <li><strong>Intent</strong> — evidence that you were seeking short-term profits (not long-term appreciation)</li>
  <li><strong>Use of strategies</strong> — trading bots, signals, technical analysis</li>
  <li><strong>Income dependency</strong> — crypto trading is a meaningful source of your income</li>
  <li><strong>Volume</strong> — high rand value of transactions relative to other income</li>
</ul>

<p>Factors that support <em>investor</em> classification:</p>

<ul>
  <li>Buying and holding for 12+ months</li>
  <li>Limited number of transactions per year</li>
  <li>Clear long-term wealth-building intent</li>
  <li>No systematic trading strategy</li>
</ul>

<h2>The Grey Zone</h2>

<p>Many SA crypto holders sit in the middle. You DCA (dollar-cost average) into BTC monthly but also sold some ETH after a big pump. SARS doesn't do half-and-half — they make a holistic assessment.</p>

<p>If you're in the grey zone, the safest approach is to document your intent at the time of purchase. A simple note in your records ("bought BTC as long-term store of value, not for trading") can support an investor classification in an audit.</p>

<h2>The Borderline Risk</h2>

<p>SARS audits are triggered by:</p>
<ul>
  <li>CARF data showing high transaction frequency vs low declared income</li>
  <li>ITR12 declarations showing CGT when exchange data suggests trading activity</li>
  <li>Large ZAR amounts moving through crypto with no matching taxable income</li>
</ul>

<h2>Find Out Where You Stand</h2>

<p>Our free <a href="/tax-tools/classifier">Trader vs Investor Classifier</a> asks you 5 questions and gives you a score-based assessment of how SARS is likely to classify you — and what it means for your tax bill.</p>

<p>If you're classified as borderline or likely trader, consider consulting a registered tax practitioner before filing your ITR12.</p>
    `.trim(),
  },
  {
    slug: "crypto-cgt-calculator-south-africa",
    title: "Crypto CGT Calculator: How to Calculate Tax on Crypto Gains in SA (2026)",
    excerpt: "South Africa taxes crypto gains under CGT for investors and income tax for traders. Here's how to calculate exactly what you owe using the 2026/27 SARS brackets — with a free calculator.",
    date: "2026-03-20",
    readTime: 5,
    category: "CGT",
    content: `
<p>South Africa taxes crypto profits. There's no escaping it — and with CARF live since March 2026, SARS has more visibility into your crypto activity than ever before. The good news: if you're classified as an investor, the effective tax rate is far lower than most people fear.</p>

<h2>The Numbers That Matter (2026/27)</h2>

<ul>
  <li><strong>Annual exclusion:</strong> R50,000 (up from R40,000)</li>
  <li><strong>Inclusion rate:</strong> 40% of gains above the exclusion</li>
  <li><strong>Maximum effective CGT rate:</strong> 18% (40% × 45% top marginal rate)</li>
</ul>

<h2>Step-by-Step: Calculating Your CGT</h2>

<p>Let's use a real example. You bought 0.5 ETH at R15,000 each (total cost: R7,500) and sold at R30,000 each (total proceeds: R15,000).</p>

<p><strong>Step 1 — Calculate gross gain:</strong><br>
R15,000 − R7,500 = <strong>R7,500 gross gain</strong></p>

<p><strong>Step 2 — Apply annual exclusion:</strong><br>
R7,500 − R50,000 = R0 (gain is below exclusion)<br>
In this case: no tax owed.</p>

<p>Now a larger example: You made R180,000 on BTC this year.</p>

<p><strong>Step 1 — Gross gain:</strong> R180,000</p>

<p><strong>Step 2 — Annual exclusion:</strong> R180,000 − R50,000 = R130,000</p>

<p><strong>Step 3 — Inclusion rate (40%):</strong> R130,000 × 40% = <strong>R52,000 added to taxable income</strong></p>

<p><strong>Step 4 — Tax at your marginal rate:</strong><br>
At 36% marginal rate: R52,000 × 36% = <strong>R18,720 tax owed</strong><br>
Effective rate on your R180,000 gain: 10.4%</p>

<h2>Income Tax Brackets 2026/27</h2>

<table>
  <thead><tr><th>Taxable income</th><th>Rate</th></tr></thead>
  <tbody>
    <tr><td>R0 – R237,100</td><td>18%</td></tr>
    <tr><td>R237,101 – R370,500</td><td>26%</td></tr>
    <tr><td>R370,501 – R512,800</td><td>31%</td></tr>
    <tr><td>R512,801 – R673,000</td><td>36%</td></tr>
    <tr><td>R673,001 – R857,900</td><td>39%</td></tr>
    <tr><td>R857,901 – R1,817,000</td><td>41%</td></tr>
    <tr><td>Above R1,817,000</td><td>45%</td></tr>
  </tbody>
</table>

<p><em>Remember: the CGT inclusion (40% of net gain) is added to your other income before calculating your bracket.</em></p>

<h2>What About Traders?</h2>

<p>If SARS classifies you as a trader, you don't get the annual exclusion or the 40% inclusion benefit. Your full profit is added to your income and taxed at your marginal rate — potentially 45%.</p>

<p>On a R180,000 gain at 45%: R81,000 in tax — compared to R18,720 as an investor. This is why classification matters.</p>

<h2>Common Mistakes</h2>

<ul>
  <li><strong>Forgetting crypto-to-crypto swaps</strong> — swapping ETH for SOL is a disposal event. Calculate gain at the ZAR value on the day of the swap.</li>
  <li><strong>Using USD prices</strong> — SARS requires ZAR values. Use the ZAR price on the transaction date, not the USD equivalent.</li>
  <li><strong>Ignoring fees</strong> — exchange fees reduce your gain. Include them in your cost base.</li>
  <li><strong>Missing the exclusion</strong> — if your total gains are under R50,000, you owe nothing (as an investor). Many people file unnecessarily.</li>
</ul>

<h2>Calculate Your Exact Number</h2>

<p>Use our free <a href="/tax-tools/cgt">CGT Calculator</a> — enter your buy price, sell price, and units, choose investor or trader, and get your estimated tax instantly. No signup, no data stored.</p>
    `.trim(),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
