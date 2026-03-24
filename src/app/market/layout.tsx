import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Crypto Prices in ZAR — SatoshisAndRands",
  description: "Live BTC, ETH, SOL, XRP and BNB prices in South African Rand. Updated every 60 seconds.",
  openGraph: {
    title: "Live Crypto Prices in ZAR — SatoshisAndRands",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
