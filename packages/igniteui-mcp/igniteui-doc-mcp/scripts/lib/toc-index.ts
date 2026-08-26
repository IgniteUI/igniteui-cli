/**
 * Shared TOC walker for the documentation exporters.
 *
 * Both TOC sources (angular's `toc.yml` and the xplat `toc.json`) are arrays of
 * nodes with the same shape: `name`, optional `href`, optional `items`, and
 * `header: true` for the editorial section dividers. The exporters previously
 * flattened these to `{ name, href, premium }` and discarded the tree; this
 * walker keeps the structure so docs can be grouped by it.
 *
 * Derivation rules (normative, see TOC-GROUPING-PLAN.md §4.1):
 *
 *  1. `section` is the name of the most recent `header: true` node. Headers are
 *     siblings of the entries they introduce, never ancestors, so a header sets
 *     `section` and does not push onto `ancestors`. An excluded header still
 *     updates `section` so later siblings never inherit a stale one.
 *  2. `ancestors` is the chain of names from the first node *below* the header
 *     down to and including the entry itself. A header's own href yields `[]`.
 *     `path` is that chain prefixed with the section.
 *  3. `groupLabel` is decided by the top-level node below the header: if that
 *     node has children its name labels the whole subtree however deep,
 *     otherwise the entry sits at section level. Depth alone is not enough —
 *     `Data Grid` carries both an href and children, so `grid/grid.md` has a
 *     one-element ancestor chain yet must group with its 44 children.
 *  4. `groupKey` is the section, or `"<section> > <groupLabel>"`.
 */

export interface TocNode {
  name?: string;
  href?: string;
  header?: boolean;
  premium?: boolean;
  exclude?: string[];
  items?: TocNode[];
}

export interface TocEntry {
  name: string;
  href: string;
  section: string;
  ancestors: string[];
  groupKey: string;
  groupLabel: string;
  path: string;
  ord: number;
  premium: boolean;
  landing: boolean;
}

export interface WalkOptions {
  /**
   * Platform token filtered on by the xplat `toc.json` (`"Angular"`, `"React"`,
   * `"Blazor"`, `"WebComponents"`). Omitted for `toc.yml`, which has no
   * `exclude` entries.
   */
  excludePlatform?: string;
}

export function buildGroupKey(section: string, groupLabel: string): string {
  return groupLabel ? `${section} > ${groupLabel}` : section;
}

function buildPath(section: string, ancestors: string[]): string {
  return [section, ...ancestors].filter((p) => p !== "").join(" > ");
}

function walk(nodes: TocNode[], opts: WalkOptions): TocEntry[] {
  const entries: TocEntry[] = [];
  const platform = opts.excludePlatform;
  let section = "";
  let ord = 0;

  const emit = (
    node: TocNode,
    ancestors: string[],
    groupLabel: string,
    landing: boolean
  ) => {
    entries.push({
      name: node.name || "",
      href: node.href!,
      section,
      ancestors,
      groupKey: buildGroupKey(section, groupLabel),
      groupLabel,
      path: buildPath(section, ancestors),
      ord: ord++,
      premium: node.premium === true,
      landing,
    });
  };

  const visit = (
    items: TocNode[],
    ancestors: string[],
    groupLabel: string | undefined,
    parentExcluded: boolean
  ) => {
    for (const node of items) {
      const excluded =
        parentExcluded ||
        (platform !== undefined && Array.isArray(node.exclude) && node.exclude.includes(platform));

      if (node.header === true) {
        // Rule 1 — update the section even when excluded, then reset the
        // ancestor chain: a header is a divider, not a parent.
        section = node.name || "";
        if (!excluded && node.href) {
          emit(node, [], "", true);
        }
        if (Array.isArray(node.items)) {
          visit(node.items, [], undefined, excluded);
        }
        continue;
      }

      const nodeAncestors = [...ancestors, node.name || ""];
      // Rule 3 — the label is fixed by the top-level node below the header and
      // then inherited unchanged; `undefined` marks "not yet decided".
      const label =
        groupLabel !== undefined
          ? groupLabel
          : Array.isArray(node.items) && node.items.length > 0
            ? node.name || ""
            : "";

      if (!excluded && node.href) {
        emit(node, nodeAncestors, label, false);
      }
      if (Array.isArray(node.items)) {
        visit(node.items, nodeAncestors, label, excluded);
      }
    }
  };

  visit(nodes, [], undefined, false);
  return entries;
}

/** Walk a parsed `toc.yml` (angular). */
export function walkTocYaml(nodes: TocNode[], opts: WalkOptions = {}): TocEntry[] {
  return walk(nodes, opts);
}

/** Walk a parsed `toc.json` (xplat), honouring per-platform `exclude`. */
export function walkTocJson(nodes: TocNode[], opts: WalkOptions = {}): TocEntry[] {
  return walk(nodes, opts);
}
