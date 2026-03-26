/**
 * Sanitize user input for FTS4 MATCH syntax.
 * Strips characters that are FTS4 operators or cause syntax errors:
 *   " (phrase delimiter), ( ) (grouping), : (column filter), @ (internal)
 * Preserves hyphens — the porter tokenizer handles them consistently.
 * Preserves trailing * — FTS4 prefix queries (e.g. grid*) rely on it.
 */
export function sanitizeFtsQuery(queryText: string): string {
  return queryText
    .replace(/["(){}[\]:@]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => {
      // Terms ending with * are prefix queries — don't quote them
      // because FTS4 treats "grid*" as a literal match for the
      // asterisk character, while unquoted grid* does prefix expansion.
      // Drop terms that are only asterisks (e.g. *, **) — they have
      // no actual prefix and would cause an FTS4 syntax error.
      if (term.endsWith("*")) {
        return /[^*]/.test(term) ? term : null;
      }
      return `"${term}"`;
    })
    .filter(Boolean)
    .join(" OR ");
}
