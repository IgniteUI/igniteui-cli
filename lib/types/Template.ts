import { AddTemplateArgs } from "./AddTemplateArgs";
import { BaseTemplate } from "./BaseTemplate";

/** Template interface for views/components */
export abstract class Template extends BaseTemplate {
	/** CustomTemplate */
	/** Component this template collection can belong to */
	public components: string[];

	/** This property is controls on which control group to be shown the template */
	public controlGroup: string;

	/** Step by step */
	public listInComponentTemplates: boolean;

	public listInCustomTemplates: boolean;

	/** Extra packages to install when adding to project */
	public packages: string[];

	/** Generates template files. */
	public abstract generateFiles(
		projectPath: string, name: string, options?: { [key: string]: any }): Promise<boolean>;

	/** Called when the template is added to a project */
	public abstract registerInProject(projectPath: string, name: string, options?: AddTemplateArgs);
}
