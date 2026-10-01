import {
	AGENTS_TEMPLATE_FILE, AI_CONFIG_PROJECT_ID, AI_SKILLS_DIR_NAME, App, DotnetTemplateManager, Framework
} from "@igniteui/cli-core";
import path from "path";
import * as fs from "fs";
import { EmptyIgbProject } from "../../packages/cli/templates/blazor/igb/projects/empty";

const templatesLocation = "../../packages/cli/templates/blazor";
describe("Blazor templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const blazorFramework = require(templatesLocation);
		expect(blazorFramework.projectLibraries[0]).toBeDefined();

		for (const template of blazorFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
		}
	});

	it("Blazor framework should not be hidden", () => {
		const blazorFramework: Framework = require(templatesLocation);
		expect(blazorFramework.hidden).toBeFalse();
	});

	it("igb library should expose the four Blazor themes", () => {
		const blazorFramework: Framework = require(templatesLocation);
		const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb");
		expect(projLibrary.themes).toEqual(["bootstrap", "material", "fluent", "indigo"]);
	});

	it("empty project template should be registered and visible", () => {
		const blazorFramework: Framework = require(templatesLocation);
		const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb");
		const emptyProject = projLibrary.getProject("empty");
		expect(emptyProject).toBeDefined();
		expect(emptyProject.isHidden).toBeFalse();
		expect(typeof emptyProject.scaffold).toBe("function");
	});

	describe("ai-config template file presence", () => {
		it("ai-config project template must be registered", () => {
			const blazorFramework: Framework = require(templatesLocation);
			const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb");
			expect(projLibrary.getProject(AI_CONFIG_PROJECT_ID)).toBeDefined();
		});

		const filesDir = path.resolve(__dirname, "../..", `packages/cli/templates/blazor/igb/projects/${AI_CONFIG_PROJECT_ID}/files`);

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

	describe("empty project", () => {
		let project: EmptyIgbProject;
		let scaffoldSpy: jasmine.Spy;

		beforeEach(() => {
			project = new EmptyIgbProject();
			scaffoldSpy = spyOn(DotnetTemplateManager, "scaffold").and.returnValue(true);
		});

		it("asks for hosting model and theme variant", () => {
			expect(project.getExtraConfiguration().map(c => [c.key, c.default])).toEqual([
				["Hosting", "Server"],
				["Variant", "light"]
			]);
		});

		it("maps positional answers to configuration keys and ignores extra values", async () => {
			project.setExtraConfiguration(["Wasm", "dark", "unexpected"]);

			await project.scaffold({ name: "app", theme: "material" });

			expect(scaffoldSpy).toHaveBeenCalledWith({
				name: "app", theme: "material", extraConfig: { Hosting: "Wasm", Variant: "dark" }
			});
		});

		it("merges object configuration with earlier values", async () => {
			project.setExtraConfiguration(["Auto"]);
			project.setExtraConfiguration({ Variant: "dark" });

			await project.scaffold({ name: "app", theme: "fluent" });

			expect(scaffoldSpy).toHaveBeenCalledWith(jasmine.objectContaining({
				extraConfig: { Hosting: "Auto", Variant: "dark" }
			}));
		});

		it("lets scaffold options override stored configuration", async () => {
			project.setExtraConfiguration(["Wasm", "dark"]);

			await project.scaffold({ name: "app", theme: "indigo", skipInstall: true, extraConfig: { Hosting: "Server" } });

			expect(scaffoldSpy).toHaveBeenCalledWith({
				name: "app", theme: "indigo", skipInstall: true, extraConfig: { Hosting: "Server", Variant: "dark" }
			});
		});

		it("resolves with the scaffold result", async () => {
			scaffoldSpy.and.returnValue(false);

			expect(await project.scaffold({ name: "app", theme: "bootstrap" })).toBeFalse();
		});

		it("does not implement the generateConfig pipeline", () => {
			expect(() => project.generateConfig("app", "bootstrap")).toThrowError("Method not implemented.");
			expect(() => project.installModules()).toThrowError("Method not implemented.");
			expect(() => project.upgradeIgniteUIPackages("", "")).toThrowError("Method not implemented.");
		});
	});
});
