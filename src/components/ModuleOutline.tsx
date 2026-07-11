"use client";

import { useEffect, useRef, useState } from "react";
import type { Module } from "@/content/learn/modules";

interface ModuleOutlineProps {
  module: Module;
}

export function ModuleOutline({ module }: ModuleOutlineProps) {
  const [activeLesson, setActiveLesson] = useState<string>(
    module.lessons[0]?.id ?? "",
  );
  const visibleIds = useRef<Set<string>>(new Set());

  // Scroll-spy: highlight the lesson whose section heading is at the top of
  // the reading area. The asymmetric rootMargin creates a thin "active band"
  // just below the sticky breadcrumb so exactly one heading counts as current.
  useEffect(() => {
    visibleIds.current = new Set();
    const els = module.lessons
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleIds.current.add(entry.target.id);
          else visibleIds.current.delete(entry.target.id);
        }
        const firstVisible = module.lessons.find((l) =>
          visibleIds.current.has(l.id),
        );
        if (firstVisible) {
          setActiveLesson(firstVisible.id);
        } else if (window.scrollY < 200) {
          setActiveLesson(module.lessons[0]?.id ?? "");
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [module]);

  const handleLessonClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const el = document.getElementById(id);
    if (!el) return; // no matching heading — let the browser handle the href
    e.preventDefault();
    setActiveLesson(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <aside
      style={{
        width: "240px",
        display: "none",
      }}
      className="desktop-sidebar"
    >
      <div
        style={{
          position: "sticky",
          top: "60px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "20px",
          maxHeight: "calc(100vh - 120px)",
          overflowY: "auto",
        }}
      >
        {/* Module Outline Header */}
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "13px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.5px",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Lesson Outline
        </h3>

        {/* Lessons List */}
        <ol
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {module.lessons.map((lesson, index) => (
            <li key={lesson.id}>
              <a
                href={`#${lesson.id}`}
                onClick={(e) => handleLessonClick(e, lesson.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  fontFamily: "'Nunito', sans-serif",
                  color:
                    activeLesson === lesson.id ? "var(--gold)" : "var(--muted)",
                  backgroundColor:
                    activeLesson === lesson.id
                      ? "rgba(245, 166, 35, 0.1)"
                      : "transparent",
                  textDecoration: "none",
                  borderLeft: `3px solid ${
                    activeLesson === lesson.id ? "var(--gold)" : "transparent"
                  }`,
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) => {
                  if (activeLesson !== lesson.id) {
                    e.currentTarget.style.color = "var(--white)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLesson !== lesson.id) {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {/* Lesson Number */}
                <span
                  style={{
                    minWidth: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--muted)",
                  }}
                >
                  {index + 1}
                </span>

                {/* Lesson Title */}
                <span
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {lesson.title}
                </span>
              </a>
            </li>
          ))}
        </ol>

        {/* Lesson Estimate Footer */}
        <div
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid var(--border)",
            fontSize: "12px",
            fontFamily: "'Space Mono', monospace",
            color: "var(--muted)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div>
            <span style={{ fontWeight: 700 }}>Total:</span> {module.estimatedTime}{" "}
            min
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Lessons:</span>{" "}
            {module.lessons.length}
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Level:</span>{" "}
            <span style={{ textTransform: "capitalize" }}>
              {module.difficulty}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
