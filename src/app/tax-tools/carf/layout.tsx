import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CARF Compliance Checker South Africa — SatoshisAndRands",
  description:
    "Check your CARF (Crypto-Asset Reporting Framework) compliance status. SA exchanges now report to SARS automatically. See if you're at risk and what to do next.",
  openGraph: {
    title: "CARF Compliance Checker — South Africa",
    description:
      "Are you CARF compliant? SA exchanges report to SARS automatically. Free checklist to assess your crypto tax disclosure risk and next steps.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
