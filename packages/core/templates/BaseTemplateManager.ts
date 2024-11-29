import * as path from "path";
import { Framework, ProjectLibrary, Template } from "../types";
import { ProjectConfig, Util } from "../util";

export abstract class BaseTemplateManager {
	protected frameworks: Framework[] = [];

	constructor(private templatesAbsPath: string) {

		// read dirs and push dir names into frameworks
		const frameworks = Util.getDirectoryNames(this.templatesAbsPath);
		// load and initialize templates
		for (const framework of frameworks) {
			this.frameworks.push(require(path.join(this.templatesAbsPath, framework)) as Framework);
		}

		// load external templates
		this.loadExternalTemplates();
	}

	public getFrameworkIds(): string[] {
		return this.frameworks.map(f => f.id);
	}
	public getFrameworkNames(): string[] {
		// еxclude WebComponents from the Step-By-Step wizard
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
			if (typeof element === "string" && config.project.components.indexOf(element) === -1) {
				config.project.components.push(element);
			}
		}
		ProjectConfig.setConfig(config);
	}

	//#region plugin templates

	/**
	 * Loads properties from a JSON file and initializes a base Template implementation
	 * @param filePath Path to a json config file representing a template
	 * @returns null if no proper file is found
	 */
	protected abstract loadFromConfig(filePath: string): Template;

	/** Read config and load custom templates based on type */
	private loadExternalTemplates() {
		const config = ProjectConfig.getConfig();
		const customTemplates: Template[] = [];
		for (const entry of config.customTemplates) {
			let template: Template;
			// tslint:disable-next-line:prefer-const
			let [protocol, value] = entry.split(/(^[^:]+):/).filter(x => x);
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
			if (projectLib.getComponentGroupNames().indexOf(template.controlGroup) === -1 && !template.listInCustomTemplates) {
				Util.error(`No supported group for template with id "${template.id}".`);
				continue;
			}
			projectLib.registerTemplate(template);
		}
	}

	//#endregion
}
