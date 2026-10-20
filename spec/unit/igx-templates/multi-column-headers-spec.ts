import { App, Template } from "@igniteui/cli-core";
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

		expect(extraConfig.choices).toEqual(["Sorting", "Filtering", "Resizing", "Paging", "Moving"]);
	});

	it("enables column moving on the grid instead of the removed column 'movable' input", () => {
		const config = generate(["Sorting", "Moving"]);

		expect(config.columnFeatures).toBe(`[sortable]="true"`);
		expect(config.columnFeatures).not.toContain("movable");
		expect(config.gridFeatures).toBe(`[moving]="true"`);
	});
});
