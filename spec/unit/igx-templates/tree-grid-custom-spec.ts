import { App, ControlExtraConfigType, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname, "../../../packages/igx-templates/igx-ts/tree-grid/tree-grid-custom");
const featureUrl = "https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/";

describe("Unit - igx-ts Custom Tree Grid template", () => {
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
		return template.generateConfig("my tree grid");
	}

	it("offers tree grid features as a multi choice extra configuration", () => {
		const [extraConfig] = template.getExtraConfiguration();

		expect(template.hasExtraConfiguration).toBeTrue();
		expect(extraConfig.key).toBe("columnFeatures");
		expect(extraConfig.type).toBe(ControlExtraConfigType.MultiChoice);
		expect(extraConfig.choices).toEqual(["Sorting", "Filtering", "Cell Editing", "Row Editing", "Resizing",
			"Row Selection", "Paging", "Column Pinning", "Column Moving", "Column Hiding"]);
	});

	it("includes the shared tree grid data files", () => {
		expect(template.templatePaths).toEqual([
			path.join(templatePath, "files"),
			path.join(templatePath, "../../../shared-data/tree-grid/files")
		]);
	});

	it("generates empty feature variables when no features are selected", () => {
		const config = generate();

		expect(config).toEqual(jasmine.objectContaining({
			name: "my tree grid",
			ClassName: "MyTreeGrid",
			additionalMarkup: "",
			columnPinning: "",
			selectedFeatures: "",
			columnBoolFeatures: "",
			columnFeatures: "",
			treeGridFeatures: ""
		}));
		expect(template.dependencies.length).toBe(2);
	});

	it("adds column features for sorting, filtering and resizing", () => {
		const config = generate(["Sorting", "Filtering", "Resizing"]);

		expect(config.columnFeatures).toBe(`[sortable]="true" [filterable]="true" [resizable]="true"`);
		expect(config.columnBoolFeatures).toBe(config.columnFeatures);
		expect(config.treeGridFeatures).toBe(`[allowFiltering]="true"`);
	});

	it("makes columns editable for cell editing", () => {
		const config = generate(["Cell Editing"]);

		expect(config.columnFeatures).toBe(`[editable]="true"`);
		expect(config.columnBoolFeatures).toBe("");
	});

	it("adds tree grid features for row editing, row selection and column moving", () => {
		const config = generate(["Row Editing", "Row Selection", "Column Moving"]);

		expect(config.treeGridFeatures).toBe(`[rowEditable]="true" rowSelection="multiple" [moving]="true"`);
	});

	it("adds a paginator for paging", () => {
		const config = generate(["Paging"]);

		expect(config.additionalMarkup).toBe("\n  <igx-paginator></igx-paginator>");
		expect(template.dependencies).toContain(jasmine.objectContaining({ import: "IgxPaginatorComponent" }));
	});

	it("adds a toolbar with pinning and hiding actions before the paginator", () => {
		const config = generate(["Column Pinning", "Paging", "Column Hiding"]);

		expect(config.columnPinning).toBe(`[pinned]="true"`);
		expect(config.additionalMarkup).toBe([
			"",
			"  <igx-grid-toolbar>",
			"    <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>",
			"    <igx-grid-toolbar-actions>",
			"      <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>",
			"      <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>",
			"    </igx-grid-toolbar-actions>",
			"  </igx-grid-toolbar>",
			"  <igx-paginator></igx-paginator>"
		].join("\n"));
		for (const toolbarImport of ["IgxGridToolbarComponent", "IgxGridToolbarTitleComponent",
			"IgxGridToolbarActionsComponent", "IgxGridToolbarPinningComponent", "IgxGridToolbarHidingComponent"]) {
			expect(template.dependencies).toContain(jasmine.objectContaining({ import: toolbarImport }));
		}
	});

	it("links every selected feature to its documentation", () => {
		const features: [string, string][] = [
			["Sorting", "sorting"],
			["Filtering", "filtering"],
			["Cell Editing", "editing"],
			["Row Editing", "row-editing"],
			["Resizing", "column-resizing"],
			["Row Selection", "selection"],
			["Paging", "paging"],
			["Column Pinning", "column-pinning"],
			["Column Moving", "column-moving"],
			["Column Hiding", "column-hiding"]
		];

		const config = generate(features.map(([feature]) => feature));

		const links = features.map(([feature, page]) => ` <a href="${featureUrl}${page}" target="_blank">${feature}</a>`);
		expect(config.selectedFeatures).toBe(`<p>Active Features:<br />${links.join(",")}</p>`);
	});
});
