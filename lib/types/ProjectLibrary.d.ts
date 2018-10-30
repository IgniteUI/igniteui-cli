
interface ProjectLibrary {
	/** Holds the name of the library */
	name: string;
	/** Holds collection of themes supported by the framework */
	themes: string[];
	/** Collection of component which the framework supports e.g. igGrid, igTextEditor */
	components: Component[];
	/**List of supported projects as template Ids (Showcases()) e.g. Empty, Showcase1, Showcase 2 */
	projectIds: string[];
	/** List of project template instances */
	projects: ProjectTemplate[];
	/**Collection of custom templates provided by the framework */
	templates: Template[];
	/** JS, TS, Dart */
	projectType: string;
	/**Returns the path to folder containing template for generate command */
	generateTemplateFolderPath: string;
	/** List of the supported custom templates on framework level */
	getCustomTemplateNames(): string[];

	/** Returns custom template with a specified name */
	getTemplateByName(name: string): Template;

	getTemplateById(id: string): Template;

	getComponentByName(name: string): Component;

	/** Get names for all the component **groups** available for the framework */
	getComponentGroupNames(): string[];

	/** Get all components in a **group** available for the framework */
	getComponentsByGroup(group: string): Component[];

	/** Get Component Groups with descriptions */
	getComponentGroups(): ComponentGroup[];

	/** Get all custom Templates  */
	getCustomTemplates(): Template[];

	getProject(name?: string): ProjectTemplate;

	/** Returns true is the framework contains project with a specific name */
	hasProject(name: string): boolean;

	/** Returns true is the framework contains template with a specific name*/
	hasTemplate(name: string): boolean;

	/** This method is called to perform registration of the template into the Framework */
	registerTemplate(template: Template): void;
}
