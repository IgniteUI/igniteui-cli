import { Util } from "@igniteui/cli-core";
import { IgniteUIForReactTemplate } from "../../packages/cli/lib/templates/IgniteUIForReactTemplate";

describe("Unit - IgniteUIForReactTemplate", () => {
	let template: IgniteUIForReactTemplate;

	beforeEach(() => {
		spyOn(Util, "version").and.returnValue("1.0.0");
		template = new IgniteUIForReactTemplate("root/path");
	});

	describe("generateConfig", () => {
		it("generates the base variables from the component name", () => {
			const config = template.generateConfig("my component", {});

			expect(config).toEqual({
				path: "my-component",
				name: "my component",
				ClassName: "MyComponent",
				filePrefix: "my-component",
				cliVersion: "1.0.0"
			});
		});

		it("merges the extra configuration into the generated config", () => {
			const config = template.generateConfig("my component", {
				extraConfig: { selectionType: "multi", name: "overridden" }
			});

			expect(config["selectionType"]).toBe("multi");
			// base variables take precedence over extra configuration
			expect(config["name"]).toBe("my component");
			expect(config["ClassName"]).toBe("MyComponent");
		});

		it("adds widget and description variables when set", () => {
			template["widget"] = "igr-grid";
			template.description = "Test description";

			const config = template.generateConfig("my component", {});

			expect(config["widget"]).toBe("igr-grid");
			expect(config["Control"]).toBe("IgrGrid");
			expect(config["description"]).toBe("Test description");
		});
	});
});
