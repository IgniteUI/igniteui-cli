import { App, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname,
	"../../../packages/igx-templates/igx-ts/hierarchical-grid/hierarchical-grid-custom");

describe("Unit - igx-ts Custom Hierarchical Grid template", () => {
	let template: Template;

	beforeAll(() => {
		App.initialize();
	});

	beforeEach(() => {
		// the template module exports a singleton that keeps state between calls
		template = requireFresh<Template>(templatePath);
	});

	function generate(columnFeatures?: string[]): { [key: string]: any } {
		if (columnFeatures) {
			template.setExtraConfiguration({ columnFeatures });
		}
		return template.generateConfig("my hierarchical grid");
	}

	it("adds the toolbar once when other features follow column hiding", () => {
		const config = generate(["Column Hiding", "Sorting", "Paging"]);

		expect(config.additionalMarkup).toBe([
			"",
			"  <igx-grid-toolbar>",
			"    <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>",
			"    <igx-grid-toolbar-actions>",
			"      <igx-grid-toolbar-hiding title='Column Hiding'></igx-grid-toolbar-hiding>",
			"    </igx-grid-toolbar-actions>",
			"  </igx-grid-toolbar>",
			`  <igx-paginator [perPage]="5"></igx-paginator>`
		].join("\n"));
		const toolbarImports = template.dependencies
			.filter(dep => (dep as { import?: string }).import === "IgxGridToolbarComponent");
		expect(toolbarImports.length).toBe(1);
	});

	it("does not carry markup, pinning or dependencies over to the next generated grid", () => {
		const imports = () => template.dependencies.map(dep => (dep as { import?: string | string[] }).import);
		const baseImports = imports();
		const first = generate(["Column Hiding", "Paging", "Column Pinning", "Cell Editing"]);
		expect(first.additionalMarkup).toContain("<igx-grid-toolbar>");
		expect(first.albumPin).toBeDefined();
		expect(imports()).toContain("IgxPaginatorComponent");

		const second = generate([]);

		expect(second.additionalMarkup).toBe("");
		expect(second.albumPin).toBeUndefined();
		expect(imports()).toEqual(baseImports);
	});
});
