import { PackageJson } from "type-fest";

/**
 * Meant to contain configurations for the igniteui-cli
 * runtime operations
 */
export interface IgCliConfig {
	/**
	 * Path to a json file that contains the migrations which need to be applied
	 * by the ig update command
	 */
	migrations: string;
}

/**
 * An extension over the base package.json model
 */
export interface PackageJsonExt extends PackageJson {
	/**
	 * igniteui-cli namespace in package.json
	 * can be used for setting up configurations
	 * that can be later used
	 */
	igCli?: IgCliConfig;
}

/**
 * An npm package
 */
export interface Package {
	/**
	 * The name of the package
	 */
	name: string;

	/**
	 * The version of the package
	 */
	version: string;

	/**
	 * The version that the package will be updated to after ig update is ran
	 */
	versionAfterUpdate?: string;

	/**
	 * The absolute location of the package
	 */
	path: string;

	/**
	 * The package's package.json model
	 */
	package: PackageJsonExt | undefined;
}
