import * as path from "path";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

export class TemplateManager {

	private _templatesPath: string = "../templates";

	private _quickstartTemplatesPath: string = "quickstart";

	private frameworks: Framework[] = [];

	constructor(templatesPath?: string) {
		if (templatesPath) {
			this._templatesPath = templatesPath;
		}

		// read dirs and push dir names into frameworks
		const frameworks = Util.getDirectoryNames(path.join(__dirname, this._templatesPath))
			.filter(x => x !== this._quickstartTemplatesPath);
		for (const framework of frameworks) {
			this.frameworks.push(require(path.join(__dirname, this._templatesPath, framework)) as Framework);

		}
	}

	public getFrameworkIds(): string[] {
		return this.frameworks.map(f => f.id);
	}
	public getFrameworkNames(): string[] {
		return this.frameworks.map(f => f.name);
	}
	/**  Returns framework found by its name or undefined. */
	public getFrameworkByName(name: string): Framework {
		return this.frameworks.find(s => s.name === name);
	}
	/**  Returns framework found by its ID or undefined. */
	public getFrameworkById(id: string): Framework {
		return this.frameworks.find(f => f.id === id);
	}
	/**
	 * Get a specific project library
	 * @param frameworkId
	 * @param projectType
	 * @returns Returns projectLibrary, or null.
	 */
	public getProjectLibrary(frameworkId: string, projectType?: string): ProjectLibrary {
		const framework = this.frameworks.find(f => f.id === frameworkId);
		if (framework) {
			if (projectType) {
				return framework.projectLibraries.find(x => x.projectType === projectType);
			} else {
				return framework.projectLibraries.length > 0 ? framework.projectLibraries[0] : null;
			}
		}
		return null;
	}

	public initializeTemplate() {
		const templates = [];
		// load and initialize templates

		// load external templates
		// load component definitions
		this.addTemplates(templates);

	}

	public updateProjectConfiguration(template: Template) {
		const config = ProjectConfig.getConfig();

		// add each separately to avoid duplicates:
		for (const element of template.dependencies) {
			if (config.project.components.indexOf(element) === -1) {
				config.project.components.push(element);
			}
		}
		ProjectConfig.setConfig(config);
	}

	// plugin templates come here
	private addTemplates(templates: Template[]) {
		for (const template of templates) {
			const projectLib = this.getProjectLibrary(template.framework, template.projectType);
			if (!projectLib) {
				throw new Error("The framework of the template is not supported.");
			}
			if (projectLib.hasTemplate(template.id)) {
				throw new Error("Template id already exists.");
			}
			if (projectLib.getComponentGroups().indexOf(template.controlGroup) === -1) {
				throw new Error("Not supported group");
			}
			if (projectLib.getComponentNamesByGroup(template.controlGroup).indexOf(template.components[0]) === -1) {
				throw new Error("No matching component found");
			}
			projectLib.registerTemplate(template);
		}
	}
}
