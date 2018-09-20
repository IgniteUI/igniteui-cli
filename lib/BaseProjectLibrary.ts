import * as path from "path";
import { Util } from "./Util";

export class BaseProjectLibrary implements ProjectLibrary {
	public projectType: string;
	public framework: string;
	//templates: Template[];
	public name: string;
	public themes: string[];

	/** Implementation, not part of the interface */
	public groupDescriptions = new Map<string, string>();

	/** Used to prefix folders that don't contain usable templates */
	protected _ignorePrefix = "_";
	protected _projectsPath: string = "projects";
	protected _customTemplatesPath: string = "custom-templates";
	protected _generateCommandPath: string = "generate";

	private _templates: Template[];
	public get templates(): Template[] {
		let list: Template[] = [];
		for (const component of this.components) {
			list = list.concat(component.templates);
		}
		list = list.concat(this.customTemplates);
		return list;
	}
	private _projectIds: string[] = [];
	public get projectIds(): string[] {
		//read projects list
		if (!this._projectIds.length) {
			this._projectIds = Util.getDirectoryNames(path.join(this.rootPath, this._projectsPath));
			this._projectIds = this._projectIds.filter(x => !x.startsWith(this._ignorePrefix));
		}
		return this._projectIds;
	}

	private _projects: ProjectTemplate[] = [];
	public get projects(): ProjectTemplate[] {
		if (!this._projects.length) {
			this._projects = this.projectIds.map(x => this.getProject(x));
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

	private _customTemplates: Template[] = [];
	public get customTemplates(): Template[] {
		if (!this._customTemplates.length) {
			const customTemplatesFolders: string[] = Util.getDirectoryNames(path.join(this.rootPath, this._customTemplatesPath));

			for (const element of customTemplatesFolders) {
				this._customTemplates.push(require(path.join(
					this.rootPath,
					this._customTemplatesPath,
					element)) as Template);
			}
		}
		return this._customTemplates;
	}

	private _components: Component[] = [];
	public get components(): Component[] {
		if (!this._components.length) {
			//read file
			//read components lists
			const componentFolders: string[] = Util.getDirectoryNames(this.rootPath)
				.filter(
					x => x !== this._projectsPath &&
					x !== this._customTemplatesPath &&
					x !== this._generateCommandPath);

			for (const componentFolder of componentFolders) {

				this._components.push(require(path.join(this.rootPath, componentFolder)) as Component);
			}
		}
		return this._components;
	}

	private _generateTemplateFolderPath: string = "";
	public get generateTemplateFolderPath(): string {
		if (this._generateTemplateFolderPath === "") {
			this._generateTemplateFolderPath = path.join(this.rootPath, "generate");
		}
		return this._generateTemplateFolderPath;
	}

	/**
	 *
	 */
	constructor(private rootPath: string) {}

	public getTemplateById(id: string): Template {
		return this.templates.find(x => x.id === id);
	}
	public getTemplateByName(name: string): Template {
		return this.templates.find(x => x.name === name);
	}

	public registerTemplate(template: Template): void {
		if (template) {
			this.templates.push(template);
			const newComponents = template.components.filter(x => !this.components.find(f => f.name === x));
			for (const newComponent of newComponents) {
				const component: Component = {
					description: "",
					group: template.controlGroup,
					groupPriority: 0,
					name: newComponent,
					templates: []
				};
				this.components.push(component);
			}
			if (template.listInComponentTemplates) {
				const currentComponents = template.components.filter(x => this.components.find(f => f.name === x));
				for (const currentComponent of currentComponents) {
					this.components.find(f => f.name === currentComponent).templates.push(template);
				}
			}
			if (template.listInCustomTemplates) {
				this.customTemplates.push(template);
			}
		}
	}

	public getComponentByName(name: string): Component {
		return this.components.find(x => x.name === name);
	}

	public getCustomTemplates(): Template[] {
		return this.customTemplates;
	}

	public getCustomTemplateNames(): string[] {
		const cTemplates: string[] = [];
		for (const customTemplate of this.customTemplates) {
			//var p: CustomTemplate = this.customTemplates[index] as CustomTemplate;
			cTemplates.push(customTemplate.name);
		}
		return cTemplates;
	}
	public getCustomTemplateByName(name: string): Template {
		return this.customTemplates.find((x, y, z) => x.name === name);
	}

	public getComponentGroupNames(): string[] {
		let groups: string[];

		//poor-man's groupBy reduce
		groups = this.components.reduce((prev, current, index, array) => {
			if (prev.indexOf(current.group) === -1) {
				prev.push(current.group);
			}
			return prev;
		}, []);
		return groups;
	}

	public getComponentsByGroup(group: string): Component[] {
		return this.components.filter(x => x.group === group)
		.sort((a, b) => b.groupPriority - a.groupPriority);
}

	// /**
	//  * Return Component Groups with descriptions
	//  */
	public getComponentGroups(): ComponentGroup[] {
		const groups: ComponentGroup[] = [];

		for (const groupName of this.getComponentGroupNames()) {
			groups.push({
				name: groupName,
				// tslint:disable-next-line:object-literal-sort-keys
				description: this.groupDescriptions.get(groupName) || ""
			});
		}
		return groups;
	}

	public getComponentNamesByGroup(group: string): string[] {
		return this.components.filter(x => x.group === group)
			.sort((a, b) => b.groupPriority - a.groupPriority)
			.map(x => x.name);
	}

	/**
	 * Get project template
	 * @param id ID of the project template.
	 */
	public getProject(id: string): ProjectTemplate {
		if (this.hasProject(id)) {
			const projModule = require(path.join(this.rootPath, this._projectsPath, id));
			return projModule.default || projModule as ProjectTemplate;
		}
		return null;
	}

	public hasProject(id: string): boolean {
		return this.projectIds.indexOf(id) > -1;
	}
	//abstraction for projects

	public hasTemplate(id: string): boolean {
		return this.templates.find(x => x.id === id) !== undefined;
	}
}
