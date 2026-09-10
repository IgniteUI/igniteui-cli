export interface DocFrontmatter {
  component: string;
  keywords: string;
  summary: string;
  premium: boolean;
  content: string;
}

/** Parse the frontmatter a compression run writes at the top of a `docs_final` doc. */
export function parseFrontmatter(raw: string): DocFrontmatter {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { component: "", keywords: "", summary: "", premium: false, content: raw };

  const block = match[1];
  let component = "";
  let keywords = "";
  let summary = "";
  let premium = false;

  for (const line of block.split("\n")) {
    const m1 = line.match(/^component:\s*(.+)/);
    if (m1) component = m1[1].trim();
    const m2 = line.match(/^keywords:\s*(.+)/);
    if (m2) keywords = m2[1].trim();
    const m3 = line.match(/^summary:\s*(.+)/);
    if (m3) summary = m3[1].trim();
    const m4 = line.match(/^premium:\s*(.+)/);
    if (m4) premium = m4[1].trim() === "true";
  }

  const content = raw.slice(match[0].length).replace(/^\r?\n/, "");
  return { component, keywords, summary, premium, content };
}
