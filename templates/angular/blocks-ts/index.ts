import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

class AngularFramework extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Angular";
		this.projectType = "blocks-ts";
		this.themes = ["zero-blocks"];
	}
}
module.exports =  new AngularFramework();
