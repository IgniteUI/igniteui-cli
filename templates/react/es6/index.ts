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

		const groups = require("../../jquery/js/groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new ReactProjectLibrary();
