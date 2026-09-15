import { mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { basename, dirname, join, resolve } from "path";
import type { TocEntry } from "./toc-index.js";

/**
 * One membership of a doc in the documentation TOC. A record always corresponds
 * to a file the exporter actually wrote — there are no metadata-only records.
 * A cross-listed page (reachable from two TOC paths) produces two records that
 * share `file` and differ in `path`.
 */
export interface TocSidecarRecord {
  file: string;
  section: string;
  groupKey: string;
  groupLabel: string;
  path: string;
  ord: number;
  landing: boolean;
  /**
   * Display-only, written by the exporter. A sidecar round-tripped from the
   * committed DB (`restore-docs-final.ts --toc-stubs`, for a framework a CI run
   * did not rebuild) cannot supply these, so ingestion must not require them.
   */
  href?: string;
  name?: string;
  premium?: boolean;
}

/**
 * Accumulates sidecar records in memory and replaces `dist/toc-index/<fw>.json`
 * atomically at the end of an export run.
 *
 * The file must be replaced rather than merged: `clear:build` deliberately does
 * not reach `dist/toc-index/`, so a merged sidecar would keep resurrecting
 * memberships for TOC entries that have since been deleted, renamed, or newly
 * excluded for a platform — docs would vanish from the docs site but keep
 * appearing under their old group in `list_components`.
 */
export class TocSidecar {
  private records: TocSidecarRecord[] = [];
  private files = new Set<string>();
  private hrefNames = new Map<string, string>();
  private outPath: string;

  constructor(framework: string, root: string) {
    this.outPath = join(resolve(root), "dist", "toc-index", `${framework}.json`);
  }

  /** Flat name already resolved for this href, if it has been seen before. */
  nameFor(href: string): string | undefined {
    return this.hrefNames.get(href);
  }

  record(entry: TocEntry, file: string): void {
    this.hrefNames.set(entry.href, file);
    this.files.add(file);
    this.records.push({
      file,
      href: entry.href,
      name: entry.name,
      section: entry.section,
      groupKey: entry.groupKey,
      groupLabel: entry.groupLabel,
      path: entry.path,
      ord: entry.ord,
      premium: entry.premium,
      landing: entry.landing,
    });
  }

  get recordCount(): number {
    return this.records.length;
  }

  get fileCount(): number {
    return this.files.size;
  }

  /**
   * @param writtenFiles distinct output filenames the export loop produced.
   *   Asserted equal to the sidecar's distinct files so a record can never
   *   describe a doc that is not in `docs_processing`, or vice versa.
   */
  write(writtenFiles: Set<string>): void {
    if (writtenFiles.size !== this.files.size) {
      throw new Error(
        `TOC sidecar mismatch: ${this.files.size} distinct recorded file(s) but ` +
        `${writtenFiles.size} distinct file(s) written.`
      );
    }
    for (const f of writtenFiles) {
      if (!this.files.has(f)) {
        throw new Error(`TOC sidecar mismatch: ${f} was written but not recorded.`);
      }
    }

    mkdirSync(dirname(this.outPath), { recursive: true });
    const tmp = `${this.outPath}.tmp`;
    try {
      writeFileSync(tmp, `${JSON.stringify(this.records, null, 2)}\n`, "utf-8");
      renameSync(tmp, this.outPath);
    } catch (err) {
      rmSync(tmp, { force: true });
      throw err;
    }
    console.error(`  TOC sidecar: ${this.records.length} record(s) -> ${this.outPath}`);
  }
}

/**
 * Pick a flat filename that is not already taken.
 *
 * The previous implementation tried two fixed candidates and used the second
 * unconditionally, silently overwriting another doc when it was also taken.
 * Candidates are tried in the old order — flattened, `parent-file`, then the
 * full href — and only then fall back to a numeric suffix, so names produced
 * today do not change.
 */
export function resolveUniqueName(
  flatName: string,
  href: string,
  usedNames: Map<string, string>
): string {
  const normalized = href.replace(/\\/g, "/");
  const parts = normalized.split("/");

  const candidates = [flatName];
  if (parts.length >= 2) {
    candidates.push(`${parts[parts.length - 2]}-${basename(normalized)}`);
  }
  candidates.push(normalized.replace(/\//g, "-"));

  for (const candidate of candidates) {
    if (!usedNames.has(candidate)) return candidate;
  }

  const ext = flatName.endsWith(".md") ? ".md" : "";
  const stem = ext ? flatName.slice(0, -ext.length) : flatName;
  for (let n = 2; ; n++) {
    const candidate = `${stem}-${n}${ext}`;
    if (!usedNames.has(candidate)) {
      console.error(
        `[WARN] Filename collision for "${href}" — falling back to "${candidate}". ` +
        `A TOC restructure may have changed doc identities.`
      );
      return candidate;
    }
  }
}
