import * as path from "path";
import { ProjectConfig } from "./ProjectConfig";
import { AngularTemplate } from "./templates/AngularTemplate";
import { IgniteUIForAngularTemplate } from "./templates/IgniteUIForAngularTemplate";
import { jQueryTemplate } from "./templates/jQueryTemplate";
import { ReactTemplate } from "./templates/ReactTemplate";
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
		// load and initialize templates
		for (const framework of frameworks) {
			this.frameworks.push(require(path.join(__dirname, this._templatesPath, framework)) as Framework);

		}

		// load external templates
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

	/** Read config and load custom templates based on type */
	private loadExternalTemplates() {
		const config = ProjectConfig.getConfig();
		const customTemplates: Template[] = [];
		for (const entry of config.customTemplates) {
			let template: Template;
			// tslint:disable-next-line:prefer-const
			let [ protocol, value ] = entry.split(/(^[^:]+):/).filter(x => x);
			switch (protocol) {
				default:
					// in case just path is passed:
					value = entry;
				case "file":
				case "path":
					value = value.replace(/template\.json$/, "");
					if (Util.directoryExists(value)) {
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
				case "ignored":
					break;
			}
		}
		this.addTemplates(customTemplates);
	}

	/**
	 * Loads properties from a JSON file and initializes a base Template implementation
	 * @param filePath Path to a json config file representing a template
	 * @returns null if no proper file is found
	 */
	private loadFromConfig(filePath: string): Template {
		let template: Template = null;
		if (Util.fileExists(filePath)) {
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
				default:
					Util.error(`The framework/project type for template with id "${settings.id}" is not supported.`);
					Util.error(`File path: ${filePath}`);
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
				Util.error(`The framework/project type for template with id "${template.id}" is not supported.`);
				continue;
			}
			if (projectLib.hasTemplate(template.id)) {
				Util.error(`Template with id "${template.id}" already exists.`);
				continue;
			}
			if (projectLib.getComponentGroups().indexOf(template.controlGroup) === -1) {
				Util.error(`No supported group for template with id "${template.id}".`);
				continue;
			}
			projectLib.registerTemplate(template);
		}
	}

	//#endregion
}
