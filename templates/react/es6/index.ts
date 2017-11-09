import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

class ReactProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "React";
		this.projectType = "es6";
		this.themes = ["infragistics", "infragistics.less", "infragistics.sass", "metro"];
	}
}
module.exports =  new ReactProjectLibrary();
