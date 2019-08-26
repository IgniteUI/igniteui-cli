import { BaseProjectLibrary } from "@igniteui-cli/core";

class ReactProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for JavaScript React Wrappers";
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
