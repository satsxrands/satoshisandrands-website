# SatoshisAndRands — Crypto & Tax Education for South Africa

![SatoshisAndRands](https://satoshisandrands.com/og-image.png)

Educational platform helping South Africans understand cryptocurrency, blockchain technology, and tax obligations in a clear, accessible way.

**Live Site**: [satoshisandrands.com](https://satoshisandrands.com)
**Social**: [@SatoshisAndRands](https://instagram.com/satoshisandrands) on Instagram & X

---

## Features

- 📚 **Learn Hub** — Comprehensive glossary, guides, and educational modules
- 🧮 **Tax Resources** — SARS-specific crypto tax information and calculations
- 📊 **Market Data** — Real-time crypto prices and market insights
- 🎨 **Accessible Design** — Dark-mode first, mobile-responsive, WCAG compliant
- ⚡ **Fast** — Built with Next.js 16, deployed on Vercel Edge Network

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + custom Geist design
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)
- **Language**: TypeScript

---

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SatoshisAndRands/website.git
cd website

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site locally.

### Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSatoshisAndRands%2Fwebsite)

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# CoinMarketCap API (for live crypto prices)
# Get free key at https://coinmarketcap.com/api/
CMC_API_KEY=your_api_key_here

# Vercel Analytics (auto-configured on deployment)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id_here
```

---

## Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── learn/              # Educational content
│   │   │   ├── page.tsx
│   │   │   ├── glossary.tsx    # Crypto terminology
│   │   │   └── [slug]/         # Individual guides
│   │   ├── tax/                # SARS & tax resources
│   │   └── about/              # About page
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── content/                # Educational content (markdown, JSON)
│   │   ├── learn/
│   │   ├── glossary.ts
│   │   └── tax-guides.ts
│   ├── lib/                    # Utilities & helpers
│   │   ├── api/                # External API integrations
│   │   ├── utils.ts
│   │   └── cn.ts               # Tailwind merge utility
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## Contributing

We welcome contributions from the South African tech community! Here's how:

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Ideas
- 📝 Improve educational content or glossary definitions
- 🐛 Report bugs or suggest features
- 🎨 Design improvements or accessibility fixes
- 🧪 Add tests
- 📚 Translate content for other African countries

### Code Style
- Use **TypeScript** (no `any` types)
- Follow **Tailwind CSS** conventions for styling
- Keep components **small and focused**
- Write **descriptive commit messages**

---

## Roadmap

- [x] MVP launch (Mar 2026)
- [ ] Education Hub expansion (Jun 2026)
- [ ] Mobile app (Oct 2026)
- [ ] Monetization (Nov 2026)
- [ ] Multi-language support
- [ ] Interactive tax calculator
- [ ] Community forum

See [Project Timeline](./TIMELINE.md) for detailed milestones.

---

## License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) file for details.

You're free to:
- Use for personal or commercial projects
- Modify and distribute
- Include in proprietary applications

Just include the original license and attribution.

---

## Support & Contact

- **Website**: [satoshisandrands.com](https://satoshisandrands.com)
- **Email**: hello@satoshisandrands.com
- **Instagram**: [@SatoshisAndRands](https://instagram.com/satoshisandrands)
- **X/Twitter**: [@SatoshisAndRands](https://twitter.com/satoshisandrands)
- **GitHub Issues**: [Report a bug](https://github.com/SatoshisAndRands/website/issues)

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Fonts: [Geist](https://vercel.com/font) by Vercel
- Data sources: CoinMarketCap, SARS publications

---

**Made with ❤️ in South Africa**

*Educating South Africans about crypto, blockchain, and digital assets — one post at a time.*
