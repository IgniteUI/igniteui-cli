import { describe, expect, it } from "vitest";
import {
  rewriteApiLinksInMarkdown,
  type CanonicalIndex,
} from "../../../scripts/rewrite-api-links.js";

function makeIndex(entries: Record<string, string>): CanonicalIndex {
  const map: CanonicalIndex = new Map();
  for (const [lower, canonical] of Object.entries(entries)) {
    map.set(lower.toLowerCase(), canonical);
  }
  return map;
}

describe("rewriteApiLinksInMarkdown — angular", () => {
  const index = makeIndex({
    igxaccordioncomponent: "IgxAccordionComponent",
    igxgridcomponent: "IgxGridComponent",
    igxexcelexporteroptions: "IgxExcelExporterOptions",
  });

  it("rewrites a lowercase URL with a member fragment", () => {
    const md = "- [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#sort)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "angular", index);
    expect(rewrites).toBe(1);
    expect(output).toBe("- [IgxGrid](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=sort)");
  });

  it("rewrites a PascalCase URL without an index lookup", () => {
    const emptyIndex = makeIndex({});
    const md = "[IgxExcelExporterOptions](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxExcelExporterOptions.html)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "angular", emptyIndex);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgxExcelExporterOptions");
  });

  it("rewrites the /api/ URL form with a package prefix", () => {
    const md = "[IgxAccordion](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_grids.igxaccordioncomponent.html)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "angular", index);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgxAccordionComponent");
  });

  it("does not rewrite /components/ doc-page URLs", () => {
    const md = "[Grid demos](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/components/grid/overview.html)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "angular", index);
    expect(rewrites).toBe(0);
    expect(output).toBe(md);
  });
});

describe("rewriteApiLinksInMarkdown — react", () => {
  const index = makeIndex({ igrgrid: "IgrGrid" });

  it("rewrites an inline link mid-paragraph with a member fragment, preserving the link text", () => {
    const md = "Use the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#sort) API.";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "react", index);
    expect(rewrites).toBe(1);
    expect(output).toContain("[`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid&member=sort)");
  });
});

describe("rewriteApiLinksInMarkdown — webcomponents", () => {
  const index = makeIndex({
    igccheckboxcomponent: "IgcCheckboxComponent",
    igchierarchicalgridcomponent: "IgcHierarchicalGridComponent",
    igcpaneheaderelement: "IgcPaneHeaderElement",
  });

  it("rewrites the bare /docs/ form with a fragment", () => {
    const md = "[checked](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#checked)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "webcomponents", index);
    expect(rewrites).toBe(1);
    expect(output).toContain("platform=webcomponents&component=IgcCheckboxComponent&member=checked");
  });

  it("rewrites the /api/ form with a package prefix", () => {
    const md = "[IgcHierarchicalGrid](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html#filterGlobal)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "webcomponents", index);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgcHierarchicalGridComponent");
    expect(output).toContain("member=filterGlobal");
  });

  it("rewrites the dock-manager subpath", () => {
    const md = "[dragService](https://www.infragistics.com/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcpaneheaderelement.html#dragService)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "webcomponents", index);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgcPaneHeaderElement");
    expect(output).toContain("member=dragService");
  });
});

describe("rewriteApiLinksInMarkdown — blazor", () => {
  const emptyIndex = makeIndex({});

  it("decodes a docfx synthetic anchor into a bare member name", () => {
    const md = "[Sort](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_Sort)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "blazor", emptyIndex);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgbGrid");
    expect(output).toContain("member=Sort");
  });

  it("falls back to the raw fragment when the anchor prefix does not match", () => {
    const md = "[Note](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#example-section)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "blazor", emptyIndex);
    expect(rewrites).toBe(1);
    expect(output).toContain("member=example-section");
  });

  it("rewrites a Blazor URL without a fragment", () => {
    const md = "[IgbGrid](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "blazor", emptyIndex);
    expect(rewrites).toBe(1);
    expect(output).toContain("component=IgbGrid");
    expect(output).not.toContain("member=");
  });
});

describe("rewriteApiLinksInMarkdown — passthrough behaviour", () => {
  it("leaves sass/theming mixin URLs untouched", () => {
    const md = "[Mixin](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-igx-accordion)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "angular", makeIndex({}));
    expect(rewrites).toBe(0);
    expect(output).toBe(md);
  });

  it("leaves external (e.g. MDN) URLs untouched", () => {
    const md = "[HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)";
    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "webcomponents", makeIndex({}));
    expect(rewrites).toBe(0);
    expect(output).toBe(md);
  });

  it("leaves an unknown component (lookup miss) untouched and logs it", () => {
    const md = "[Mystery](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxmysterycomponent.html)";
    const { output, rewrites, skipped } = rewriteApiLinksInMarkdown(md, "angular", makeIndex({}));
    expect(rewrites).toBe(0);
    expect(output).toBe(md);
    expect(skipped).toHaveLength(1);
    expect(skipped[0].reason).toBe("unknown-component");
  });
});

describe("rewriteApiLinksInMarkdown — multiple links in one document", () => {
  it("rewrites every matching link and counts correctly", () => {
    const index = makeIndex({ igrgrid: "IgrGrid" });
    const md = [
      "Use the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) API.",
      "Call [`sort`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#sort) on it.",
      "See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) for HTMLElement.",
    ].join("\n");

    const { output, rewrites } = rewriteApiLinksInMarkdown(md, "react", index);
    expect(rewrites).toBe(2);
    expect(output).toContain("[`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid)");
    expect(output).toContain("[`sort`](mcp:get_api_reference?platform=react&component=IgrGrid&member=sort)");
    expect(output).toContain("[MDN](https://developer.mozilla.org");
  });
});
