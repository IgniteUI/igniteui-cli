/**
 * Schema for project config files.
 */
declare interface Config {
	/** CLI version used to create the project */
	version: string;
	packagesInstalled: boolean;
	/** Project options */
	project: {
		framework: string;
		/** Stands for js, ts, es6 */
		projectType: string;
		/** Theme of the project */
		theme: string;
		themePath: string;
		/** An array of dependencies  */
		components: string[];
		/** Flag if the project should be using bundled file */
		isBundle?: boolean;
		/** optional. showcase flag? */
		isShowcase?: boolean,
		/** Project template version */
		version: string;
		/** Porject root source directory */
		sourceRoot: string;
		/**Temp */
		igniteuiSource: string;

		[key:string]: any;
	},
	build: {
		/** This object contains information related to the build configuration
		 *  and server configuration of the project */
		//"projectBuild": "tsc",
		//"serverType": "webpack"
	}
}