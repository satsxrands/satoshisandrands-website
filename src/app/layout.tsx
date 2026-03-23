import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Nunito } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SatoshisAndRands — Crypto Tax Tools for Mzansi",
  description:
    "Free crypto tax tools for South Africans. CGT Calculator, Trader/Investor Classifier, and CARF Compliance Checker. No signup. No data stored.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SatoshisAndRands — Crypto Tax Tools for Mzansi",
    description: "Free crypto tax tools built for South Africa. SARS-compliant calculations.",
    siteName: "SatoshisAndRands",
    images: [{ url: "/icon-512.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceMono.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
