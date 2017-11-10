import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

class AngularFramework extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Angular";
		this.projectType = "ts";
		this.themes = ["infragistics"];
	}
}
module.exports =  new AngularFramework();
