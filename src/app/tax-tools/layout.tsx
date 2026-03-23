import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";

export default function TaxToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      {/* Fixed app shell below the nav */}
      <div
        style={{
          position: "fixed",
          top: "var(--topnav-h)",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
        }}
      >
        <Sidebar />

        {/* Main content column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Breadcrumb />

          {/* Scrollable tool area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}

            {/* Footer */}
            <footer
              style={{
                borderTop: "1px solid var(--border)",
                padding: "20px 40px",
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: 16,
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                }}
              >
                SATOSHIS & RANDS
              </span>
              <span
                style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--muted)",
                }}
              >
                Not tax advice. Consult a registered tax practitioner. © 2026
                SatoshisAndRands
              </span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
