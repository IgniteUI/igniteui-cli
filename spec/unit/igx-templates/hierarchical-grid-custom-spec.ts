import { App, ControlExtraConfigType, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname,
	"../../../packages/igx-templates/igx-ts/hierarchical-grid/hierarchical-grid-custom");
const featureUrl = "https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/";

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

	it("offers hierarchical grid features as a multi choice extra configuration", () => {
		const [extraConfig] = template.getExtraConfiguration();

		expect(template.hasExtraConfiguration).toBeTrue();
		expect(extraConfig.key).toBe("columnFeatures");
		expect(extraConfig.type).toBe(ControlExtraConfigType.MultiChoice);
		expect(extraConfig.choices).toEqual(["Sorting", "Filtering", "Cell Editing", "Resizing", "Row Selection",
			"Paging", "Column Pinning", "Column Moving", "Column Hiding"]);
	});

	it("generates empty feature variables when no features are selected", () => {
		const config = generate();

		expect(config).toEqual(jasmine.objectContaining({
			name: "my hierarchical grid",
			ClassName: "MyHierarchicalGrid",
			additionalMarkup: "",
			selectedFeatures: "",
			columnFeatures: "",
			gridFeatures: "",
			rowIslandFeatures: ""
		}));
		expect(config.albumPin).toBeUndefined();
		expect(template.dependencies.length).toBe(1);
	});

	it("adds column features for sorting, filtering and resizing", () => {
		const config = generate(["Sorting", "Filtering", "Resizing"]);

		expect(config.columnFeatures).toBe(`[sortable]="true" [filterable]="true" [resizable]="true"`);
		expect(config.gridFeatures).toBe("");
	});

	it("makes columns editable for cell editing", () => {
		const config = generate(["Cell Editing"]);

		expect(config.columnFeatures).toBe(`[editable]="true"`);
		expect(template.dependencies).toContain(
			jasmine.objectContaining({ import: "FormsModule", from: "@angular/forms" }));
	});

	it("applies grid features to both the grid and the row island", () => {
		const config = generate(["Row Selection", "Column Moving"]);

		expect(config.gridFeatures).toBe(`rowSelection="multiple" [moving]="true"`);
		expect(config.rowIslandFeatures).toBe(config.gridFeatures);
	});

	it("adds a paginator for paging", () => {
		const config = generate(["Paging"]);

		expect(config.additionalMarkup).toBe(`\n  <igx-paginator [perPage]="5"></igx-paginator>`);
		expect(template.dependencies).toContain(jasmine.objectContaining({ import: "IgxPaginatorComponent" }));
	});

	it("adds pin toggle header templates for column pinning", () => {
		const config = generate(["Column Pinning"]);

		for (const [key, column] of [["albumPin", "Album"], ["artistPin", "Artist"], ["awardsPin", "Awards"],
			["grammyPin", "Grammy"], ["launchPin", "Launch"], ["nominationsPin", "Nominations"]]) {
			expect(config[key]).toContain(`<span style="float:left">${column}</span>`);
			expect(config[key]).toContain(`(click)="toggleColumn(columnRef, $event)"`);
			expect(config[key]).not.toContain("\t");
		}
	});

	it("adds a toolbar with a hiding action before the paginator", () => {
		const config = generate(["Paging", "Column Hiding"]);

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
		for (const toolbarImport of ["IgxGridToolbarComponent", "IgxGridToolbarTitleComponent",
			"IgxGridToolbarActionsComponent", "IgxGridToolbarPinningComponent", "IgxGridToolbarHidingComponent"]) {
			expect(template.dependencies).toContain(jasmine.objectContaining({ import: toolbarImport }));
		}
	});

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

	it("links every selected feature to its documentation", () => {
		const features: [string, string][] = [
			["Sorting", "sorting"],
			["Filtering", "filtering"],
			["Cell Editing", "editing"],
			["Resizing", "column-resizing"],
			["Row Selection", "selection"],
			["Paging", "paging"],
			["Column Pinning", "column-pinning"],
			["Column Moving", "column-moving"],
			["Column Hiding", "column-hiding"]
		];

		const config = generate(features.map(([feature]) => feature));

		const links = features.map(([feature, page]) => ` <a href="${featureUrl}${page}" target="_blank">${feature}</a>`);
		expect(config.selectedFeatures).toBe(`<p>Active Features: ${links.join(",")}</p>`);
	});
});
