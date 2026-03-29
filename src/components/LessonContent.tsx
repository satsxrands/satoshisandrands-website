"use client";

interface LessonContentProps {
  contentHTML: string;
  title: string;
}

export function LessonContent({ contentHTML, title }: LessonContentProps) {
  return (
    <article
      style={{
        flex: 1,
        color: "var(--white)",
      }}
    >
      {/* Article Content */}
      <div
        style={{
          fontSize: "15px",
          fontFamily: "'Nunito', sans-serif",
          lineHeight: 1.7,
          color: "var(--muted)",
        }}
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </article>
  );
}

// Inline styles for HTML content (applied via global CSS or styled-jsx)
// Add this to globals.css or next to your layout:

const htmlContentStyles = `
  article h2 {
    margin: 32px 0 16px 0;
    font-size: 22px;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--white);
    letter-spacing: 0.5px;
    line-height: 1.2;
  }

  article h3 {
    margin: 24px 0 12px 0;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    color: var(--white);
    letter-spacing: 0.3px;
  }

  article p {
    margin: 12px 0 16px 0;
    line-height: 1.7;
    color: var(--muted);
  }

  article ul {
    margin: 16px 0 16px 20px;
    padding-left: 0;
    list-style: none;
  }

  article li {
    margin: 8px 0;
    padding-left: 24px;
    position: relative;
    line-height: 1.6;
    color: var(--muted);
  }

  article li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--gold);
    font-weight: 700;
  }

  article strong {
    color: var(--white);
    font-weight: 700;
  }

  article code {
    background: rgba(255, 255, 255, 0.05);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    color: var(--gold);
  }

  article blockquote {
    margin: 20px 0;
    padding: 16px 20px;
    border-left: 3px solid var(--gold);
    background: rgba(245, 166, 35, 0.05);
    border-radius: 6px;
    font-style: italic;
    color: var(--muted);
  }

  article a {
    color: var(--gold);
    text-decoration: none;
    border-bottom: 1px solid rgba(245, 166, 35, 0.3);
    transition: all 0.2s ease;
  }

  article a:hover {
    border-bottom-color: var(--gold);
  }
`;
