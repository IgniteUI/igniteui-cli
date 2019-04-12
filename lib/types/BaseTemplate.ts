import { ControlExtraConfiguration } from "./ControlExtraConfiguration";

/** Base template interface */
export abstract class BaseTemplate {
	/** ID of the template to be called in directly (matches the CLI full command parameter) */
	public id: string;

	/** Friendly name of the template (for steps) */
	public name: string;

	/** Description of what the template includes */
	public description: string;

	/** List of dependencies needed to load components. */
	public dependencies: Array<(string | object)>;

	/** jquery, react, angular */
	public framework: string;

	/** ts, js, dart, ts-cli, js-cli */
	public projectType: string;

	/** This property controls if extra configuration is available to the template */
	public hasExtraConfiguration: boolean;

	/** Generates template files. */
	public abstract generateFiles(outputPath: string, name: string, ...options: any[]): Promise<boolean>;

	/** this method is used to run extra configuration in context of prompt session */
	public abstract getExtraConfiguration(): ControlExtraConfiguration[];

	/** This method is used when the user selects extra configuration and it should be passed to the template */
	public abstract setExtraConfiguration(extraConfigKeys: {});
}
