import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

class AngularFramework extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Ignite UI Angular Wrappers";
		this.projectType = "ig-ts";
		this.themes = ["infragistics"];
	}
}
module.exports =  new AngularFramework();
