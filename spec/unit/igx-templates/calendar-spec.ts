import { App, ControlExtraConfigType, Template } from "@igniteui/cli-core";
import * as path from "path";
import { requireFresh } from "../../helpers/utils";

const templatePath = path.join(__dirname, "../../../packages/igx-templates/igx-ts/calendar/default");

describe("Unit - igx-ts Calendar template", () => {
	let template: Template;

	beforeAll(() => {
		App.initialize();
	});

	beforeEach(() => {
		template = requireFresh<Template>(templatePath);
	});

	it("offers the selection type as a single choice extra configuration", () => {
		const [extraConfig] = template.getExtraConfiguration();

		expect(template.hasExtraConfiguration).toBeTrue();
		expect(extraConfig.key).toBe("selectionType");
		expect(extraConfig.type).toBe(ControlExtraConfigType.Choice);
		expect(extraConfig.choices).toEqual(["Single selection", "Multi selection", "Range selection"]);
		expect(extraConfig.default).toBe("Single selection");
	});

	it("generates empty selection variables when no selection type is set", () => {
		const config = template.generateConfig("my calendar");

		expect(config).toEqual(jasmine.objectContaining({
			name: "my calendar",
			ClassName: "MyCalendar",
			selectionMode: "",
			selectionType: ""
		}));
	});

	for (const [selectionMode, selectionType] of [
		["Single selection", ""],
		["Multi selection", `selection="multi"`],
		["Range selection", `selection="range"`]
	]) {
		it(`sets the selection attribute for '${selectionMode}'`, () => {
			template.setExtraConfiguration({ selectionType: selectionMode });

			const config = template.generateConfig("my calendar");

			expect(config.selectionMode).toBe(selectionMode);
			expect(config.selectionType).toBe(selectionType);
		});
	}
});
