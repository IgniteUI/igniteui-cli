import { App, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname, "../../../packages/igx-templates/igx-ts/grid/grid-custom");

describe("Unit - igx-ts Custom Grid template", () => {
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
		return template.generateConfig("my grid");
	}

	it("does not enable grid filtering for sorting", () => {
		const config = generate(["Sorting"]);

		expect(config.columnFeatures).toBe(`[sortable]="true"`);
		expect(config.gridFeatures).toBe("");
	});

	it("enables grid filtering for filtering", () => {
		const config = generate(["Sorting", "Filtering"]);

		expect(config.columnFeatures).toBe(`[sortable]="true" [filterable]="true"`);
		expect(config.gridFeatures).toBe(`[allowFiltering]="true"`);
	});
});
