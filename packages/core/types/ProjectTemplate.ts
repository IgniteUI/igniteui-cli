import { BaseTemplate } from "./BaseTemplate";

/** Interface for project templates */
export interface ProjectTemplate extends BaseTemplate {
	/** This method should be called after generateConfig completes. */
	installModules(): void;

	/**
	 * Called initially when the project updates to using the full Ignite UI package.
	 * This should apply any required changes, e.g. replace OSS package routes with the provided one instead.
	 * @param projectPath The project root folder
	 * @param packagePath The relative path to the new package folder
	 */
	upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean>;

	/** Generates template files. */
	generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any};
}
