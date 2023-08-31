import { ControlExtraConfiguration } from "./ControlExtraConfiguration";
import { TemplateDelimiters } from "./TemplateReplaceDelimiters";

/** Base template interface */
export interface BaseTemplate {
	/** ID of the template to be called in directly (matches the CLI full command parameter) */
	id: string;

	/** Friendly name of the template (for steps) */
	name: string;

	/** Description of what the template includes */
	description: string;

	/** An object that specifies what string should be used as start and end delimiters */
	delimiters: TemplateDelimiters;

	/** List of dependencies needed to load components. */
	dependencies: ((string | object))[];

	/** jquery, react, angular */
	framework: string;

	/** ts, js, dart, ts-cli, js-cli */
	projectType: string;

	/** This property controls if extra configuration is available to the template */
	hasExtraConfiguration: boolean;
	/** An array with the physical path to the template files */
	templatePaths: string[];

	/** Generates template config */
	generateConfig(name: string, ...options: any[]): { [key: string]: any };

	/** this method is used to run extra configuration in context of prompt session */
	getExtraConfiguration(): ControlExtraConfiguration[];

	/** This method is used when the user selects extra configuration and it should be passed to the template */
	setExtraConfiguration(extraConfigKeys: {});
}
