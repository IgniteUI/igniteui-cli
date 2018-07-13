import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

class AngularFramework extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for Angular";
		this.projectType = "igx-ts";
		this.themes = ["infragistics"];
	}
}
module.exports =  new AngularFramework();
