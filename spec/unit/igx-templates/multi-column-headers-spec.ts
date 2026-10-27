import { App, ControlExtraConfigType, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname, "../../../packages/igx-templates/igx-ts/grid/multi-column-headers");

describe("Unit - igx-ts Multi Column Headers template", () => {
	let template: Template;

	beforeAll(() => {
		App.initialize();
	});

	beforeEach(() => {
		template = requireFresh<Template>(templatePath);
	});

	function generate(columnFeatures?: string[]): { [key: string]: any } {
		if (columnFeatures) {
			template.setExtraConfiguration({ columnFeatures });
		}
		return template.generateConfig("my grid");
	}

	it("offers only features the template implements", () => {
		const [extraConfig] = template.getExtraConfiguration();

		expect(template.hasExtraConfiguration).toBeTrue();
		expect(extraConfig.key).toBe("columnFeatures");
		expect(extraConfig.type).toBe(ControlExtraConfigType.MultiChoice);
		expect(extraConfig.choices).toEqual(["Sorting", "Filtering", "Resizing", "Paging", "Moving"]);
	});

	it("generates empty feature variables when no features are selected", () => {
		const config = generate();

		expect(config).toEqual(jasmine.objectContaining({
			name: "my grid",
			ClassName: "MyGrid",
			additionalMarkup: "",
			checkBoxBind: `[checked]="cell.value" [disabled]="true"`,
			selectedFeatures: "",
			columnBoolFeatures: "",
			columnFeatures: "",
			gridFeatures: ""
		}));
	});

	it("adds column features for sorting, filtering and resizing", () => {
		const config = generate(["Sorting", "Filtering", "Resizing"]);

		expect(config.columnFeatures).toBe(`[sortable]="true" [filterable]="true" [resizable]="true"`);
		expect(config.columnBoolFeatures).toBe(config.columnFeatures);
		expect(config.selectedFeatures).toBe("Sorting, Filtering, Resizing");
	});

	it("enables column moving on the grid instead of the removed column 'movable' input", () => {
		const config = generate(["Sorting", "Moving"]);

		expect(config.columnFeatures).toBe(`[sortable]="true"`);
		expect(config.columnFeatures).not.toContain("movable");
		expect(config.gridFeatures).toBe(`[moving]="true"`);
	});

	it("adds a paginator for paging", () => {
		const config = generate(["Paging"]);

		expect(config.additionalMarkup).toBe("\n  <igx-paginator></igx-paginator>");
		expect(config.selectedFeatures).toBe("Paging");
	});

	it("adds a grid feature for row selection", () => {
		// "Row Selection" is not among the offered choices; this covers the template's unused case
		const config = generate(["Row Selection"]);

		expect(config.gridFeatures).toBe(`rowSelection="multiple"`);
	});
});
