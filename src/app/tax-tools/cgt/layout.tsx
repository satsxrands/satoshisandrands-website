import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto CGT Calculator South Africa — SatoshisAndRands",
  description:
    "Calculate your crypto capital gains tax (CGT) under SARS 2026/27 rules. Supports investor (40% inclusion) and trader (income tax) paths. R50,000 annual exclusion applied automatically.",
  openGraph: {
    title: "Crypto CGT Calculator South Africa",
    description:
      "Free SA crypto capital gains tax calculator. SARS 2026/27 brackets, R50,000 exclusion, investor vs trader classification.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
