import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SA Crypto News — SatoshisAndRands",
  description: "Latest crypto news relevant to South African holders. Bitcoin, regulation, SARS, and market updates.",
  openGraph: {
    title: "SA Crypto News — SatoshisAndRands",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
