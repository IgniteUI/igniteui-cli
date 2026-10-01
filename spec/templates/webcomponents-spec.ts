import { AGENTS_TEMPLATE_FILE, AI_CONFIG_PROJECT_ID, AI_SKILLS_DIR_NAME, App, Framework, Util } from "@igniteui/cli-core";
import path from "path";
import * as fs from "fs";
import { BaseIgcProject } from "../../packages/cli/templates/webcomponents/igc-ts/projects/_base";
import { BaseWithHomeIgcProject } from "../../packages/cli/templates/webcomponents/igc-ts/projects/_base_with_home";
import { EmptyPageTemplate } from "../../packages/cli/templates/webcomponents/igc-ts/projects/empty";

const templatesLocation = "../../packages/cli/templates/webcomponents";
describe("Web Components templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const wcFramework = require(templatesLocation);
		expect(wcFramework.projectLibraries[0]).toBeDefined();

		for (const template of wcFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
		}
	});

	it("Igc Templates should have no internal collisions", async () => {
		const wcFramework: Framework = require(templatesLocation);
		const projLibrary = wcFramework.projectLibraries.find(x => x.projectType === "igc-ts");
		expect(projLibrary).toBeDefined();

		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					(Util as any).validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {path: "1"}, {})
				)
					.withContext(`Template ${element.id} can overwrite ${target.id}`)
					.toBeTruthy();
			}
		}
	});

	describe("base projects", () => {
		it("base project generates its config", () => {
			const project = new BaseIgcProject();

			expect(project.generateConfig("My App", "default")).toEqual({
				name: "My App",
				theme: "default",
				cliVersion: Util.version(),
				CustomTheme: "",
				dashName: "my-app",
				DefaultTheme: "",
				dot: ".",
				path: "My App",
				projectTemplate: "base",
				yamlDefaultBranch: "<%=yaml-default-branch%>"
			});
		});

		it("derived projects use their own id and the main branch", () => {
			const config = new EmptyPageTemplate().generateConfig("app", "default");

			expect(config.projectTemplate).toBe("empty");
			expect(config.yamlDefaultBranch).toBe("main");
		});

		it("derived projects extend the base template paths", () => {
			const basePaths = new BaseIgcProject().templatePaths;
			const withHomePaths = new BaseWithHomeIgcProject().templatePaths;

			expect(withHomePaths.slice(0, basePaths.length)).toEqual(basePaths);
			expect(new EmptyPageTemplate().templatePaths.slice(0, withHomePaths.length)).toEqual(withHomePaths);
		});

		it("base project has no extra configuration", () => {
			const project = new BaseIgcProject();

			expect(project.getExtraConfiguration()).toEqual([]);
			expect(() => project.setExtraConfiguration([])).not.toThrow();
			expect(() => project.installModules()).toThrowError("Method not implemented.");
		});
	});

	describe("ai-config template file presence", () => {
		it("ai-config project template must be registered", () => {
			const wcFramework: Framework = require(templatesLocation);
			const projLibrary = wcFramework.projectLibraries.find(x => x.projectType === "igc-ts");
			expect(projLibrary.getProject(AI_CONFIG_PROJECT_ID)).toBeDefined();
		});

		const filesDir = path.resolve(__dirname, "../..", `packages/cli/templates/webcomponents/igc-ts/projects/${AI_CONFIG_PROJECT_ID}/files`);

		it("AGENTS.md must exist in files/", () => {
			expect(fs.existsSync(path.join(filesDir, AGENTS_TEMPLATE_FILE)))
				.withContext(`Missing ${AGENTS_TEMPLATE_FILE} in ${filesDir}`)
				.toBeTrue();
		});

		it("skills/ directory must exist in files/", () => {
			expect(fs.existsSync(path.join(filesDir, AI_SKILLS_DIR_NAME)))
				.withContext(`Missing ${AI_SKILLS_DIR_NAME}/ in ${filesDir}`)
				.toBeTrue();
		});
	});
});
