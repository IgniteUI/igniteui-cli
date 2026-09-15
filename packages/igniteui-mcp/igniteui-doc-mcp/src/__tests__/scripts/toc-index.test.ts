import { describe, expect, it } from "vitest";
import {
  walkTocJson,
  walkTocYaml,
  type TocEntry,
  type TocNode,
} from "../../../scripts/lib/toc-index.js";

/**
 * Mirrors the shape of `angular/igniteui-docfx/en/components/toc.yml`: headers
 * are top-level siblings of the entries they introduce, and a header may carry
 * its own landing-page href.
 */
const ANGULAR_TOC: TocNode[] = [
  { name: "Grids & Lists", href: "grids-and-lists.md", header: true },
  {
    name: "Data Grid",
    href: "grid/grid.md",
    items: [
      { name: "Sorting", href: "grid/sorting.md" },
      { name: "Row Actions", href: "grid/row-actions.md", premium: true },
    ],
  },
  { name: "Excel Utility", href: "excel-utility.md" },
  { name: "Layouts", header: true },
  { name: "Accordion", href: "accordion.md" },
  { name: "Styling & Themes", header: true },
  {
    name: "Sass",
    href: "themes/sass/index.md",
    items: [
      { name: "Palettes", href: "themes/sass/palettes.md" },
      {
        name: "Predefined Themes",
        items: [{ name: "Material", href: "themes/sass/presets/material.md" }],
      },
    ],
  },
  { name: "Frameworks", header: true },
  { name: "Excel Library", items: [{ name: "Excel Utility", href: "excel-utility.md" }] },
];

function byHref(entries: TocEntry[], href: string): TocEntry[] {
  return entries.filter((e) => e.href === href);
}

function shape(entry: TocEntry) {
  return {
    section: entry.section,
    ancestors: entry.ancestors,
    groupLabel: entry.groupLabel,
    groupKey: entry.groupKey,
    path: entry.path,
    landing: entry.landing,
  };
}

describe("walkTocYaml — §4.1 worked examples", () => {
  const entries = walkTocYaml(ANGULAR_TOC);

  it("groups a node that has both an href and children with its own children", () => {
    expect(shape(byHref(entries, "grid/grid.md")[0])).toEqual({
      section: "Grids & Lists",
      ancestors: ["Data Grid"],
      groupLabel: "Data Grid",
      groupKey: "Grids & Lists > Data Grid",
      path: "Grids & Lists > Data Grid",
      landing: false,
    });
  });

  it("groups a descendant under the top-level node below the header", () => {
    expect(shape(byHref(entries, "grid/sorting.md")[0])).toEqual({
      section: "Grids & Lists",
      ancestors: ["Data Grid", "Sorting"],
      groupLabel: "Data Grid",
      groupKey: "Grids & Lists > Data Grid",
      path: "Grids & Lists > Data Grid > Sorting",
      landing: false,
    });
  });

  it("leaves a childless top-level node at section level", () => {
    expect(shape(byHref(entries, "accordion.md")[0])).toEqual({
      section: "Layouts",
      ancestors: ["Accordion"],
      groupLabel: "",
      groupKey: "Layouts",
      path: "Layouts > Accordion",
      landing: false,
    });
  });

  it("keeps a deep descendant under the top-level node, not its immediate parent", () => {
    expect(shape(byHref(entries, "themes/sass/presets/material.md")[0])).toEqual({
      section: "Styling & Themes",
      ancestors: ["Sass", "Predefined Themes", "Material"],
      groupLabel: "Sass",
      groupKey: "Styling & Themes > Sass",
      path: "Styling & Themes > Sass > Predefined Themes > Material",
      landing: false,
    });
  });

  it("groups a second-level entry under its top-level node", () => {
    expect(shape(byHref(entries, "themes/sass/palettes.md")[0])).toEqual({
      section: "Styling & Themes",
      ancestors: ["Sass", "Palettes"],
      groupLabel: "Sass",
      groupKey: "Styling & Themes > Sass",
      path: "Styling & Themes > Sass > Palettes",
      landing: false,
    });
  });

  it("emits a header's own href as the section landing page", () => {
    expect(shape(byHref(entries, "grids-and-lists.md")[0])).toEqual({
      section: "Grids & Lists",
      ancestors: [],
      groupLabel: "",
      groupKey: "Grids & Lists",
      path: "Grids & Lists",
      landing: true,
    });
  });

  // The pair that fails any `ancestors.length > 1` implementation: both have a
  // single-element ancestor chain and must land in different groups.
  it("separates grid/grid.md from accordion.md despite equal ancestor depth", () => {
    const grid = byHref(entries, "grid/grid.md")[0];
    const accordion = byHref(entries, "accordion.md")[0];
    expect(grid.ancestors).toHaveLength(1);
    expect(accordion.ancestors).toHaveLength(1);
    expect(grid.groupKey).not.toBe(accordion.groupKey);
  });
});

