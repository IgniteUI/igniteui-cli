import { App, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

const templatesLocation = "../../packages/cli/templates/jquery";

describe("jQuery templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const jQueryFramework = require(templatesLocation);
		expect(jQueryFramework.projectLibraries[0]).toBeDefined();

		for (const template of jQueryFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name)
				.toBeDefined();
		}
	});

	describe("empty project", () => {
		const project: ProjectTemplate = require(`${templatesLocation}/js/projects/empty`);

		it("generates config with a theme from the Ignite UI source", () => {
			const config = project.generateConfig("My App", "infragistics");

			expect(config).toEqual({
				name: "My App",
				theme: "infragistics",
				themePath: "$(igniteuiSource)/css/themes/infragistics/infragistics.theme.css",
				cliVersion: Util.version(),
				"dash-name": "my-app",
				description: project.description,
				dot: ".",
				igniteuiSource: "./node_modules/ignite-ui"
			});
		});

		it("generates config with a local theme path for .less and .scss themes", () => {
			expect(project.generateConfig("app", "custom.less").themePath).toBe(".themes/custom/infragistics.theme.css");
			expect(project.generateConfig("app", "custom.scss").themePath).toBe(".themes/custom/infragistics.theme.css");
		});

		it("replaces the OSS routes with the full package path on upgrade", async () => {
			const projectPath = fs.mkdtempSync(path.join(os.tmpdir(), "ig-jquery-"));
			try {
				fs.writeFileSync(path.join(projectPath, "bs-routes.json"), JSON.stringify({
					routes: {
						"/ignite-ui/js/infragistics.core.js": "core.js",
						"/ignite-ui/js/infragistics.lob.js": "lob.js",
						"/other": "other"
					}
				}));

				const result = await project.upgradeIgniteUIPackages(projectPath, "node_modules/@infragistics/ignite-ui-full/en");

				expect(result).toBeTrue();
				const config = JSON.parse(fs.readFileSync(path.join(projectPath, "bs-routes.json"), "utf8"));
				expect(config.routes).toEqual({
					"/other": "other",
					"/ignite-ui": "node_modules/@infragistics/ignite-ui-full/en"
				});
			} finally {
				fs.rmSync(projectPath, { recursive: true, force: true });
			}
		});

		it("has no extra configuration", () => {
			expect(project.getExtraConfiguration()).toEqual([]);
			expect(() => project.setExtraConfiguration({})).not.toThrow();
			expect(() => project.installModules()).toThrowError("Method not implemented.");
		});
	});
});
