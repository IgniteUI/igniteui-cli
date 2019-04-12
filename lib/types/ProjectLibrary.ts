import { Component } from "./Component";
import { ComponentGroup } from "./ComponentGroup";
import { ProjectTemplate } from "./ProjectTemplate";
import { Template } from "./Template";

export abstract class ProjectLibrary {
	/** Holds the name of the library */
	public name: string;

	/** Holds collection of themes supported by the framework */
	public themes: string[];

	/** Collection of component which the framework supports e.g. igGrid, igTextEditor */
	public components: Component[];

	/** List of supported projects as template Ids (Showcases()) e.g. Empty, Showcase1, Showcase 2 */
	public projectIds: string[];

	/** List of project template instances */
	public projects: ProjectTemplate[];

	/** Collection of custom templates provided by the framework */
	public templates: Template[];

	/** JS, TS, Dart */
	public projectType: string;

	/** Returns the path to folder containing template for generate command */
	public generateTemplateFolderPath: string;

	/** List of the supported custom templates on framework level */
	public abstract getCustomTemplateNames(): string[];

	/** Returns custom template with a specified name */
	public abstract getTemplateByName(name: string): Template;

	public abstract getTemplateById(id: string): Template;

	public abstract getComponentByName(name: string): Component;

	/** Get names for all the component **groups** available for the framework */
	public abstract getComponentGroupNames(): string[];

	/** Get all components in a **group** available for the framework */
	public abstract getComponentsByGroup(group: string): Component[];

	/** Get Component Groups with descriptions */
	public abstract getComponentGroups(): ComponentGroup[];

	/** Get all custom Templates  */
	public abstract getCustomTemplates(): Template[];

	public abstract getProject(name?: string): ProjectTemplate;

	/** Returns true is the framework contains project with a specific name */
	public abstract hasProject(name: string): boolean;

	/** Returns true is the framework contains template with a specific name */
	public abstract hasTemplate(name: string): boolean;

	/** This method is called to perform registration of the template into the Framework */
	public abstract registerTemplate(template: Template): void;
}
