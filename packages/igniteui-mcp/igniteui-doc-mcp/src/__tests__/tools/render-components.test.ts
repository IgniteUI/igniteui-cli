import { describe, expect, it } from "vitest";
import {
  SUMMARY_THRESHOLD,
  renderFlat,
  renderGroup,
  renderGroupedIndex,
  renderUnknownGroup,
  type GroupRow,
  type GroupedDocRow,
} from "../../tools/render-components.js";

const GROUPS: GroupRow[] = [
  { group_key: "Grids & Lists", section: "Grids & Lists", group_label: "", summary: "Lists and grids.", doc_count: 1, ord: 0 },
  { group_key: "Grids & Lists > Data Grid", section: "Grids & Lists", group_label: "Data Grid", summary: "Sorting, filtering, editing.", doc_count: 2, ord: 1 },
  { group_key: "Frameworks > Excel Library", section: "Frameworks", group_label: "Excel Library", summary: null, doc_count: 1, ord: 3 },
];

const ROWS: GroupedDocRow[] = [
  { filename: "grids-and-lists.md", toc_name: "Grids & Lists", summary: "Overview.", premium: 0, group_key: "Grids & Lists", ord: 0 },
  { filename: "excel-utility.md", toc_name: "Excel Utility", summary: "Excel helpers.", premium: 0, group_key: "Grids & Lists", ord: 1 },
  { filename: "grid-grid.md", toc_name: "Data Grid", summary: "The grid.", premium: 0, group_key: "Grids & Lists > Data Grid", ord: 2 },
  { filename: "grid-sorting.md", toc_name: "Sorting", summary: "Sort rows.", premium: 1, group_key: "Grids & Lists > Data Grid", ord: 3 },
  { filename: "excel-utility.md", toc_name: "Excel Utility", summary: "Excel helpers.", premium: 0, group_key: "Frameworks > Excel Library", ord: 9 },
];

describe("renderGroupedIndex", () => {
  it("renders a heading, the group summary and the member names per group", () => {
    const many = Array.from({ length: 30 }, (_, i) => ({
      filename: `doc-${i}.md`,
      toc_name: `Doc ${i}`,
      summary: "s",
      premium: 0,
      group_key: "Grids & Lists > Data Grid",
      ord: i,
    }));
    const out = renderGroupedIndex("angular", GROUPS, many);
    expect(out).toContain("## Grids & Lists > Data Grid (30)");
    expect(out).toContain("Sorting, filtering, editing.");
    expect(out).toContain("doc-0, doc-1");
    expect(out).not.toContain("- **Doc 0**");
  });

  it("omits a group with no rows", () => {
    const out = renderGroupedIndex("angular", GROUPS, ROWS.slice(2, 4));
    expect(out).toContain("## Grids & Lists > Data Grid (2)");
    expect(out).not.toContain("## Frameworks > Excel Library");
  });

  it("renders a group with no summary as heading plus members", () => {
    const out = renderGroupedIndex("angular", GROUPS, [ROWS[4]]);
    expect(out).toContain("## Frameworks > Excel Library (1)");
    expect(out).toContain("excel-utility");
  });

  it("counts a cross-listed doc once in the header and once per group", () => {
    const out = renderGroupedIndex("angular", GROUPS, ROWS);
    // Four distinct files, five memberships.
    expect(out).toContain("Found 4 component doc(s)");
    expect(out).toContain("## Grids & Lists (2)");
    expect(out).toContain("## Frameworks > Excel Library (1)");
  });

  it("includes per-doc summaries only while the match set is small", () => {
    const small = renderGroupedIndex("angular", GROUPS, ROWS, "grid");
    expect(small).toContain("- **Data Grid** (`grid-grid`)");
    expect(small).toContain("  The grid.");

    const large = Array.from({ length: SUMMARY_THRESHOLD + 1 }, (_, i) => ({
      filename: `doc-${i}.md`,
      toc_name: `Doc ${i}`,
      summary: "s",
      premium: 0,
      group_key: "Grids & Lists > Data Grid",
      ord: i,
    }));
    const big = renderGroupedIndex("angular", GROUPS, large, "grid");
    expect(big).not.toContain("- **Doc 0**");
    expect(big).toContain("doc-0, doc-1");
  });

  it("marks premium docs when summaries are omitted", () => {
    const many = [
      ...ROWS,
      ...Array.from({ length: 25 }, (_, i) => ({
        filename: `pad-${i}.md`,
        toc_name: `Pad ${i}`,
        summary: "s",
        premium: 0,
        group_key: "Grids & Lists > Data Grid",
        ord: 100 + i,
      })),
    ];
    expect(renderGroupedIndex("angular", GROUPS, many)).toContain("grid-sorting ⭐");
  });

  it("keeps the lowest ord when one doc reaches a group by two paths", () => {
    const twice: GroupedDocRow[] = [
      { filename: "b.md", toc_name: "B", summary: null, premium: 0, group_key: "Grids & Lists", ord: 1 },
      { filename: "a.md", toc_name: "A", summary: null, premium: 0, group_key: "Grids & Lists", ord: 5 },
      { filename: "a.md", toc_name: "A", summary: null, premium: 0, group_key: "Grids & Lists", ord: 0 },
    ];
    const out = renderGroupedIndex("angular", GROUPS, twice);
    expect(out).toContain("## Grids & Lists (2)");
    // a.md is listed once, at its earliest TOC position — before b.md.
    expect(out.indexOf("(`a`)")).toBeLessThan(out.indexOf("(`b`)"));
    expect(out.match(/\(`a`\)/g)).toHaveLength(1);
  });

  it("reports an empty result set", () => {
    expect(renderGroupedIndex("angular", GROUPS, [], "zzz")).toBe(
      'No components found for framework "angular" matching "zzz".'
    );
  });
});

describe("renderGroup", () => {
  it("lists one group's docs with summaries in TOC order", () => {
    const out = renderGroup("angular", GROUPS[1], ROWS);
    expect(out.startsWith("Found 2 component doc(s) in **angular** > Grids & Lists > Data Grid:")).toBe(true);
    expect(out).toContain("Sorting, filtering, editing.");
    expect(out.indexOf("grid-grid")).toBeLessThan(out.indexOf("grid-sorting"));
    expect(out).toContain("  ⭐ Premium");
  });

  it("reports an empty group", () => {
    expect(renderGroup("angular", GROUPS[2], [], "zzz")).toBe(
      'No components found in group "Frameworks > Excel Library" for framework "angular" matching "zzz".'
    );
  });
});

describe("renderUnknownGroup", () => {
  it("answers with the valid keys rather than an error", () => {
    const out = renderUnknownGroup("angular", "Nope", GROUPS);
    expect(out).toContain('No group "Nope" in **angular**');
    for (const g of GROUPS) expect(out).toContain(`- ${g.group_key}`);
  });
});

describe("renderFlat", () => {
  it("keeps the established per-doc shape", () => {
    expect(renderFlat("angular", [ROWS[3]])).toBe(
      "Found 1 components for **angular**:\n\n" +
      "- **Sorting** (`grid-sorting`)\n  Sort rows.\n  ⭐ Premium"
    );
  });

  it("mentions the filter in the header and the empty message", () => {
    expect(renderFlat("angular", [ROWS[3]], "sort")).toContain('matching "sort":');
    expect(renderFlat("angular", [], "sort")).toBe(
      'No components found for framework "angular" matching "sort".'
    );
  });
});
