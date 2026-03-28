import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn — Crypto & Tax Education — SatoshisAndRands",
  description:
    "Free guides on Bitcoin, wallet security, Ethereum, South African crypto tax, DCA, grid trading, and avoiding scams.",
  openGraph: {
    title: "Learn — Crypto & Tax Education — SatoshisAndRands",
    description:
      "Free guides on Bitcoin, wallet security, Ethereum, South African crypto tax, DCA, grid trading, and avoiding scams.",
    type: "website",
    url: "https://satoshisandrands.com/learn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SatoshisAndRands Education Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
