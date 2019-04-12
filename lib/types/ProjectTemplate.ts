import { BaseTemplate } from "./BaseTemplate";

/** Interface for project templates */
export abstract class ProjectTemplate extends BaseTemplate {
	/** This method should be called after generateFiles completes. */
	public abstract installModules(): void;

	/**
	 * Called initially when the project updates to using the full Ignite UI package.
	 * This should apply any required changes, e.g. replace OSS package routes with the provided one instead.
	 * @param projectPath The project root folder
	 * @param packagePath The relative path to the new package folder
	 */
	public abstract upgradeIgniteUIPackage(projectPath: string, packagePath: string): void;

	/** Generates template files. */
	public abstract generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean>;
}
