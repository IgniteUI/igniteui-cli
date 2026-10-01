import { describe, expect, it } from "vitest";
import {
  convertApiLink,
  convertMdx,
  convertSample,
  createStats,
  mapOutsideFences,
  parseTagAt,
  resolveTokens,
  sortReplacements,
  type ApiResolver,
  type ConvertOptions,
} from "../../../scripts/lib/mdx-convert.js";

const angularApi: ApiResolver = {
  platform: "angular",
  prefix: "Igx",
  index: new Map([
    ["igxgridcomponent", "IgxGridComponent"],
    ["igxcolumncomponent", "IgxColumnComponent"],
    ["igxbuttondirective", "IgxButtonDirective"],
  ]),
};

const reactApi: ApiResolver = {
  platform: "react",
  prefix: "Igr",
  index: new Map([["igrgrid", "IgrGrid"]]),
};

function tag(source: string) {
  const parsed = parseTagAt(source, 0);
  if (!parsed) throw new Error(`could not parse ${source}`);
  return parsed;
}

describe("resolveTokens", () => {
  const replacements = sortReplacements([
    { name: "{Platform}", value: "React" },
    { name: "{ProductName}", value: "Ignite UI for React" },
    { name: "{GridName}", value: "Grid" },
    { name: "{GridTitle}", value: "Data Grid" },
  ]);

  it("maps {Component*} tokens through _componentKey before the plain replacements", () => {
    const input = "---\ntitle: x\n_componentKey: Grid\n---\nThe {ProductName} {ComponentTitle} uses <ApiLink type=\"{ComponentName}\" />";
    expect(resolveTokens(input, replacements)).toContain('The Ignite UI for React Data Grid uses <ApiLink type="Grid" />');
  });

  it("resolves environment keys from the supplied map before the built-in one", () => {
    const input = "[x]({environment:dvApiBaseUrl}/products/a.html) {environment:sassApiUrl}";
    expect(resolveTokens(input, [], { dvApiBaseUrl: "https://www.infragistics.com", sassApiUrl: "https://sass" })).toBe(
      "[x](https://www.infragistics.com/products/a.html) https://sass"
    );
  });

  it("drops unknown PascalCase tokens and keeps demo base URL placeholders", () => {
    const input = "{PackageAngularComponents} {environment:angularApiUrl} {environment:dvDemosBaseUrl}";
    expect(resolveTokens(input, replacements)).toBe(
      " https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest {environment:dvDemosBaseUrl}"
    );
  });
});

describe("parseTagAt", () => {
  it("handles quoted values containing angle brackets and JSX expressions", () => {
    const parsed = tag('<ApiLink type="GridToolbarActions" label="<igx-grid-toolbar-actions>" prefixed={false} code />');
    expect(parsed.attrs).toEqual({
      type: "GridToolbarActions",
      label: "<igx-grid-toolbar-actions>",
      prefixed: false,
      code: true,
    });
    expect(parsed.selfClosing).toBe(true);
  });

  it("parses array expressions and numbers", () => {
    expect(tag('<ApiRef pkg="core" types={["Splitter", "SplitterPane"]} />').attrs.types).toEqual(["Splitter", "SplitterPane"]);
    expect(tag("<Sample src=\"/a\" height={400} />").attrs.height).toBe("400");
  });
});

describe("mapOutsideFences", () => {
  it("leaves fenced code untouched", () => {
    const input = "a <X/>\n```tsx\n<X/>\n```\nb <X/>";
    expect(mapOutsideFences(input, (t) => t.replaceAll("<X/>", "!"))).toBe("a !\n```tsx\n<X/>\n```\nb !");
  });
});

