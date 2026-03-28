export type Category = "Security" | "Crypto 101" | "Trading" | "Tax";
export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Lesson {
  id: string;
  title: string;
  estimatedTime: number; // minutes
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  estimatedTime: number;
  lessons: Lesson[];
  contentHTML: string;
  relatedModules: string[];
  publishedAt: Date;
  updatedAt?: Date;
}

export const modules: Module[] = [
  // ─── SECURITY (First) ───────────────────────────────────────────────────────
  {
    slug: "wallet-security",
    title: "Wallet Security",
    description: "Learn how to secure your crypto wallets and protect your private keys from theft.",
    category: "Security",
    difficulty: "beginner",
    estimatedTime: 10,
    lessons: [
      { id: "lesson-1", title: "Types of Wallets", estimatedTime: 3 },
      { id: "lesson-2", title: "Private Keys vs Seed Phrases", estimatedTime: 4 },
      { id: "lesson-3", title: "Best Practices for Storage", estimatedTime: 3 },
    ],
    contentHTML: `
      <h2>Wallet Security: Protecting Your Crypto</h2>
      <p>Your wallet is your responsibility. Unlike traditional banks, there's no insurance or recovery if your keys are compromised.</p>

      <h3>Types of Wallets</h3>
      <p><strong>Hot Wallets:</strong> Internet-connected (mobile, desktop, web). Convenient but higher risk.</p>
      <p><strong>Cold Wallets:</strong> Offline storage (hardware, paper). Maximum security, slower to use.</p>

      <h3>Private Keys & Seed Phrases</h3>
      <p>Your seed phrase (12-24 words) is the master key to all your funds. Anyone with it can access everything.</p>
      <ul>
        <li>Never share your seed phrase with anyone</li>
        <li>Store it offline in a safe place</li>
        <li>Use a hardware wallet for large holdings</li>
        <li>Test your recovery phrase before relying on it</li>
      </ul>

      <h3>Storage Best Practices</h3>
      <p>Keep your seed phrase written down on paper or stored in a safe. Never take screenshots or store it in email/cloud.</p>
    `,
    relatedModules: ["avoiding-scams"],
    publishedAt: new Date("2026-03-28"),
  },
  {
    slug: "avoiding-scams",
    title: "Avoiding Scams",
    description: "Recognize common crypto scams and protect yourself from fraud, phishing, and rug pulls.",
    category: "Security",
    difficulty: "beginner",
    estimatedTime: 12,
    lessons: [
      { id: "lesson-1", title: "Common Scam Types", estimatedTime: 4 },
      { id: "lesson-2", title: "Red Flags & Warning Signs", estimatedTime: 4 },
      { id: "lesson-3", title: "How to Verify Legitimacy", estimatedTime: 4 },
    ],
    contentHTML: `
      <h2>Avoiding Crypto Scams</h2>
      <p>The crypto space attracts scammers. Learn to spot and avoid the most common schemes.</p>

      <h3>Common Scam Types</h3>
      <p><strong>Phishing:</strong> Fake websites that look real, stealing login credentials or seed phrases.</p>
      <p><strong>Rug Pulls:</strong> New tokens/projects that suddenly disappear after collecting funds.</p>
      <p><strong>Pump & Dump:</strong> Coordinated price inflation followed by mass selling.</p>
      <p><strong>Fake Giveaways:</strong> Promises to double your crypto if you send funds first.</p>

      <h3>Red Flags</h3>
      <ul>
        <li>Unsolicited DMs or emails promising returns</li>
        <li>Celebrity endorsements (often fake accounts)</li>
        <li>Guaranteed returns or "get rich quick" claims</li>
        <li>Pressure to act immediately</li>
        <li>Misspelled domain names</li>
        <li>Projects with anonymous teams (for large funds)</li>
      </ul>

      <h3>Verification Checklist</h3>
      <ul>
        <li>Check official social media (blue checkmark)</li>
        <li>Verify URLs character-by-character</li>
        <li>Research team members independently</li>
        <li>Look for security audits (for protocols/contracts)</li>
        <li>Check community forums for complaints</li>
      </ul>
    `,
    relatedModules: ["wallet-security"],
    publishedAt: new Date("2026-03-28"),
  },

  // ─── CRYPTO 101 (Second) ─────────────────────────────────────────────────────
  {
    slug: "bitcoin-basics",
    title: "Bitcoin Basics",
    description: "Understand what Bitcoin is, how it works, and why it matters for the crypto ecosystem.",
    category: "Crypto 101",
    difficulty: "beginner",
    estimatedTime: 15,
    lessons: [
      { id: "lesson-1", title: "What is Bitcoin?", estimatedTime: 4 },
      { id: "lesson-2", title: "How Does It Work?", estimatedTime: 5 },
      { id: "lesson-3", title: "Supply & Scarcity", estimatedTime: 3 },
      { id: "lesson-4", title: "Bitcoin vs Money", estimatedTime: 3 },
    ],
    contentHTML: `
      <h2>Bitcoin Basics: Digital Gold</h2>
      <p>Bitcoin is the first cryptocurrency and the largest by market cap. It introduced blockchain technology to the world.</p>

      <h3>What is Bitcoin?</h3>
      <p>Bitcoin is a decentralized digital currency created in 2009 by an anonymous person (or group) under the pseudonym Satoshi Nakamoto. It runs on a peer-to-peer network without a central authority.</p>

      <h3>How Does It Work?</h3>
      <p>Bitcoin uses blockchain technology—a distributed ledger that records every transaction across a network of computers (nodes). Miners validate transactions and secure the network by solving complex mathematical puzzles.</p>

      <h3>Supply & Scarcity</h3>
      <ul>
        <li>Only 21 million Bitcoin will ever exist</li>
        <li>As of 2026, over 19 million have been mined</li>
        <li>New Bitcoin are created through mining (halving every 4 years)</li>
        <li>Scarcity is a key feature, not a bug</li>
      </ul>

      <h3>Bitcoin vs Traditional Money</h3>
      <p><strong>Bitcoin:</strong> Decentralized, pseudonymous, global, immutable, no intermediaries</p>
      <p><strong>Fiat Currency:</strong> Controlled by central banks, regulated, reversible transactions, geographic constraints</p>

      <p>Many view Bitcoin as "digital gold"—a store of value and hedge against inflation.</p>
    `,
    relatedModules: ["ethereum-tokens"],
    publishedAt: new Date("2026-03-28"),
  },
  {
    slug: "ethereum-tokens",
    title: "Ethereum & Tokens",
    description: "Learn about smart contracts, ERC-20 tokens, and how Ethereum enables decentralized applications.",
    category: "Crypto 101",
    difficulty: "beginner",
    estimatedTime: 18,
    lessons: [
      { id: "lesson-1", title: "What is Ethereum?", estimatedTime: 4 },
      { id: "lesson-2", title: "Smart Contracts", estimatedTime: 5 },
      { id: "lesson-3", title: "ERC-20 Tokens", estimatedTime: 5 },
      { id: "lesson-4", title: "dApps & Defi", estimatedTime: 4 },
    ],
    contentHTML: `
      <h2>Ethereum & Tokens: Programmable Money</h2>
      <p>Ethereum went beyond Bitcoin by adding smart contracts—programmable code that runs automatically.</p>

      <h3>What is Ethereum?</h3>
      <p>Ethereum is a blockchain that lets developers build applications on top of it. Instead of just storing transaction data like Bitcoin, Ethereum can execute complex programs.</p>

      <h3>Smart Contracts</h3>
      <p>Smart contracts are self-executing programs on the blockchain. When conditions are met, they execute automatically without needing intermediaries.</p>
      <p>Example: An insurance contract that auto-pays if a flight is delayed (using flight data feeds).</p>

      <h3>ERC-20 Tokens</h3>
      <p>ERC-20 is a standard for creating tokens on Ethereum. Think of it as the "format" that all tokens follow so wallets and exchanges can recognize them.</p>
      <ul>
        <li>Each token has supply, decimals, and an owner</li>
        <li>Can represent anything: stablecoins, governance, utility, art</li>
        <li>Easy to create, which is why there are thousands</li>
      </ul>

      <h3>dApps & DeFi</h3>
      <p><strong>dApps:</strong> Decentralized applications running on Ethereum (no single company controls them).</p>
      <p><strong>DeFi:</strong> Decentralized Finance—lending, borrowing, swaps without banks. Usually built on Ethereum.</p>
    `,
    relatedModules: ["bitcoin-basics"],
    publishedAt: new Date("2026-03-28"),
  },

  // ─── TRADING (Third) ─────────────────────────────────────────────────────────
  {
    slug: "dca-investing",
    title: "DCA Investing",
    description: "Master dollar-cost averaging: invest fixed amounts regularly to reduce timing risk.",
    category: "Trading",
    difficulty: "beginner",
    estimatedTime: 12,
    lessons: [
      { id: "lesson-1", title: "What is DCA?", estimatedTime: 3 },
      { id: "lesson-2", title: "Advantages & Disadvantages", estimatedTime: 4 },
      { id: "lesson-3", title: "DCA vs Lump Sum", estimatedTime: 3 },
      { id: "lesson-4", title: "Tax Implications (SA)", estimatedTime: 2 },
    ],
    contentHTML: `
      <h2>Dollar-Cost Averaging (DCA)</h2>
      <p>DCA is a simple strategy: invest the same amount regularly, regardless of price. Over time, this reduces the impact of volatility.</p>

      <h3>How DCA Works</h3>
      <p>Example: Invest R1,000 every month into Bitcoin.</p>
      <ul>
        <li>Month 1: BTC at R200k → You buy 0.005 BTC</li>
        <li>Month 2: BTC at R180k → You buy 0.0056 BTC (more at lower price)</li>
        <li>Month 3: BTC at R220k → You buy 0.0045 BTC (less at higher price)</li>
      </ul>
      <p>Over 3 months, your average cost is lower than if you'd invested all R3,000 at once.</p>

      <h3>Advantages</h3>
      <ul>
        <li>Removes emotion from investing</li>
        <li>Reduces timing risk (no need to predict the bottom)</li>
        <li>Builds discipline</li>
        <li>Works in both bull and bear markets</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li>In a strong bull market, lump-sum investing beats DCA</li>
        <li>Small investments may have high fees</li>
        <li>Requires consistency (easy to skip months)</li>
      </ul>

      <h3>Tax in South Africa</h3>
      <p>Each purchase is a transaction. When you sell, SARS treats it as capital gains/loss based on your weighted average cost.</p>
    `,
    relatedModules: ["grid-trading"],
    publishedAt: new Date("2026-03-28"),
  },
  {
    slug: "grid-trading",
    title: "Grid Trading 101",
    description: "Automate profits using grid trading: place orders at set intervals and capture volatility.",
    category: "Trading",
    difficulty: "intermediate",
    estimatedTime: 20,
    lessons: [
      { id: "lesson-1", title: "Grid Trading Basics", estimatedTime: 5 },
      { id: "lesson-2", title: "Grid Setup & Parameters", estimatedTime: 6 },
      { id: "lesson-3", title: "Risks & Edge Cases", estimatedTime: 5 },
      { id: "lesson-4", title: "Backtesting & Optimization", estimatedTime: 4 },
    ],
    contentHTML: `
      <h2>Grid Trading 101: Systematic Volatility Capture</h2>
      <p>Grid trading is a bot strategy that places buy and sell orders at fixed price intervals, profiting from price swings within a range.</p>

      <h3>How Grid Trading Works</h3>
      <p>Example: BTC range R200k–R220k, 10 grids</p>
      <ul>
        <li>Place 10 buy orders: R200k, R202k, R204k... R218k</li>
        <li>Place 10 sell orders: R202k, R204k, R206k... R220k</li>
        <li>When price drops to R202k, bot buys. When it rises to R202k+spread, bot sells for profit</li>
        <li>Repeat continuously within the range</li>
      </ul>

      <h3>Key Parameters</h3>
      <p><strong>Upper/Lower Bounds:</strong> Define your trading range based on technical analysis or recent support/resistance.</p>
      <p><strong>Grid Levels:</strong> More grids = smaller profits per trade but more frequent trades.</p>
      <p><strong>Profit Margin:</strong> Spread between buy and sell orders (usually 0.5%–2%).</p>

      <h3>Advantages</h3>
      <ul>
        <li>Works in sideways/ranging markets</li>
        <li>Automates profit-taking</li>
        <li>Removes emotion</li>
        <li>24/7 trading with bots</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Breakout above/below range: grid runs out of capital or gets stuck</li>
        <li>Fees add up with frequent trades</li>
        <li>Requires initial capital for grid coverage</li>
        <li>Tax complexity: each micro-trade is a taxable event (SA)</li>
      </ul>
    `,
    relatedModules: ["dca-investing"],
    publishedAt: new Date("2026-03-28"),
  },

  // ─── TAX (Fourth) ────────────────────────────────────────────────────────────
  {
    slug: "sa-crypto-tax-overview",
    title: "SA Crypto Tax Overview",
    description: "Understand South Africa's tax rules for cryptocurrency: CGT, income, and SARS reporting.",
    category: "Tax",
    difficulty: "beginner",
    estimatedTime: 25,
    lessons: [
      { id: "lesson-1", title: "Tax Types & Categories", estimatedTime: 6 },
      { id: "lesson-2", title: "SARS Reporting Requirements", estimatedTime: 7 },
      { id: "lesson-3", title: "Record-Keeping & Documentation", estimatedTime: 6 },
      { id: "lesson-4", title: "Common Mistakes to Avoid", estimatedTime: 6 },
    ],
    contentHTML: `
      <h2>South Africa Crypto Tax Overview</h2>
      <p>SARS treats crypto as taxable assets. There are three main tax types you need to know about.</p>

      <h3>Three Tax Categories</h3>
      <p><strong>1. Capital Gains Tax (CGT)</strong> on selling crypto for profit (long-term)</p>
      <ul>
        <li>Only 40% of gains are taxable (inclusion rate)</li>
        <li>Basic exemption: R40,000/year per person</li>
        <li>Tax depends on your marginal rate (up to 45%)</li>
      </ul>

      <p><strong>2. Income Tax</strong> on crypto-to-crypto trades (frequent trading)</p>
      <ul>
        <li>100% of profits taxable if trading is your business</li>
        <li>Deductible expenses against income</li>
      </ul>

      <p><strong>3. Withholding Tax</strong> on staking/rewards (8% for now)</p>
      <ul>
        <li>Applied to yield farming, staking rewards</li>
        <li>Changes periodically by regulation</li>
      </ul>

      <h3>SARS Reporting</h3>
      <ul>
        <li>Declare all gains in your annual tax return (ITR12 or ITR14)</li>
        <li>Provide transaction records (dates, amounts, prices)</li>
        <li>Report foreign accounts if over R250k</li>
        <li>SARS now has data-sharing agreements with exchanges</li>
      </ul>

      <h3>Record-Keeping</h3>
      <p>Keep for 5 years: buy/sell confirmations, deposit/withdrawal proof, spot prices at time of transaction.</p>

      <h3>Common Mistakes</h3>
      <ul>
        <li>Not declaring gains as "just crypto volatility"</li>
        <li>Mixing personal and investment wallets</li>
        <li>Losing records (exchanges disappear)</li>
        <li>Forgetting to declare foreign exchange income</li>
      </ul>
    `,
    relatedModules: ["capital-gains-calculation"],
    publishedAt: new Date("2026-03-28"),
  },
  {
    slug: "capital-gains-calculation",
    title: "Capital Gains Calculation",
    description: "Calculate your taxable gains accurately: cost basis, weighted average, and CGT liability.",
    category: "Tax",
    difficulty: "intermediate",
    estimatedTime: 18,
    lessons: [
      { id: "lesson-1", title: "Cost Basis & Weighted Average", estimatedTime: 5 },
      { id: "lesson-2", title: "Calculating Gains", estimatedTime: 5 },
      { id: "lesson-3", title: "Tax Liability in SA", estimatedTime: 4 },
      { id: "lesson-4", title: "Using the CGT Calculator", estimatedTime: 4 },
    ],
    contentHTML: `
      <h2>Capital Gains Calculation</h2>
      <p>Accurate cost basis is critical. Get it wrong, and you'll either overpay tax or face penalties.</p>

      <h3>Cost Basis: Weighted Average Method</h3>
      <p>South Africa uses the weighted average cost method (WACM). When you sell, your cost is the average of all buys.</p>

      <p>Example:</p>
      <ul>
        <li>Buy 1 BTC at R100k</li>
        <li>Buy 2 BTC at R110k</li>
        <li>Sell 1.5 BTC at R120k</li>
      </ul>
      <p>Weighted cost = (1×100k + 2×110k) / 3 = R106,667</p>
      <p>Gain per unit = R120k - R106,667 = R13,333</p>
      <p>Total gain = 1.5 × R13,333 = R20,000</p>

      <h3>Calculating Gains</h3>
      <p><strong>Gain = Selling Price - Cost Basis</strong></p>
      <p>Include all costs: exchange fees, transfer fees, conversion fees.</p>

      <h3>SA Tax Liability</h3>
      <p>Taxable gain = Total gain × 40% (inclusion rate)</p>
      <p>Tax owed = Taxable gain × Your marginal tax rate</p>
      <p>After R40,000 annual exemption:</p>
      <ul>
        <li>18% bracket: 40% × 18% = 7.2% effective</li>
        <li>26% bracket: 40% × 26% = 10.4% effective</li>
        <li>41% bracket: 40% × 41% = 16.4% effective</li>
      </ul>

      <h3>Using the CGT Calculator</h3>
      <p>Our calculator handles weighted average automatically. Input your buy/sell transactions, and it computes your liability.</p>
    `,
    relatedModules: ["sa-crypto-tax-overview"],
    publishedAt: new Date("2026-03-28"),
  },
];

export const getModuleBySlug = (slug: string): Module | undefined => {
  return modules.find((m) => m.slug === slug);
};

export const getModulesByCategory = (category: Category): Module[] => {
  return modules.filter((m) => m.category === category);
};

export const getCategories = (): Category[] => {
  const cats = new Set(modules.map((m) => m.category));
  return Array.from(cats);
};

export const getRelatedModules = (slug: string): Module[] => {
  const module = getModuleBySlug(slug);
  if (!module) return [];
  return module.relatedModules
    .map((s) => getModuleBySlug(s))
    .filter((m): m is Module => m !== undefined);
};
