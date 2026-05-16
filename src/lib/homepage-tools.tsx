import type { ReactNode } from "react";
import { ClassifierIcon, CarfIcon, CgtIcon, NewsIcon } from "@/components/TaxToolIcons";

export type HomepageTool = {
  href: string;
  icon: ReactNode;
  accent: string;
  title: string;
  desc: string;
};

export const homepageTools: HomepageTool[] = [
  {
    href: "/tax-tools/classifier",
    icon: <ClassifierIcon size={32} />,
    accent: "var(--gold)",
    title: "TRADER CLASSIFIER",
    desc: "5-question quiz: SARS investor vs trader.",
  },
  {
    href: "/tax-tools/carf",
    icon: <CarfIcon size={32} />,
    accent: "var(--red)",
    title: "CARD CHECKER",
    desc: "CARF compliance risk check for SA exchanges.",
  },
  {
    href: "/market",
    icon: <CgtIcon size={32} />,
    accent: "var(--accent-blue)",
    title: "LIVE MARKET DATA",
    desc: "BTC/ZAR, ETH/ZAR, SOL — live every 60 sec.",
  },
  {
    href: "/news",
    icon: <NewsIcon size={32} />,
    accent: "var(--green)",
    title: "SA CRYPTO NEWS",
    desc: "Sentiment-scored headlines, updated 15-min.",
  },
];
