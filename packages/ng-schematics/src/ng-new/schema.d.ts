/**
 * Ignite UI for Angular Ng New Options Schema
 */
export declare abstract class OptionsSchema {
    name?: string;
    /**
     * The version of the Angular CLI to use.
     * @$default {"$source": "ng-cli-version"}
     */
    version: string;
    skipGit: boolean;
    skipInstall: boolean;
    theme: string;
    template: string;
    type: string;
}
