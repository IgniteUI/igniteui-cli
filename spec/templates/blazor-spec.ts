import {
	AGENTS_TEMPLATE_FILE, AI_CONFIG_PROJECT_ID, AI_SKILLS_DIR_NAME, App, DotnetTemplateManager, Framework
} from "@igniteui/cli-core";
import path from "path";
import * as fs from "fs";
import { EmptyIgbProject } from "../../packages/cli/templates/blazor/igb/projects/empty";
import { WebAppIgbProject } from "../../packages/cli/templates/blazor/igb/projects/web-app";

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
		const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb")!;
		expect(projLibrary.themes).toEqual(["bootstrap", "material", "fluent", "indigo"]);
	});

	it("empty and web-app project templates should be registered and visible", () => {
		const blazorFramework: Framework = require(templatesLocation);
		const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb")!;
		expect(projLibrary.projects.filter(p => !p.isHidden).map(p => p.id)).toEqual(["empty", "web-app"]);
		for (const id of ["empty", "web-app"]) {
			const project = projLibrary.getProject(id)!;
			expect(project).withContext(id).toBeDefined();
			expect(typeof project.scaffold).withContext(id).toBe("function");
		}
	});

	describe("ai-config template file presence", () => {
		it("ai-config project template must be registered", () => {
			const blazorFramework: Framework = require(templatesLocation);
			const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb")!;
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

	describe("dotnet-scaffolded project", () => {
		let project: WebAppIgbProject;
		let scaffoldSpy: jasmine.Spy;

		beforeEach(() => {
			project = new WebAppIgbProject();
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

	describe("empty project", () => {
		let scaffoldSpy: jasmine.Spy;

		beforeEach(() => {
			scaffoldSpy = spyOn(DotnetTemplateManager, "scaffold").and.returnValue(true);
		});

		it("asks the same questions as the web app", () => {
			expect(new EmptyIgbProject().getExtraConfiguration()).toEqual(new WebAppIgbProject().getExtraConfiguration());
		});

		it("requests the template's Empty option on top of the user's answers", async () => {
			const project = new EmptyIgbProject();
			project.setExtraConfiguration(["Wasm", "dark"]);

			await project.scaffold({ name: "app", theme: "material", extraConfig: { Empty: false } });

			expect(scaffoldSpy).toHaveBeenCalledWith({
				name: "app", theme: "material", extraConfig: { Hosting: "Wasm", Variant: "dark", Empty: true }
			});
		});
	});
});
