import * as path from "path";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";
import { jQueryTemplate } from "./templates/jQueryTemplate";
import { ReactTemplate } from "./templates/ReactTemplate";
import { AngularTemplate } from "./templates/AngularTemplate";
import { IgniteUIForAngularTemplate } from "./templates/IgniteUIForAngularTemplate";

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
		this.loadExternalTemplates();
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
	 * Get ProjectLibrary Names list
	 * @param frameworkId
	 * @returns Returns projectLibrary names array
	 */
	public getProjectLibraryNames(frameworkId: string): string[] {
		let projects = [];
		const framework = this.frameworks.find(f => f.id === frameworkId);
		if (framework) {
			projects = framework.projectLibraries.map(x => x.name);
		}
		return projects;
	}

	/**
	 * Get ProjectLibrary by name
	 * @param framework
	 * @param name
	 * @returns Returns matching projectLibrary or undefined
	 */
	public getProjectLibraryByName(framework: Framework, name: string): ProjectLibrary {
		let projectLib: ProjectLibrary;
		if (name) {
			projectLib = framework.projectLibraries.find(x => x.name === name);
		}
		return projectLib;
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

	//#region plugin templates

	private loadExternalTemplates() {
		const config = ProjectConfig.getConfig();
		const customTemplates: Template[] = [];
		for (const entry of config.customTemplates) {
			let template: Template;
			// tslint:disable-next-line:prefer-const
			let [ protocol, value ] = entry.split(":");
			switch (protocol) {
				case "file":
				case "path":
					value = value.replace(/template\.json$/, "");
					if (Util.isDirectory(value)) {
						// try single template
						template = this.loadFromConfig(path.join(value, "template.json"));
						if (template !== null) {
							customTemplates.push(template);
							break;
						}
						// try folder of templates:
						for (const folder of Util.getDirectoryNames(value)) {
							template = this.loadFromConfig(path.join(value, folder, "template.json"));
							if (template !== null) {
								customTemplates.push(template);
							}
						}
					} else {
						// TODO: Util.log(`Ignored: Incorrect custom template path for "${entry}".`);
					}
					break;
				default:
					break;
			}
		}
		this.addTemplates(customTemplates);
	}

	/**
	 * Loads properties from a JSON file and initializes a base Template implementation
	 * @param filePath Path to a json config file representing a template
	 */
	private loadFromConfig(filePath: string): Template {
		let template: Template = null;
		if (Util.isFile(filePath)) {
			const rootPath = path.dirname(filePath);
			const settings = require(filePath) as Template;
			switch (`${settings.framework}|${settings.projectType}`) {
				case "jquery|js":
					template = new jQueryTemplate(rootPath);
					break;
				case "react|es6":
					template = new ReactTemplate(rootPath);
					break;
				case "angular|ig-ts":
					template = new AngularTemplate(rootPath);
					break;
				case "angular|igx-ts":
					template = new IgniteUIForAngularTemplate(rootPath);
					break;
			}
			if (template !== null) {
				Object.assign(template, settings);
			}
		}
		return template;
	}

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

	//#endregion
}