describe("convertSample", () => {
  it("emits github-src for the xplat platforms", () => {
    expect(convertSample(tag('<Sample src="/grids/grid/editing/" alt="Editing" />'), "React")).toBe(
      '<code-view github-src="grids/grid/editing" alt="Editing"></code-view>'
    );
  });

  it("picks the Angular demo base the way the Sample component does", () => {
    expect(convertSample(tag('<Sample src="/lists/combo-main" />'), "Angular")).toBe(
      '<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-main" github-src="lists/combo-main"></code-view>'
    );
    expect(convertSample(tag('<Sample src="/charts/data-chart/axis" />'), "Angular")).toContain("{environment:dvDemosBaseUrl}/charts/data-chart/axis");
    expect(convertSample(tag('<Sample src="/grid-finjs" lob />'), "Angular")).toContain("{environment:lobDemosBaseUrl}/grid-finjs");
    expect(convertSample(tag('<Sample src="/x" crm />'), "Angular")).toContain("{environment:crmDemoBaseUrl}/x");
  });
});

describe("convertApiLink", () => {
  const opts = (api: ApiResolver): ConvertOptions => ({ platform: "Angular", replacements: [], api, stats: createStats() });

  it("resolves the prefixed type plus a Component/Directive suffix", () => {
    expect(convertApiLink(tag('<ApiLink type="Column" member="editable" />'), opts(angularApi))).toBe(
      "[`IgxColumn.editable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=editable)"
    );
    expect(convertApiLink(tag('<ApiLink type="Button" label="igxButton" />'), opts(angularApi))).toBe(
      "[`igxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective)"
    );
  });

  it("does not prefix twice when prefixed={false} carries a resolved name", () => {
    expect(convertApiLink(tag('<ApiLink type="IgrGrid" prefixed={false} />'), { ...opts(reactApi), platform: "React" })).toBe(
      "[`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid)"
    );
  });

  it("falls back to a code span and records unresolved types", () => {
    const o = opts(angularApi);
    expect(convertApiLink(tag('<ApiLink type="CategoryChart" member="title" />'), o)).toBe("`IgxCategoryChart.title`");
    expect(o.stats!.unresolvedApiTypes.get("IgxCategoryChart")).toBe(1);
    expect(o.stats!.apiLinksResolved).toBe(0);
  });
});

describe("convertMdx", () => {
  const options: ConvertOptions = { platform: "Angular", replacements: [], api: angularApi };

  it("converts components, strips imports and comments, and keeps code blocks", () => {
    const input = [
      "---",
      "title: Grid",
      "---",
      "import Sample from 'igniteui-astro-components/components/mdx/Sample.astro';",
      "import DocsAside from 'igniteui-astro-components/components/mdx/DocsAside.astro';",
      "import gridImg from '../images/grid.png';",
      "",
      "# Grid {/* hidden */}",
      "",
      '<Sample src="/grid/overview" height={400} />',
      "",
      '<DocsAside type="warning">',
      "Mind the \\{braces\\}.",
      "</DocsAside>",
      "",
      '<Image src={gridImg} alt="x" /> <Badge variant="new" />',
      "",
      "```html",
      '<igx-grid><Sample src="untouched" /></igx-grid>',
      "```",
      "",
      "<Faq>",
      '  <FaqItem question="Why?">',
      "    Because.",
      "  </FaqItem>",
      "</Faq>",
    ].join("\n");

    const out = convertMdx(input, options);
    expect(out).toMatch(/^---\ntitle: Grid\n---\n# Grid/);
    expect(out).not.toContain("import ");
    expect(out).not.toContain("hidden");
    expect(out).toContain('<code-view iframe-src="{environment:demosBaseUrl}/grid/overview" github-src="grid/overview"></code-view>');
    expect(out).toContain("**Warning:** \nMind the {braces}.");
    expect(out).not.toMatch(/<Image|<Badge|<\/?Faq|<\/?DocsAside/);
    expect(out).toContain('<igx-grid><Sample src="untouched" /></igx-grid>');
    expect(out).toContain("**Q: Why?**");
  });

  it("collapses blank lines left by removed components but not inside code fences", () => {
    const input = 'a\n\n<Badge variant="new" />\n\n\nb\n\n```py\nx = 1\n\n\n\ny = 2\n```';
    expect(convertMdx(input, options)).toBe("a\n\nb\n\n```py\nx = 1\n\n\n\ny = 2\n```");
  });

  it("leaves capitalised tags that are not MDX components alone", () => {
    expect(convertMdx("Use <Grid> in WPF.", options)).toBe("Use <Grid> in WPF.");
  });
});
