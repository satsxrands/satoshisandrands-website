import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Dictionary — Glossary — SatoshisAndRands",
  description:
    "Learn crypto and tax terms with simple and advanced definitions. South African context for Bitcoin, Ethereum, DeFi, security, and SARS tax guidance.",
  openGraph: {
    title: "Crypto Dictionary — SatoshisAndRands",
    description:
      "Searchable glossary of 50+ crypto terms with simple, advanced, and South African context definitions.",
    type: "website",
    url: "https://satoshisandrands.com/learn/glossary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crypto Dictionary",
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

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
