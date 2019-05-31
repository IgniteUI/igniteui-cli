
/**
 * Ignite UI for Angular Ng New Options Schema
 */
export abstract class OptionsSchema {
	public name?: string;

	/**
	 * The version of the Angular CLI to use.
	 * @$default {"$source": "ng-cli-version"}
	 */
	public version: string;

	public skipGit: boolean;

	public skipInstall: boolean;
}
