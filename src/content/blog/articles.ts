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
  {
    slug: "crypto-losses-tax-south-africa",
    title: "Can You Deduct Crypto Losses From Tax in South Africa?",
    excerpt: "Lost money on crypto? SARS allows capital losses to offset gains — but only under specific conditions. Here's how SA crypto loss deductions work and what to watch out for.",
    date: "2026-03-22",
    readTime: 5,
    category: "CGT",
    content: `
<p>Crypto goes down as well as up. If you sold at a loss this year, the good news is that SARS does allow you to offset those losses — but only if you follow the right rules.</p>

<h2>Capital Losses vs Revenue Losses</h2>

<p>How your loss is treated depends — again — on whether you're classified as an investor or a trader.</p>

<h3>Investor (CGT losses)</h3>
<p>Capital losses can only be set off against capital gains in the same or future tax years. They cannot reduce your salary or other income. They carry forward indefinitely until you have capital gains to absorb them.</p>

<h3>Trader (Revenue losses)</h3>
<p>If you're a trader and your crypto trading produces a loss, that loss can in theory offset other income — but SARS scrutinises this closely. Assessed losses from crypto trading are typically ring-fenced unless trading is your primary business.</p>

<h2>The CGT Offset Mechanism</h2>

<p>As an investor, here's how losses work in practice:</p>

<p>Say you made R120,000 on BTC but lost R30,000 on ETH in the same tax year.</p>
<ul>
  <li>Net capital gain: R120,000 − R30,000 = <strong>R90,000</strong></li>
  <li>Less R50,000 annual exclusion: <strong>R40,000</strong></li>
  <li>40% inclusion: <strong>R16,000 added to taxable income</strong></li>
</ul>

<p>Compare that to paying tax on R120,000 gain without the loss offset. The ETH loss saves you real money.</p>

<h2>Carrying Forward Losses</h2>

<p>If your total capital losses exceed your capital gains in a year, the excess carries forward to the next tax year. There's no time limit — you can carry losses forward until you eventually have gains to absorb them.</p>

<p>Example: You made no gains in 2025/26 but lost R80,000 on crypto. That R80,000 capital loss carries forward. In 2026/27, you make R150,000 in gains. Your net gain: R150,000 − R80,000 = R70,000. Then apply the R50,000 exclusion.</p>

<h2>What You Cannot Do</h2>

<ul>
  <li><strong>Capital losses cannot reduce salary income</strong> — they can only offset other capital gains</li>
  <li><strong>Losses on assets held for personal use</strong> are disregarded (not applicable to crypto, which is an investment asset)</li>
  <li><strong>Wash sale rules</strong> — SARS doesn't have explicit wash sale rules like the US IRS, but be careful about artificially crystallising losses and immediately repurchasing the same asset</li>
</ul>

<h2>Record Everything</h2>

<p>To claim a capital loss, you need records proving the loss. Keep your exchange transaction history showing purchase price, sale price, date, and fees. If you're audited, you must be able to substantiate every loss claim.</p>

<h2>Calculate Your Net Position</h2>

<p>Use our free <a href="/tax-tools/cgt">CGT Calculator</a> to run both your gains and losses. Enter each transaction separately to see your net position and estimated tax — including how losses reduce your final bill.</p>
    `.trim(),
  },
  {
    slug: "sars-crypto-audit-what-to-expect",
    title: "SARS Crypto Audit: What Triggers It and What Happens Next",
    excerpt: "With CARF live since March 2026, SARS has more crypto data than ever. Here's what triggers a crypto audit, what to expect if you receive a letter, and how to respond correctly.",
    date: "2026-03-23",
    readTime: 6,
    category: "Filing",
    content: `
<p>CARF changed everything. SA exchanges now automatically report every crypto transaction to SARS. If your ITR12 doesn't match what your exchange reported, SARS will notice — and they will act.</p>

<h2>What Triggers a Crypto Audit</h2>

<p>SARS uses risk-based selection. The most common triggers for crypto-related audits include:</p>

<ul>
  <li><strong>CARF mismatch</strong> — exchange reports show activity but your ITR12 shows no crypto income or gains</li>
  <li><strong>No ITR12 filed</strong> — if you're registered as a taxpayer and CARF data shows you have crypto, expect a prompt</li>
  <li><strong>Large transfers with no declared source</strong> — crypto sales that land in your bank account without a corresponding tax declaration</li>
  <li><strong>High frequency trading declared as CGT</strong> — if CARF data shows daily or weekly trading but you filed as an investor</li>
  <li><strong>Wealth vs income mismatch</strong> — significant crypto holdings visible to SARS that aren't proportionate to declared income</li>
</ul>

<h2>Types of SARS Correspondence</h2>

<h3>Verification Request (Section 42)</h3>
<p>SARS asks you to confirm specific information on your return. Less serious than a full audit. Respond within 21 days with supporting documents.</p>

<h3>Audit (Section 40–41)</h3>
<p>A formal examination of your tax affairs. SARS may request transaction records, bank statements, and exchange statements going back up to 5 years (longer if fraud is suspected).</p>

<h3>SARS 369 Letter</h3>
<p>A notice of understatement or additional assessment. This arrives after SARS has already made a determination. You have 30 days to object if you disagree.</p>

<h2>Documents SARS Will Request</h2>

<p>If you receive audit correspondence, start gathering:</p>
<ol>
  <li>Complete transaction history from all exchanges (Luno, VALR, Binance, etc.)</li>
  <li>Bank statements showing ZAR deposits and withdrawals linked to crypto</li>
  <li>Proof of purchase prices (date, ZAR value, exchange rate if purchased in USD)</li>
  <li>Proof of all fees paid</li>
  <li>Prior year ITR12 submissions showing your crypto declarations</li>
</ol>

<h2>Understatement Penalties</h2>

<p>If SARS finds that you understated your income or gains, penalties apply based on the behaviour type:</p>

<ul>
  <li><strong>Substantial understatement</strong> (>R1m or >20% of tax): 25%</li>
  <li><strong>Reasonable care not taken</strong>: 25%</li>
  <li><strong>No reasonable grounds for position</strong>: 50%</li>
  <li><strong>Impermissible avoidance</strong>: 75%</li>
  <li><strong>Intentional tax evasion</strong>: 100–200%</li>
</ul>

<p>Plus interest (currently ~10.25% per year) on any unpaid tax from the date it was due.</p>

<h2>If You Haven't Filed Yet: Act First</h2>

<p>The Voluntary Disclosure Programme (VDP) allows you to correct prior non-disclosure with 100% penalty relief — but only if SARS has not yet contacted you. Once you receive any audit letter, the VDP window closes for that matter.</p>

<p>The proactive option: engage a registered tax practitioner (tax attorney or SARS-registered tax practitioner) before SARS makes contact.</p>

<h2>Check Your Risk Level Now</h2>

<p>Our free <a href="/tax-tools/carf">CARF Compliance Checker</a> takes 2 minutes and tells you whether your current crypto activity creates an audit risk — and what to do about it.</p>
    `.trim(),
  },
  {
    slug: "bitcoin-dca-tax-south-africa",
    title: "Bitcoin DCA and Tax in South Africa: What SARS Thinks of Monthly Buys",
    excerpt: "Millions of South Africans DCA into Bitcoin monthly. Here's how SARS treats regular crypto purchases, which cost base method to use, and whether DCA protects your investor status.",
    date: "2026-03-24",
    readTime: 5,
    category: "Tax Basics",
    content: `
<p>Dollar-cost averaging (DCA) — buying a fixed rand amount of Bitcoin every month — is one of the most popular crypto strategies in South Africa. It reduces price risk and builds a position over time. But what does SARS make of it?</p>

<h2>DCA and Investor vs Trader Classification</h2>

<p>The good news: regular buying does <em>not</em> automatically make you a trader. SARS looks at <em>buying and selling</em> behaviour, not just buying. Someone who buys R2,000 of BTC every month but never sells is overwhelmingly likely to be classified as an investor.</p>

<p>The risk comes when you start selling frequently. If you DCA in but also sell portions regularly — weekly or monthly — SARS may look at your overall pattern and reclassify you.</p>

<p><strong>Rule of thumb:</strong> DCA into BTC with a plan to hold for years = investor. DCA in and regularly take profits = worth assessing your classification.</p>

<h2>Cost Base: The Weighted Average Method</h2>

<p>SARS uses the <strong>weighted average cost</strong> method for crypto assets. If you've bought Bitcoin at different prices over time, you calculate your average cost across all purchases:</p>

<p>Example:</p>
<ul>
  <li>Jan 2025: 0.01 BTC at R800,000/BTC = R8,000 cost</li>
  <li>Feb 2025: 0.01 BTC at R1,000,000/BTC = R10,000 cost</li>
  <li>Mar 2025: 0.01 BTC at R900,000/BTC = R9,000 cost</li>
  <li>Total: 0.03 BTC at average cost R900,000/BTC</li>
</ul>

<p>If you sell 0.01 BTC at R1,200,000/BTC:</p>
<ul>
  <li>Proceeds: R12,000</li>
  <li>Cost base (weighted avg): R9,000</li>
  <li>Gain: R3,000</li>
</ul>

<p>This is more favourable than FIFO (first in, first out) if your early purchases were cheap — because it spreads the low cost base across all units rather than wiping out your cheapest ones first.</p>

<h2>Tracking DCA for Tax Purposes</h2>

<p>If you DCA monthly, you'll have 12+ buy entries per year. Each one needs to be recorded:</p>
<ul>
  <li>Date of purchase</li>
  <li>ZAR amount spent</li>
  <li>BTC received (after fees)</li>
  <li>Effective ZAR price per BTC on that date</li>
</ul>

<p>Luno and VALR both allow you to export your full transaction history as a CSV. Do this once a year at tax time and keep it with your other financial records.</p>

<h2>What If You've Been DCA-ing for Years Without Records?</h2>

<p>Start now. Request historical statements from your exchange — most SA exchanges retain data for 5+ years. You can reconstruct your cost base from exchange records even if you didn't keep your own.</p>

<p>If you genuinely have no records (e.g., you lost access to an old exchange account), you'll need to use the market price at acquisition as a best estimate and document your methodology in case of audit.</p>

<h2>The Tax on Your DCA Position</h2>

<p>When you eventually sell, use our <a href="/tax-tools/cgt">CGT Calculator</a> to calculate your gain. Enter your weighted average cost, your sell price, and the number of units sold. The tool handles the R50,000 exclusion and 40% inclusion rate automatically.</p>
    `.trim(),
  },
  {
    slug: "crypto-staking-yield-tax-south-africa",
    title: "Crypto Staking and Yield: How SARS Taxes DeFi Income in SA",
    excerpt: "Earning rewards from staking, liquidity pools, or yield products? SARS treats crypto rewards as income the moment you receive them. Here's how it works and what records you need.",
    date: "2026-03-25",
    readTime: 5,
    category: "Tax Basics",
    content: `
<p>Staking rewards. Liquidity pool yields. Earn products on Luno or VALR. As crypto becomes more sophisticated, so does the tax picture. SARS hasn't issued specific guidance on DeFi — but the Income Tax Act still applies.</p>

<h2>The Core Principle: Rewards Are Income When Received</h2>

<p>When you receive staking rewards, yield, or any crypto-denominated return, SARS treats that as <strong>income in the hands of the recipient</strong> at the ZAR value on the date received. This is the same principle as receiving foreign dividends or rental income.</p>

<p>You don't wait until you sell. You owe tax on the ZAR value when the reward arrives in your wallet.</p>

<h2>Staking Rewards</h2>

<p>If you stake ETH, SOL, or any PoS asset and receive staking rewards:</p>
<ul>
  <li>The reward is <strong>income</strong> at the ZAR value when received</li>
  <li>Declare it under "other income" on your ITR12 (source code 8022 — foreign income if from an international protocol, or local income if via a SA platform)</li>
  <li>Your cost base for those reward tokens is the ZAR value when you received them</li>
  <li>When you later sell those tokens, any gain above that cost base is a capital gain</li>
</ul>

<p>Example: You receive 0.1 ETH in staking rewards when ETH is worth R50,000. You declare R5,000 as income. Six months later you sell that 0.1 ETH for R60,000. Your gain is R1,000 (taxed as CGT, not income again).</p>

<h2>Liquidity Pool Yield</h2>

<p>Providing liquidity to a DEX (Uniswap, Curve, etc.) and earning fees or LP rewards is treated similarly. Each yield payment is income when received. When you withdraw your LP position, any gain on the underlying assets is a separate CGT event.</p>

<p>Impermanent loss is not explicitly addressed by SARS. The conservative approach: don't recognise it as a loss until you actually withdraw from the pool and crystallise the position.</p>

<h2>Luno Earn / VALR Yield Products</h2>

<p>SA exchange earn products work like savings accounts — you deposit crypto and earn a yield. The interest is income when credited to your account. Your exchange should reflect this in your transaction history as a separate line item.</p>

<h2>What Records You Need</h2>

<ul>
  <li>Date of each reward/yield payment received</li>
  <li>Amount in crypto terms (e.g., 0.05 ETH)</li>
  <li>ZAR value on that date (use the exchange rate from the platform or a reputable price source)</li>
  <li>Running total of cumulative income per tax year</li>
</ul>

<p>For DeFi protocols that don't have a clean export, tools like Koinly, CoinTracker, or CryptoTax SA support wallet imports and can reconstruct your income history.</p>

<h2>The Double Tax Problem</h2>

<p>One issue to be aware of: if you receive staking rewards (income event), pay tax on them, and then those tokens drop in value before you sell — you've paid income tax on value you no longer have, and you can only claim a capital loss when you sell. There's no mechanism to reverse the income tax paid. This is an inherent asymmetry in the current framework.</p>

<h2>Seek Professional Advice for Complex DeFi</h2>

<p>Cross-chain bridging, yield farming with rebasing tokens, and NFT royalties are areas where SA tax law is genuinely unclear. If your DeFi activity is significant, a consultation with a registered crypto tax practitioner is worth the cost. Our <a href="/tax-tools/classifier">Classifier tool</a> can help you assess your overall tax profile before you engage a professional.</p>
    `.trim(),
  },
  {
    slug: "voluntary-disclosure-programme-crypto-sars",
    title: "SARS VDP and Crypto: How to Fix Undeclared Gains Before It's Too Late",
    excerpt: "Never declared your crypto gains to SARS? The Voluntary Disclosure Programme offers 100% penalty relief — but only if you act before SARS contacts you. Here's exactly how it works.",
    date: "2026-03-25",
    readTime: 6,
    category: "Filing",
    content: `
<p>South Africa's Voluntary Disclosure Programme (VDP) is one of the most powerful tools available to taxpayers who have undeclared income — including crypto gains. With CARF live since March 2026, the window to act proactively is closing fast.</p>

<h2>What Is the VDP?</h2>

<p>The VDP is a formal SARS programme under the Tax Administration Act (section 225–233) that allows taxpayers to voluntarily disclose previously undeclared income or gains in exchange for reduced penalties.</p>

<p>The key benefit: <strong>100% relief from understatement penalties</strong> if your application is approved. You still owe the tax itself, plus interest — but the additional penalties (which can reach 200% of the tax owed for wilful non-disclosure) are waived.</p>

<h2>Who Qualifies?</h2>

<p>To qualify for VDP relief, you must meet all of the following:</p>
<ul>
  <li>The disclosure must be <strong>voluntary</strong> — SARS cannot already be investigating or auditing you for that specific matter</li>
  <li>The disclosure must be <strong>complete</strong> — partial disclosure doesn't qualify</li>
  <li>The disclosure must be made <strong>in good faith</strong> — you cannot have previously disclosed the same issue incorrectly</li>
  <li>You cannot have a <strong>prior VDP agreement</strong> for the same tax type and period</li>
</ul>

<p>Critically: if SARS has already sent you an audit letter, verification request, or any correspondence about your crypto, the VDP door may already be closed for that matter.</p>

<h2>What Tax Years Can You Disclose?</h2>

<p>SARS's standard assessment period is 3 years. However, for fraud or intentional non-disclosure, this extends to 5 years (and there's no limit if SARS can prove fraud). For most crypto holders who simply didn't know they needed to declare — and who have no fraudulent intent — the 3-year window applies.</p>

<p>You can file amended returns or a VDP application covering the 2023/24, 2024/25, and 2025/26 tax years (and the 2026/27 year when it closes in February 2027).</p>

<h2>How to Apply</h2>

<h3>Step 1 — Gather your records</h3>
<p>You need a complete picture of every crypto transaction across all tax years you're disclosing: purchase dates, prices, sale dates, prices, and exchange fees. Download your full transaction history from every exchange you've used.</p>

<h3>Step 2 — Calculate the tax owed</h3>
<p>Work out the total capital gain (or trading income) for each tax year. Apply the exclusion and inclusion rate for each year (the R50,000 exclusion was lower in prior years — it was R40,000 in 2024/25 and prior years). Use the marginal tax rate you were in during each year.</p>

<h3>Step 3 — Engage a registered tax practitioner</h3>
<p>While you can technically apply for VDP yourself via eFiling, a registered tax practitioner (particularly one with crypto experience) significantly increases your chance of a clean application. They'll ensure your disclosure is complete and correctly structured — incomplete VDP applications are rejected and lose their protection.</p>

<h3>Step 4 — Submit via eFiling</h3>
<p>VDP applications are submitted through SARS eFiling under the "VDP" tab. SARS typically responds within 21 business days. Once approved, you pay the tax and interest under the agreed terms.</p>

<h2>The Cost of Waiting</h2>

<p>Every month you wait, SARS receives more CARF data. If they match your exchange history to your ITR12 declarations before you apply, you lose the VDP option. The penalties that then apply — plus interest compounding on unpaid tax — can easily exceed the tax itself.</p>

<p>The math is clear: act now, pay tax + interest, close the matter. Or wait, risk an audit, and pay tax + interest + penalties up to 200%.</p>

<h2>Assess Your Risk First</h2>

<p>Our free <a href="/tax-tools/carf">CARF Compliance Checker</a> takes 2 minutes to assess your disclosure risk level and gives you a clear recommended action. If it flags medium or high risk, engage a tax practitioner before SARS contacts you.</p>
    `.trim(),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
