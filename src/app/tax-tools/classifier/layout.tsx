import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Trader vs Investor Classifier — SatoshisAndRands",
  description:
    "Are you a crypto trader or investor under SARS rules? Answer 5 questions to find out whether CGT or income tax applies to your crypto activity in South Africa.",
  openGraph: {
    title: "Crypto Trader vs Investor Classifier — South Africa",
    description:
      "Find out if SARS classifies you as a crypto trader (income tax up to 45%) or investor (CGT, 40% inclusion). Free 5-question quiz.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
