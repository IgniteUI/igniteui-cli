import * as path from "path";
import { Util } from "./Util";

export class BaseProjectLibrary implements ProjectLibrary {	
	projectType: string;
	framework: string;
	//templates: Template[];
	name: string;
	themes: string[];
	
	protected _projectsPath: string = "projects";
	protected _customTemplatesPath: string = "custom-templates";
	private rootPath: string;

	
	private _templates : Template[];
	public get templates() : Template[] {
		var list: Template[] = [];
		for (var i = 0; i < this.components.length; i++) {
			var component = this.components[i];
			list = list.concat(component.templates);
		}
		list = list.concat(this.customTemplates);
		return list;
	}
	private _projects : string[] = [];
	public get projects() : string[] {
		//read projects list
		if (!this._projects.length) {
			this._projects = Util.getDirectoryNames(path.join(this.rootPath, this._projectsPath));
		}
		return this._projects;
	}

	
/*	private _customTemplates : string[];
	public get customTemplates() : string[] {
		if (!this._customTemplates.length) {
			this._customTemplates = Util.getDirectoryNames(path.join(this.rootPath, this._customTemplatesPath));
		}
		return this._customTemplates;
	}*/
	
	private _customTemplates : Template[] = [];
	public get customTemplates() : Template[] {
		if (!this._customTemplates.length) {
			var customTemplatesFolders: string[] = Util.getDirectoryNames(path.join(this.rootPath, this._customTemplatesPath));
			
			for (var index = 0; index < customTemplatesFolders.length; index++) {
				var element = customTemplatesFolders[index];
				this._customTemplates.push(require(path.join(
					this.rootPath, 
					this._customTemplatesPath, 
					customTemplatesFolders[index])) as Template);
			}
		}
		return this._customTemplates;
	}
	
	
	
	private _components : Component[] = [];
	public get components() : Component[] {
		if (!this._components.length) {
			//read file
			//read components lists
			var componentFolders: string[] = Util.getDirectoryNames(this.rootPath)
				.filter(x => x !== this._projectsPath && x !== this._customTemplatesPath);

			for (var i = 0; i < componentFolders.length; i++) {
				this._components.push(require(path.join(this.rootPath, componentFolders[i])) as Component);
			}
		}
		return this._components;
	}

	/**
	 *
	 */
	constructor(rootPath?: string) {
		this.rootPath = rootPath ? rootPath : __dirname;
		//Load the templates

	}
	getTemplateById(id: string): Template {
		return this.templates.find(x => x.id == id);
	}
	getTemplateByName(name: string): Template {
		return this.templates.find(x => x.name == name);
	}
	registerTemplate(template: Template): void {
		if (template) {
			this.templates.push(template);
			var newComponents = template.components.filter(x => !this.components.find(f => f.name == x));
			for (var j = 0; j < newComponents.length; j++) {
				
				var component: Component = {
					group: template.controlGroup,
					name: newComponents[j],
					templates:[]
				}
				this.components.push(component);
			}
		}
	}

	getComponentByName(name: string): Component {
		return this.components.find(x => x.name === name);
	}
	getCustomTemplates(): string[] {
		var cTemplates: string[] = [];
		for (var index = 0; index < this.customTemplates.length; index++) {
			//var p: CustomTemplate = this.customTemplates[index] as CustomTemplate;
			cTemplates.push(this.customTemplates[index].name);
		}
		return cTemplates;
	}
	getCustomTemplateByName(name: string): Template {
		return this.customTemplates.find((x, y, z) => x.name === name);
	}

	public getComponentGroups(): string[] {
		var groups: string[];

		//poor-man's groupBy reduce
		groups = this.components.reduce((prev, current, index, array) => {
			if(prev.indexOf(current.group) === -1) {
				prev.push(current.group);
			}
			return prev;
		}, []);
		return groups;
	}

	getComponentNamesByGroup(group: string): string[] {
		return this.components.filter(x => x.group === group ).map(x => x.name);
	}

	/**
	 * Get project template
	 * @param name Optional name of the project template. Defaults to "empty"
	 */
	getProject(name: string = "empty"): ProjectTemplate {
		if (this.hasProject(name)) {
			return require(path.join(this.rootPath, this._projectsPath, name)) as ProjectTemplate;
		}
		return null;
	}

	hasProject(name: string): boolean {
		return this.projects.indexOf(name) > -1;
	}
	//abstraction for projects

	hasTemplate (id: string) : boolean {
		return this.templates.find(x => x.id == id) != undefined;
	}
}