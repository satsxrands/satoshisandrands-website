import Link from "next/link";
import { notFound } from "next/navigation";
import {
  modules,
  getModuleBySlug,
  getRelatedModules,
  type Module,
} from "@/content/learn/modules";
import { ShareButton } from "@/components/ShareButton";
import { ModuleOutline } from "@/components/ModuleOutline";
import { LessonContent } from "@/components/LessonContent";
import { RelatedModules } from "@/components/RelatedModules";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

const categoryColors: Record<string, string> = {
  Security: "#EF233C",
  "Crypto 101": "#06D6A0",
  Trading: "#F5A623",
  Tax: "#F5A623",
};

export default async function ModuleDetailPage({ params }: Props) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  const borderColor = categoryColors[module.category];
  const formattedDate = module.publishedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--white)",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* Sticky Breadcrumb */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(13, 13, 13, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          zIndex: 50,
          padding: "12px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            fontSize: "13px",
            fontFamily: "'Nunito', sans-serif",
            color: "var(--muted)",
            display: "flex",
            gap: "8px",
          }}
        >
          <Link href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Home
          </Link>
          <span>›</span>
          <Link href="/learn" style={{ color: "var(--gold)", textDecoration: "none" }}>
            Learn
          </Link>
          <span>›</span>
          <span style={{ color: "var(--white)" }}>{module.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px",
          display: "flex",
          gap: "40px",
        }}
      >
        {/* Sidebar */}
        <ModuleOutline module={module} activeLesson="lesson-1" />

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Share Button (Top Right) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "24px",
            }}
          >
            <div>
              {/* Category Tag */}
              <div
                style={{
                  display: "inline-flex",
                  width: "fit-content",
                  fontSize: "11px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  color: borderColor,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {module.category}
              </div>

              {/* Title */}
              <h1
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "36px",
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "var(--white)",
                  letterSpacing: "1px",
                  lineHeight: 1.2,
                }}
              >
                {module.title}
              </h1>

              {/* Metadata */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "12px",
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--muted)",
                  flexWrap: "wrap",
                }}
              >
                <span>{formattedDate}</span>
                <span>·</span>
                <span>{module.estimatedTime} min read</span>
                <span>·</span>
                <span style={{ textTransform: "capitalize" }}>
                  {module.difficulty}
                </span>
                <span>·</span>
                <span>{module.lessons.length} lessons</span>
              </div>
            </div>

            {/* Share Button */}
            <ShareButton
              title={module.title}
              url={`https://satoshisandrands.com/learn/${module.slug}`}
            />
          </div>

          {/* Content Divider */}
          <div
            style={{
              height: "1px",
              background: "var(--border)",
              margin: "24px 0 32px 0",
            }}
          />

          {/* Lesson Content */}
          <LessonContent
            contentHTML={module.contentHTML}
            title={module.title}
          />

          {/* Related Modules */}
          <RelatedModules module={module} allModules={modules} />

          {/* Navigation Footer */}
          <div
            style={{
              marginTop: "60px",
              paddingTop: "40px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/learn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontFamily: "'Nunito', sans-serif",
                color: "var(--gold)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              className="back-link"
            >
              ← Back to Learning Hub
            </Link>

            {/* Next Module CTA (optional) */}
            <div
              style={{
                fontSize: "12px",
                fontFamily: "'Space Mono', monospace",
                color: "var(--muted)",
              }}
            >
              Module {modules.indexOf(module) + 1} of {modules.length}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "40px",
          textAlign: "center",
          color: "var(--muted)",
          fontSize: "13px",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <p style={{ margin: "0 0 12px 0" }}>
          © 2026 SatoshisAndRands. Education resources for South Africa.
        </p>
        <p style={{ margin: 0, fontSize: "12px" }}>
          Not financial advice. Always do your own research (DYOR) and consult
          professionals.
        </p>
      </footer>
    </main>
  );
}
