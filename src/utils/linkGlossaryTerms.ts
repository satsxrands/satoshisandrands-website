import { glossaryTerms, type DictTerm } from "@/content/learn/glossary";

/**
 * Auto-links glossary terms in HTML content
 * Finds glossary term names and wraps them with links to the glossary
 * Case-insensitive, whole-word matching to avoid partial matches
 */
export function linkGlossaryTerms(html: string): string {
  let result = html;

  // Sort terms by length (longest first) to avoid overlapping replacements
  // e.g., "Capital Gains Tax" before "Capital" to avoid double-linking
  const sortedTerms = [...glossaryTerms].sort(
    (a, b) => b.term.length - a.term.length
  );

  sortedTerms.forEach((term) => {
    // Create case-insensitive regex with word boundaries
    // Avoid matching inside HTML tags or existing links
    const escapedTerm = term.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(
      `(?<!href=")\\b${escapedTerm}\\b(?!")`,
      "gi"
    );

    // Only replace if not already inside an <a> tag or inside tags
    result = result.replace(regex, (match) => {
      // Check if match is inside an HTML tag or already a link
      const beforeMatch = result.substring(0, result.indexOf(match));
      const openTags = (beforeMatch.match(/<[^>]*$/g) || []).length;
      const closeTags = (beforeMatch.match(/<\/[^>]*>/g) || []).length;

      // Simple heuristic: if we're inside a tag, don't replace
      if (openTags > closeTags) {
        return match;
      }

      return `<a href="/learn/glossary?term=${term.id}" class="glossary-link">${match}</a>`;
    });
  });

  return result;
}

/**
 * Get a glossary term ID from a term name (case-insensitive)
 */
export function getTermIdByName(name: string): string | undefined {
  const term = glossaryTerms.find(
    (t) => t.term.toLowerCase() === name.toLowerCase()
  );
  return term?.id;
}
