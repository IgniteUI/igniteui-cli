import { AddTemplateArgs } from "./AddTemplateArgs";
import { BaseTemplate } from "./BaseTemplate";

/** Template interface for views/components */
export interface Template extends BaseTemplate {
	/** CustomTemplate */
	/** Component this template collection can belong to */
	components: string[];

	/** This property is controls on which control group to be shown the template */
	controlGroup: string;

	/** Step by step */
	listInComponentTemplates: boolean;

	listInCustomTemplates: boolean;

	/** Extra packages to install when adding to project */
	packages: string[];

	/** Generates template files. */
	generateConfig(name: string, options?: {[key: string]: any}): {[key: string]: any};
	/** Called when the template is added to a project */
	registerInProject(projectPath: string, name: string, options?: AddTemplateArgs);
}