describe("walkTocYaml — structure", () => {
  const entries = walkTocYaml(ANGULAR_TOC);

  it("emits one entry per href in document order", () => {
    expect(entries.map((e) => e.ord)).toEqual(entries.map((_, i) => i));
    expect(entries.map((e) => e.href)).toEqual([
      "grids-and-lists.md",
      "grid/grid.md",
      "grid/sorting.md",
      "grid/row-actions.md",
      "excel-utility.md",
      "accordion.md",
      "themes/sass/index.md",
      "themes/sass/palettes.md",
      "themes/sass/presets/material.md",
      "excel-utility.md",
    ]);
  });

  it("emits a cross-listed href once per TOC path, in different sections", () => {
    const excel = byHref(entries, "excel-utility.md");
    expect(excel).toHaveLength(2);
    expect(excel.map((e) => e.path)).toEqual([
      "Grids & Lists > Excel Utility",
      "Frameworks > Excel Library > Excel Utility",
    ]);
    expect(excel.map((e) => e.groupKey)).toEqual([
      "Grids & Lists",
      "Frameworks > Excel Library",
    ]);
  });

  it("carries premium through", () => {
    expect(byHref(entries, "grid/row-actions.md")[0].premium).toBe(true);
    expect(byHref(entries, "grid/sorting.md")[0].premium).toBe(false);
  });
});

describe("walkTocJson — platform exclusion", () => {
  const XPLAT_TOC: TocNode[] = [
    { name: "General", header: true },
    {
      name: "Installation",
      exclude: ["Angular", "React"],
      items: [{ name: "NuGet Feed", href: "general-nuget-feed.md" }],
    },
    { name: "Licensing", href: "general-licensing.md" },
    { name: "Charts", href: "charts/chart-overview.md", header: true },
    { name: "Area Chart", href: "charts/types/area-chart.md" },
  ];

  it("drops an excluded subtree for the excluded platform only", () => {
    const react = walkTocJson(XPLAT_TOC, { excludePlatform: "React" });
    const blazor = walkTocJson(XPLAT_TOC, { excludePlatform: "Blazor" });
    expect(react.map((e) => e.href)).not.toContain("general-nuget-feed.md");
    expect(blazor.map((e) => e.href)).toContain("general-nuget-feed.md");
  });

  it("keeps header hrefs, so the exporter can filter them itself", () => {
    const entries = walkTocJson(XPLAT_TOC, { excludePlatform: "React" });
    const overview = byHref(entries, "charts/chart-overview.md")[0];
    expect(overview.landing).toBe(true);
    expect(entries.filter((e) => !e.landing).map((e) => e.href)).toEqual([
      "general-licensing.md",
      "charts/types/area-chart.md",
    ]);
  });

  it("lets an excluded header update the section so later siblings are not stale", () => {
    const toc: TocNode[] = [
      { name: "General", header: true },
      { name: "Grids", header: true, exclude: ["React"] },
      { name: "Data Grid", href: "grids/grid/grid.md" },
    ];
    const entries = walkTocJson(toc, { excludePlatform: "React" });
    expect(entries).toHaveLength(1);
    expect(entries[0].section).toBe("Grids");
    expect(entries[0].groupKey).toBe("Grids");
  });

  it("walks with no exclusion when no platform is given", () => {
    expect(walkTocJson(XPLAT_TOC).map((e) => e.href)).toContain("general-nuget-feed.md");
  });
});
