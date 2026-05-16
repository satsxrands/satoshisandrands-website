import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/market", label: "Market" },
  { href: "/tax-tools", label: "Tools" },
  { href: "/learn", label: "Education" },
];

const SOCIALS: { href: string; label: string }[] = [
  { href: "https://instagram.com/satoshisandrands", label: "Instagram" },
  { href: "https://www.tiktok.com/@satsxrands", label: "TikTok" },
  { href: "https://www.facebook.com/profile.php?id=61578408320588", label: "Facebook" },
];

export function PrimaryNav() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(13,13,13,0.85)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border)",
      padding: "12px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
    }}>
      <ul style={{ display: "flex", gap: 20, listStyle: "none", margin: 0, padding: 0 }}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--white)",
              textDecoration: "none",
              padding: "6px 4px",
            }}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <ul style={{ display: "flex", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
        {SOCIALS.map((s) => (
          <li key={s.href}>
            <Link href={s.href} style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
            }}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
