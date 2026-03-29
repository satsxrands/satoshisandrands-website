import type { Metadata } from "next";
import { getModuleBySlug } from "@/content/learn/modules";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    return {
      title: "Module Not Found — SatoshisAndRands",
    };
  }

  const title = `${module.title} — Learn — SatoshisAndRands`;
  const description = module.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://satoshisandrands.com/learn/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: module.title,
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
}

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
