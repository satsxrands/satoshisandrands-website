// Server Component — emits <script type="application/ld+json">.
// Inputs are hand-constructed schema.org objects from trusted code paths
// (never user input). JSON.stringify is the canonical Next.js JSON-LD pattern.
export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  let html: string;
  try {
    html = JSON.stringify(data);
  } catch {
    if (process.env.NODE_ENV === "development") {
      throw new Error(`JsonLd: cannot serialize id="${id}"`);
    }
    return null;
  }
  return (
    <script
      id={id}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
