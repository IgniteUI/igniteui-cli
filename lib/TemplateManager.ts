import * as path from "path";
import { Util } from "./Util";
import { ProjectConfig } from "./ProjectConfig";

export class TemplateManager {

	private _templatesPath: string = "../templates";

	private _quickstartTemplatesPath: string = "quickstart";

	
	private frameworks : Framework[] = [];
	
	getFrameworkIds() : string[] {
		return this.frameworks.map(f => f.id);
	}
	getFrameworkNames() : string[] {
		return this.frameworks.map(f => f.name);
	}
	/**  Returns framework found by its name or undefined. */
	getFrameworkByName(name: string) : Framework {
		return this.frameworks.find(s => s.name == name);
	}
	/**  Returns framework found by its ID or undefined. */
	getFrameworkById(id: string): Framework {
		return this.frameworks.find(f => f.id == id);
	}
	/**
	 * Get a specific project library
	 * @param frameworkId 
	 * @param projectType 
	 * @returns Returns projectLibrary, or null.
	 */
	getProjectLibrary(frameworkId: string, projectType?: string): ProjectLibrary {
		var framework = this.frameworks.find(f => f.id == frameworkId);
		if (framework) {
			if (projectType) {
				return framework.projectLibraries.find(x => x.projectType == projectType);
			} else {
				return framework.projectLibraries.length > 0 ? framework.projectLibraries[0] : null;
			}
		}
		return null;
	}

	public initializeTemplate() {
		var templates = [];
		//Load and initialize templates


		//Load external templates
		//Load component definitions 
		this.addTemplates(templates);

	}
	
	// plugin templates come here
	private addTemplates(templates: Template[]) {
		for (var i = 0; i < templates.length; i++) {
			var template = templates[i];
			var projectLib = this.getProjectLibrary(template.framework, template.projectType);
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
				throw "No matching component found";
			}
			projectLib.registerTemplate(template);
		}
	}

	public updateProjectConfiguration(template: Template) {
		var config = ProjectConfig.getConfig();

		//Add each separately to avoid duplicates:
		for (var i = 0; i < template.dependencies.length; i++) {
			var element = template.dependencies[i];
			if (config.project.components.indexOf(template.dependencies[i]) === -1) {
				config.project.components.push(template.dependencies[i]);
			}
		}
		ProjectConfig.setConfig(config);
	}
	constructor(templatesPath?: string) {
		if (templatesPath) {
			this._templatesPath = templatesPath;
		}

		//Read dirs and push dir names into frameworks
		var frameworks = Util.getDirectoryNames(path.join(__dirname, this._templatesPath)).filter(x => x !== this._quickstartTemplatesPath);
		for (var i = 0; i < frameworks.length; i++) {
			this.frameworks.push(require(path.join(__dirname, this._templatesPath, frameworks[i])) as Framework);
			
		}
	}

}