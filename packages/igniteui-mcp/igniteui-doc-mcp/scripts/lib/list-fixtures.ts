import { readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";

/**
 * Fixtures shared by the TypeScript renderer tests and the .NET backend tests.
 * Both load these rows into an in-memory SQLite database and compare the rendered
 * text to `expected.txt` with ordinal equality — that is what keeps the two
 * renderers from drifting.
 */
export interface ListFixture {
  name: string;
  framework: string;
  filter?: string;
  detail?: "groups" | "docs";
  group?: string;
  docs: {
    framework: string;
    filename: string;
    component: string;
    toc_name: string | null;
    premium?: number;
    keywords?: string;
    summary?: string;
  }[];
  docToc: {
    framework: string;
    filename: string;
    group_key: string;
    section: string;
    group_label: string;
    path: string;
    ord: number;
    landing?: number;
  }[];
  docGroups: {
    framework: string;
    group_key: string;
    section: string;
    group_label: string;
    summary: string | null;
    doc_count: number;
    ord: number;
  }[];
}

export const FIXTURES_DIR = resolve(
  import.meta.dirname,
  "..",
  "..",
  "..",
  "shared-fixtures",
  "list-components"
);

export function fixtureNames(): string[] {
  return readdirSync(FIXTURES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

export function loadFixture(name: string): ListFixture {
  const input = JSON.parse(readFileSync(join(FIXTURES_DIR, name, "input.json"), "utf-8"));
  return { name, ...input };
}

export function expectedPath(name: string): string {
  return join(FIXTURES_DIR, name, "expected.txt");
}
