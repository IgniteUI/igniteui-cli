/** Interface for project templates */
declare interface ProjectTemplate extends BaseTemplate {
	/** This method should be called after generateFiles completes. */
	installModules(): void;
	/**
	 * Called initially when the project updates to using the full Ignite UI package.
	 * This should apply any required changes, e.g. replace OSS package routes with the provided one instead.
	 * @param projectPath The project root folder
	 * @param packagePath The relative path to the new package folder
	 */
	upgradeIgniteUIPackage(projectPath: string, packagePath: string): void;
	/** Generates template files. */
	generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean>;
}
