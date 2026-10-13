import { AI_CONFIG_PROJECT_ID, App, Config, Framework, ProjectConfig, ProjectLibrary, ProjectTemplate } from "@igniteui/cli-core";
import * as fs from "fs";

// Contract checks run against every project and component template of each framework,
// so thin template definitions get exercised without a spec per template.
const frameworks = ["jquery", "react", "webcomponents", "blazor"];

describe("Template contracts", () => {
	beforeAll(() => {
		App.initialize();
	});

	beforeEach(() => {
		// component templates read the project config (e.g. jQuery theme and source paths)
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: { theme: "infragistics", igniteuiSource: "./node_modules/ignite-ui", themePath: "" }
		} as unknown as Config);
	});

	for (const frameworkId of frameworks) {
		const framework: Framework = require(`../../packages/cli/templates/${frameworkId}`);

		for (const library of framework.projectLibraries) {
			describe(`${frameworkId}/${library.projectType}`, () => {
				it("projects match their library and have an existing template path", () => {
					for (const project of projects(library)) {
						expect(project.framework).withContext(`project ${project.id} framework`).toBe(frameworkId);
						// ai-config is a partial looked up by id, its projectType isn't used
						if (project.id !== AI_CONFIG_PROJECT_ID) {
							expect(project.projectType).withContext(`project ${project.id} type`).toBe(library.projectType);
						}
						// scaffold-based projects (blazor) generate files externally
						if (!project.scaffold) {
							expect(project.templatePaths.some(p => fs.existsSync(p)))
								.withContext(`project ${project.id} paths ${project.templatePaths}`).toBeTrue();
						}
					}
				});

				it("projects generate a config for each theme", () => {
					const generating = projects(library).filter(p => p.id !== AI_CONFIG_PROJECT_ID && !p.scaffold);
					for (const project of generating) {
						for (const theme of library.themes) {
							const config = project.generateConfig("My App", theme);
							expect(config).withContext(`project ${project.id}, theme ${theme}`).toEqual(jasmine.any(Object));
							expect(config.name).withContext(`project ${project.id} name`).toBe("My App");
						}
					}
				});

				it("projects with extra configuration expose it", () => {
					for (const project of projects(library).filter(p => p.hasExtraConfiguration)) {
						expect(project.getExtraConfiguration().length).withContext(`project ${project.id}`).toBeGreaterThan(0);
					}
				});

				it("component templates match their library and have existing template paths", () => {
					for (const template of library.templates) {
						expect(template.framework).withContext(`template ${template.id} framework`).toBe(frameworkId);
						expect(template.projectType).withContext(`template ${template.id} type`).toBe(library.projectType);
						for (const templatePath of template.templatePaths) {
							expect(fs.existsSync(templatePath)).withContext(`template ${template.id} path ${templatePath}`).toBeTrue();
						}
					}
				});

				it("component templates with extra configuration expose it", () => {
					for (const template of library.templates.filter(t => t.hasExtraConfiguration)) {
						expect(template.getExtraConfiguration().length).withContext(`template ${template.id}`).toBeGreaterThan(0);
						expect(() => template.setExtraConfiguration({})).withContext(`template ${template.id}`).not.toThrow();
					}
				});

				it("component templates generate a config", () => {
					for (const template of library.templates) {
						const config = template.generateConfig("My Component", {});
						expect(config).withContext(`template ${template.id}`).toEqual(jasmine.any(Object));
						expect(config.name).withContext(`template ${template.id} name`).toBe("My Component");
					}
				});
			});
		}
	}
});

function projects(library: ProjectLibrary): ProjectTemplate[] {
	return library.projectIds.map(id => {
		const project = library.getProject(id);
		expect(project).withContext(`project ${id}`).toBeDefined();
		return project;
	});
}
