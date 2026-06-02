import { BaseTemplate } from "./BaseTemplate";

/** Options passed to a project template's `scaffold` method. */
export interface ScaffoldOptions {
	/** Project name (already validated alphanumeric-ext by the host). */
	name: string;
	/** Theme to apply, one of the library's themes (e.g. bootstrap|material|fluent|indigo). */
	theme: string;
	/** Skip restoring/installing packages after scaffolding. */
	skipInstall?: boolean;
	/** Skip git initialization. */
	skipGit?: boolean;
	/** Additional template-specific configuration (e.g. { Hosting, Variant }). */
	extraConfig?: { [key: string]: any };
}

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

	/**
	 * Optional alternative scaffolding strategy. When implemented, the host calls this
	 * instead of the generateConfig → processTemplates → installPackages pipeline.
	 * @param options Scaffold options
	 * @returns true on success, false on failure.
	 */
	scaffold?(options: ScaffoldOptions): Promise<boolean>;
}
