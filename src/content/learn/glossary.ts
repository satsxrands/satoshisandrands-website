/**
 * Crypto Dictionary - Glossary Terms
 * Educational reference for SatoshisAndRands
 * South African context with simple + advanced definitions
 */

export interface DictTerm {
  id: string;
  term: string;
  category: "Crypto 101" | "Trading" | "Security" | "Tax";
  simpleDefinition: string;
  advancedDefinition: string;
  example?: string;
  saContext?: string;
  relatedTerms?: string[];
}

export const glossaryTerms: DictTerm[] = [
  // ─────────────────────── CRYPTO 101 ──────────────────────
  {
    id: "bitcoin",
    term: "Bitcoin",
    category: "Crypto 101",
    simpleDefinition:
      "A digital money that works without banks. You can send Bitcoin directly to someone else without needing a middleman.",
    advancedDefinition:
      "A decentralized peer-to-peer electronic cash system using proof-of-work consensus and SHA-256 cryptographic hashing. Bitcoin operates on an immutable ledger (the blockchain) with a fixed supply cap of 21 million coins.",
    example:
      "Instead of sending R1,000 via a bank (which takes days and charges fees), you can send Bitcoin instantly to anyone in the world.",
    saContext:
      "Bitcoin is treated as a capital asset by SARS for CGT purposes. South Africans can buy Bitcoin on exchanges like Luno, Valr, or Kraken.",
    relatedTerms: ["blockchain", "cryptocurrency", "wallet", "private-key"],
  },
  {
    id: "cryptocurrency",
    term: "Cryptocurrency",
    category: "Crypto 101",
    simpleDefinition:
      "Digital money protected by math (cryptography) instead of banks. Examples: Bitcoin, Ethereum, Ripple.",
    advancedDefinition:
      "A class of digital assets using cryptographic protocols for security, validation, and control. Cryptocurrencies leverage distributed ledger technology (blockchain) for transaction settlement without central authority.",
    example: "Bitcoin, Ethereum, and Cardano are cryptocurrencies.",
    saContext:
      "SARS classifies cryptocurrencies as intangible assets or capital assets depending on use (trading vs holding for investment).",
    relatedTerms: ["blockchain", "bitcoin", "ethereum", "token"],
  },
  {
    id: "blockchain",
    term: "Blockchain",
    category: "Crypto 101",
    simpleDefinition:
      "A shared list of transactions that everyone can see but nobody can cheat. Each new transaction gets added as a block in a chain.",
    advancedDefinition:
      "A distributed append-only ledger where transactions are cryptographically linked in blocks. Consensus mechanisms (PoW, PoS) validate new blocks, and the ledger is replicated across many nodes to prevent tampering.",
    example:
      "Bitcoin's blockchain records every Bitcoin transaction ever made. You can view it publicly at blockchain.com.",
    saContext:
      "Understanding blockchain helps you understand why cryptocurrency holdings are taxable and how to track transaction history for tax reporting to SARS.",
    relatedTerms: ["bitcoin", "distributed-ledger", "smart-contract"],
  },
  {
    id: "ethereum",
    term: "Ethereum",
    category: "Crypto 101",
    simpleDefinition:
      "A digital platform that can run programs and contracts automatically. Bitcoin just handles money, but Ethereum is like a computer anyone can use.",
    advancedDefinition:
      "A blockchain network supporting Turing-complete smart contracts, enabling decentralized applications (dApps). Uses EVM (Ethereum Virtual Machine) for contract execution and ETH as its native token.",
    example:
      "On Ethereum, you can create a contract that automatically pays you when certain conditions are met—no lawyer needed.",
    saContext:
      "Ethereum tokens (including staking rewards and DeFi yields) are taxable in South Africa as either income or capital gains.",
    relatedTerms: ["smart-contract", "evm", "staking", "defi"],
  },
  {
    id: "token",
    term: "Token",
    category: "Crypto 101",
    simpleDefinition:
      "A digital asset created on a blockchain. Like shares in a company, but for digital projects. Can represent ownership, utility, or voting rights.",
    advancedDefinition:
      "A digital representation of value issued on an existing blockchain. Tokens can be fungible (ERC-20) or non-fungible (ERC-721/NFT), and may grant utility, governance, or ownership rights.",
    example:
      "USDC is a token on Ethereum that represents US dollars. Uniswap governance tokens represent voting power in protocol decisions.",
    saContext:
      "Altcoins and tokens are taxable in South Africa. You must track cost base and fair market value at purchase and sale for CGT.",
    relatedTerms: ["cryptocurrency", "erc-20", "nft", "ico"],
  },
  {
    id: "wallet",
    term: "Wallet",
    category: "Crypto 101",
    simpleDefinition:
      "A software or device that stores your cryptocurrency and lets you send/receive it. Think of it like a digital safe.",
    advancedDefinition:
      "A cryptographic key management system storing public/private key pairs. Wallets derive addresses from keys and sign transactions using private keys without exposing them.",
    example:
      "MetaMask is a wallet for Ethereum. Ledger is a hardware wallet (physical device). You use them to manage your coins and send transactions.",
    saContext:
      "Storing crypto in your own wallet (self-custody) is your responsibility. SARS expects you to track holdings and report them accurately.",
    relatedTerms: ["private-key", "public-key", "address", "seed-phrase"],
  },
  {
    id: "private-key",
    term: "Private Key",
    category: "Crypto 101",
    simpleDefinition:
      "A secret code that proves you own your cryptocurrency. Never share it—anyone with it can steal your coins.",
    advancedDefinition:
      "A cryptographic secret (typically 256-bit) used to sign transactions and prove ownership. Private keys should never be exposed; their compromise results in loss of funds.",
    example:
      "Your private key is like your bank PIN, but worse—if someone gets it, they can empty your account instantly and permanently.",
    saContext:
      "Losing your private key means losing access to your crypto forever. Back them up securely (hardware wallet, safety deposit box, encrypted storage).",
    relatedTerms: ["public-key", "seed-phrase", "wallet"],
  },
  {
    id: "public-key",
    term: "Public Key",
    category: "Crypto 101",
    simpleDefinition:
      "A code you can share with anyone. It's like your bank account number—people use it to send you crypto, but can't take it from you.",
    advancedDefinition:
      "The publicly derivable counterpart to a private key, used to verify transaction signatures. Public keys are safe to share and cannot be used to spend funds.",
    example:
      "Your public key generates your wallet address. You can give your address to anyone, and they can send you Bitcoin—they can't steal from you.",
    saContext:
      "Your public key/address is what you report to SARS as your holding address. Keep records of all addresses you own.",
    relatedTerms: ["private-key", "address", "signature"],
  },
  {
    id: "address",
    term: "Address",
    category: "Crypto 101",
    simpleDefinition:
      "A code that identifies where your cryptocurrency lives on the blockchain. Like your mailing address for crypto.",
    advancedDefinition:
      "A hashed representation of a public key, serving as the destination for blockchain transactions. Bitcoin addresses are 26–35 alphanumeric characters; Ethereum addresses are 42 characters (0x...).",
    example:
      "A Bitcoin address looks like: 1A1z7agoat7SfNxBqbBNr6Jzqau6d7Cxpq. You give this to people who want to send you Bitcoin.",
    saContext:
      "Track your wallet addresses for tax purposes. If you receive Bitcoin from employment, that's taxable as income; if you buy and sell, it's taxable as a capital gain.",
    relatedTerms: ["wallet", "public-key", "transaction"],
  },
  {
    id: "seed-phrase",
    term: "Seed Phrase (Recovery Phrase)",
    category: "Crypto 101",
    simpleDefinition:
      "A list of 12 or 24 simple words that can regenerate your entire wallet. Write it down and store it safely—never online.",
    advancedDefinition:
      "A BIP-39 mnemonic code that derives the master seed for hierarchical deterministic (HD) wallet generation. A 12-word phrase has ~128 bits of entropy.",
    example:
      "A seed phrase might be: 'apple banana carrot dog elephant fox grape house igloo jelly kiwi lemon'. These 12 words can restore your entire wallet on any device.",
    saContext:
      "Store your seed phrase offline (paper, metal, safety deposit box). Losing it means losing access to your crypto forever.",
    relatedTerms: ["wallet", "private-key", "mnemonic"],
  },
  {
    id: "smart-contract",
    term: "Smart Contract",
    category: "Crypto 101",
    simpleDefinition:
      "A program that runs on a blockchain and automatically does what it's supposed to do. Like an agreement that enforces itself.",
    advancedDefinition:
      "A self-executing program deployed on a blockchain (commonly Ethereum) that executes transactions based on coded conditions. Immutable and transparent once deployed.",
    example:
      "A smart contract could say: 'If person A sends me R100, automatically send them 0.001 BTC.' No middleman needed.",
    saContext:
      "Smart contract interactions (DeFi, staking, token swaps) generate taxable events in South Africa. Each transaction must be tracked for tax reporting.",
    relatedTerms: ["ethereum", "defi", "evm", "gas"],
  },

  // ─────────────────────── TRADING ──────────────────────
  {
    id: "hodl",
    term: "HODL",
    category: "Trading",
    simpleDefinition:
      'A term meaning "hold" your cryptocurrency for the long term instead of selling. It comes from a typo on a Bitcoin forum in 2013.',
    advancedDefinition:
      "A long-term investment strategy involving holding cryptocurrency despite volatility, derived from the internet meme born from an intentional misspelling.",
    example:
      "Instead of selling your Bitcoin when the price drops 20%, HODLing means you believe in the long-term value and don't panic-sell.",
    saContext:
      "HODLing for longer than 1 year may help with SARS tax treatment (long-term capital gains vs short-term). Keep detailed records of when you bought.",
    relatedTerms: ["dca", "diamond-hands", "fomo", "pump-and-dump"],
  },
  {
    id: "dca",
    term: "DCA (Dollar-Cost Averaging)",
    category: "Trading",
    simpleDefinition:
      "Buying a fixed amount of cryptocurrency regularly (weekly or monthly) no matter the price. This reduces the impact of price swings.",
    advancedDefinition:
      "A disciplined investment strategy of investing a fixed amount at regular intervals, reducing timing risk and lowering average cost per unit over time.",
    example:
      "Instead of buying R10,000 of Bitcoin once, you buy R500 every week. If the price is high one week, you buy less; if it's low, you buy more. On average, you get a good price.",
    saContext:
      "DCA is tax-efficient for South Africans. Track each purchase separately for cost base. If you sell, you calculate CGT on each purchase individually.",
    relatedTerms: ["hodl", "cost-base", "cgt"],
  },
  {
    id: "pump-and-dump",
    term: "Pump & Dump",
    category: "Trading",
    simpleDefinition:
      "A scheme where traders hype up a coin to drive the price up ('pump'), then sell their holdings ('dump'), leaving others with losses.",
    advancedDefinition:
      "Market manipulation where coordinated actors create artificial demand, drive price inflation, then liquidate positions at peak, leaving retail investors with losses.",
    example:
      "A group buys a small altcoin cheap, hypes it on social media, drives the price up 10x, then sells everything. The price crashes and newcomers lose money.",
    saContext:
      "Pump and dump schemes are illegal in South Africa. Be cautious of coins hyped by celebrities or 'insider groups'—if it sounds too good, it probably is.",
    relatedTerms: ["fomo", "rug-pull", "bagholding"],
  },
  {
    id: "fomo",
    term: "FOMO (Fear of Missing Out)",
    category: "Trading",
    simpleDefinition:
      "The feeling that you must buy a coin immediately because everyone else is, or you'll miss out on gains. Often leads to bad decisions.",
    advancedDefinition:
      "A psychological bias driving irrational investment decisions based on fear of missing profitable opportunities, often at market peaks.",
    example:
      "Bitcoin rises 50% in a month. You buy at the top because you're afraid you'll miss the gains. Then the price crashes 30%, and you panic-sell at a loss.",
    saContext:
      "FOMO-driven trading in South Africa often leads to CGT losses. Keep a trading journal to identify emotional decisions and improve discipline.",
    relatedTerms: ["fud", "diamondHands", "paperhands"],
  },
  {
    id: "cost-base",
    term: "Cost Base",
    category: "Trading",
    simpleDefinition:
      "The original price you paid for your cryptocurrency. When you sell, the profit (or loss) is calculated as: Sale Price - Cost Base.",
    advancedDefinition:
      "The total acquisition cost of an asset including purchase price and transaction fees. Used to calculate taxable gain/loss: Gain = Sale Price - Cost Base - Selling Costs.",
    example:
      "You buy 1 BTC for R700,000 (cost base). You sell it for R1,000,000. Your gain is R300,000 (before fees and tax).",
    saContext:
      "SARS requires you to track your cost base for every crypto purchase. Use tax software or spreadsheets to document each buy. You'll need this for your tax return.",
    relatedTerms: ["cgt", "capital-loss", "tax-loss-harvesting"],
  },
  {
    id: "leverage",
    term: "Leverage (Margin Trading)",
    category: "Trading",
    simpleDefinition:
      "Borrowing money to trade crypto with more than you actually have. You can make bigger gains, but also bigger losses.",
    advancedDefinition:
      "Using borrowed capital (margin) to amplify trading positions. 5x leverage means you trade with 5x your actual capital, increasing both potential returns and liquidation risk.",
    example:
      "You have R10,000. With 10x leverage, you control R100,000 worth of Bitcoin. If Bitcoin goes up 10%, you make R10,000 profit (100% return). But if it drops 10%, you lose everything.",
    saContext:
      "Leveraged trading is risky. In South Africa, losses on margin trades are still taxable, and you must report gains even if you lose overall.",
    relatedTerms: ["liquidation", "margin-call", "futures"],
  },
  {
    id: "liquidation",
    term: "Liquidation",
    category: "Trading",
    simpleDefinition:
      "When an exchange automatically sells your cryptocurrency because you don't have enough collateral to maintain a leveraged position. You lose your position and potentially money.",
    advancedDefinition:
      "Forced closure of a leveraged position when the collateral value falls below the maintenance threshold, triggered by exchange risk management protocols.",
    example:
      "You buy Bitcoin with 5x leverage at R700,000. Bitcoin drops to R630,000. Your position is automatically sold at a loss to prevent the exchange from losing money.",
    saContext:
      "Liquidations generate taxable events. Even if you're devastated by a loss, SARS still wants it reported for CGT purposes.",
    relatedTerms: ["leverage", "margin-call", "stop-loss"],
  },
  {
    id: "grid-trading",
    term: "Grid Trading",
    category: "Trading",
    simpleDefinition:
      "A strategy where you place multiple buy and sell orders at different price levels. As the price bounces, you sell high and buy low automatically.",
    advancedDefinition:
      "A mechanical strategy placing limit orders in a grid pattern above and below a central price. Profits from price oscillation within a defined range.",
    example:
      "Bitcoin is at R700,000. You set up: buy at R650k, R600k, R550k and sell at R750k, R800k, R850k. As the price bounces, you buy dips and sell peaks.",
    saContext:
      "Grid trading generates multiple taxable events. Each buy and sell is a transaction that must be reported. It can be complex to calculate taxes.",
    relatedTerms: ["dca", "technical-analysis", "algorithmic-trading"],
  },

  // ─────────────────────── SECURITY ──────────────────────
  {
    id: "phishing",
    term: "Phishing",
    category: "Security",
    simpleDefinition:
      "A scam where someone sends you a fake message (email, text, link) pretending to be a crypto exchange, and tricks you into giving them your password or seed phrase.",
    advancedDefinition:
      "Social engineering attack using deceptive communication (fake websites, emails) to steal credentials, keys, or personal information.",
    example:
      "You get an email that looks like it's from Valr: 'Confirm your identity here.' The link is fake. You enter your password, and the scammer steals your account.",
    saContext:
      "Always verify URLs before logging into exchanges. Use bookmarks, not email links. South African crypto scams have stolen millions.",
    relatedTerms: ["social-engineering", "rug-pull", "sim-swap"],
  },
  {
    id: "sim-swap",
    term: "SIM Swap Attack",
    category: "Security",
    simpleDefinition:
      "A scam where someone tricks your phone provider into moving your phone number to their SIM card. Then they use your number to reset passwords and steal your crypto.",
    advancedDefinition:
      "Social engineering attack targeting mobile carriers to transfer a victim's phone number to an attacker's SIM, enabling 2FA bypass and account takeover.",
    example:
      "A scammer calls Vodacom pretending to be you, says you lost your phone, and asks to port your number. Now they receive SMS codes meant for you and drain your crypto exchange account.",
    saContext:
      "South African carriers (Vodacom, MTN, Cell C) have been targets. Use authenticator apps (Google Authenticator, Authy) instead of SMS 2FA for exchange accounts.",
    relatedTerms: ["two-factor-authentication", "phishing", "social-engineering"],
  },
  {
    id: "two-factor-authentication",
    term: "2FA (Two-Factor Authentication)",
    category: "Security",
    simpleDefinition:
      "A security feature that requires two things to log in: your password AND a code from your phone. Makes it much harder to hack you.",
    advancedDefinition:
      "Multi-factor authentication requiring two separate verification methods (password + TOTP/SMS/hardware key) to prove identity.",
    example:
      "You log into Luno with your password. Then it asks for a 6-digit code from Google Authenticator. Someone without your phone can't log in.",
    saContext:
      "Always enable 2FA on South African crypto exchanges. Use authenticator apps (Authy, Google Authenticator), not SMS if possible—SMS can be intercepted.",
    relatedTerms: ["authentication", "sim-swap", "password-manager"],
  },
  {
    id: "hardware-wallet",
    term: "Hardware Wallet",
    category: "Security",
    simpleDefinition:
      "A physical device (like a USB stick) that stores your private keys offline. Much safer than keeping crypto on your phone or computer.",
    advancedDefinition:
      "An offline cryptographic device that signs transactions without exposing private keys to networked systems, eliminating exposure to computer-based malware.",
    example:
      "Ledger and Trezor are hardware wallets. You connect to your computer to send crypto, but your private key never touches the internet.",
    saContext:
      "Hardware wallets are the gold standard for storing large amounts of crypto in South Africa. Cost R1,000–R3,000 but worth it for security.",
    relatedTerms: ["cold-storage", "seed-phrase", "offline-wallet"],
  },
  {
    id: "rug-pull",
    term: "Rug Pull",
    category: "Security",
    simpleDefinition:
      "A scam where a new cryptocurrency project takes everyone's money and disappears. Like a builder who takes deposits for a house and vanishes.",
    advancedDefinition:
      "Exit scam where project founders liquidate treasury assets and abandon the project, leaving token holders with worthless assets.",
    example:
      "A new token launches with promises of 100x gains. You invest R10,000. The team withdraws the treasury (R100 million), deletes the website, and disappears.",
    saContext:
      "Many South African crypto projects have been rug pulls. If it promises guaranteed returns or uses pressure tactics, stay away. Research the team and audit the smart contract.",
    relatedTerms: ["pump-and-dump", "scam", "due-diligence"],
  },
  {
    id: "cold-storage",
    term: "Cold Storage",
    category: "Security",
    simpleDefinition:
      "Keeping your cryptocurrency completely offline, away from the internet. Makes it impossible for hackers to steal (but you also can't quickly access it).",
    advancedDefinition:
      "Offline storage of cryptographic keys using hardware wallets, paper wallets, or air-gapped computers, eliminating network exposure.",
    example:
      "You move your long-term Bitcoin holdings to a hardware wallet and store it in a safe. It's not connected to the internet, so hackers can't touch it.",
    saContext:
      "Long-term holdings should be in cold storage. Daily trading money can stay on exchanges, but your 'HODL' stash belongs in a hardware wallet or safe.",
    relatedTerms: ["hardware-wallet", "hot-wallet", "offline-wallet"],
  },

  // ─────────────────────── TAX ──────────────────────
  {
    id: "cgt",
    term: "Capital Gains Tax (CGT)",
    category: "Tax",
    simpleDefinition:
      "A tax you pay on the profit when you sell cryptocurrency. If you bought Bitcoin for R700,000 and sold for R1,000,000, you owe tax on the R300,000 gain.",
    advancedDefinition:
      "South African tax on the appreciation of capital assets, levied at 40% inclusion rate on net capital gains. Indexation relief and annual exemptions apply.",
    example:
      "Buy 1 BTC for R700,000 (cost base). Sell for R1,000,000. Gain = R300,000. Taxable gain = R300,000 × 40% = R120,000. Tax owed depends on your income tax bracket.",
    saContext:
      "SARS taxes cryptocurrency gains as capital gains. You must report each transaction. Use tax software or an accountant to calculate CGT accurately. Annual exemption (2026): R50,000 per person.",
    relatedTerms: ["cost-base", "capital-loss", "capital-asset"],
  },
  {
    id: "capital-loss",
    term: "Capital Loss",
    category: "Tax",
    simpleDefinition:
      "When you sell cryptocurrency for less than you paid for it, you have a loss. You can use this loss to offset other gains and reduce your tax bill.",
    advancedDefinition:
      "Loss realized on disposal of capital assets, deductible against capital gains. Net capital losses cannot be carried forward indefinitely in South Africa.",
    example:
      "You buy Ethereum for R50,000 but sell for R30,000. You have a R20,000 capital loss. You can use this to offset other crypto gains.",
    saContext:
      "SARS allows you to offset capital losses against capital gains in the same year. Keep records of all losses. Tax-loss harvesting can be a useful strategy.",
    relatedTerms: ["cgt", "cost-base", "tax-loss-harvesting"],
  },
  {
    id: "capital-asset",
    term: "Capital Asset",
    category: "Tax",
    simpleDefinition:
      "Something you buy and hold with the intention of keeping it (not selling it quickly). For tax purposes, SARS may treat your crypto as a capital asset if you hold it long-term.",
    advancedDefinition:
      "An asset held primarily for investment purposes. If held for investment (not trading), gains are capital gains (CGT applies). If held for trading, gains are trading income (income tax applies).",
    example:
      "You buy Bitcoin and hold for 5 years—SARS likely treats it as a capital asset, and you pay CGT on the gain. If you trade frequently, SARS might call it trading income.",
    saContext:
      "SARS looks at your intention when you buy. Hold-to-value = capital asset (CGT). Frequent buying/selling = trading income (income tax, higher rate). Document your intent.",
    relatedTerms: ["cgt", "trading-income", "long-term-holding"],
  },
  {
    id: "trading-income",
    term: "Trading Income",
    category: "Tax",
    simpleDefinition:
      "Money you make from frequently buying and selling cryptocurrency (like a business). Taxed as regular income at your income tax rate (usually higher than CGT).",
    advancedDefinition:
      "Income derived from the regular or frequent trading of assets. Subject to income tax at marginal rates rather than capital gains tax, typically resulting in higher tax liability.",
    example:
      "You buy and sell crypto 50 times a year. SARS considers this a 'trading business,' not investment. Your profits are taxed as income (up to 45%) instead of capital gains (40% inclusion).",
    saContext:
      "If SARS thinks you're trading (not investing), they tax you as business income. This is expensive. Keep careful records of your intentions and holding periods.",
    relatedTerms: ["cgt", "capital-asset", "business-income"],
  },
  {
    id: "sars",
    term: "SARS (South African Revenue Service)",
    category: "Tax",
    simpleDefinition:
      "The South African government's tax authority. They collect taxes, including taxes on your cryptocurrency gains.",
    advancedDefinition:
      "South Africa's federal tax collection agency responsible for administering tax law and compliance enforcement.",
    example:
      "When you file your annual tax return (ITR12), you report your crypto gains to SARS. They decide if they agree with your calculations.",
    saContext:
      "SARS has been cracking down on crypto non-disclosure. If you don't report crypto gains and get audited, penalties can be 75%+ of unpaid taxes. Always comply.",
    relatedTerms: ["tax-return", "audit", "compliance"],
  },
  {
    id: "tax-return",
    term: "Tax Return (ITR12)",
    category: "Tax",
    simpleDefinition:
      "A form you fill out once a year (by November) that tells SARS how much money you made, including crypto gains. Determines how much tax you owe.",
    advancedDefinition:
      "Annual tax assessment document submitted to SARS reporting income, deductions, and taxable capital gains. The primary compliance mechanism for individual taxpayers.",
    example:
      "In November 2026, you file your 2025 tax return listing: salary, crypto capital gains, losses, deductions. SARS calculates your tax bill.",
    saContext:
      "South African tax year runs March–February. You must file by November. Include all crypto transactions. Use a tax professional if you have complex holdings.",
    relatedTerms: ["sars", "compliance", "audit"],
  },
  {
    id: "tax-loss-harvesting",
    term: "Tax-Loss Harvesting",
    category: "Tax",
    simpleDefinition:
      "A strategy where you deliberately sell a losing cryptocurrency to lock in the loss, then use that loss to reduce your overall tax bill.",
    advancedDefinition:
      "Tax planning strategy of realizing losses on underperforming assets to offset capital gains and reduce tax liability. Subject to wash-sale and substance-over-form rules.",
    example:
      "You have a R50,000 gain on Bitcoin and a R50,000 loss on Ethereum. Sell the losing Ethereum, offset the gain, and owe R0 tax on the combined position.",
    saContext:
      "Legal in South Africa if done correctly. Can be powerful for crypto portfolios with winners and losers. Work with a tax professional to ensure compliance.",
    relatedTerms: ["capital-loss", "cgt", "tax-efficiency"],
  },
];

/**
 * Helper functions for glossary access
 */

export function getTermById(id: string): DictTerm | undefined {
  return glossaryTerms.find((term) => term.id === id);
}

export function getTermsByCategory(
  category: DictTerm["category"]
): DictTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

export function getCategories(): DictTerm["category"][] {
  const categories = new Set(glossaryTerms.map((term) => term.category));
  return Array.from(categories);
}

export function searchTerms(query: string): DictTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.simpleDefinition.toLowerCase().includes(lowerQuery) ||
      term.advancedDefinition.toLowerCase().includes(lowerQuery)
  );
}
