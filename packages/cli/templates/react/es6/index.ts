import { BaseProjectLibrary } from "@igniteui/cli-core";

class ReactProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for jQuery React Wrappers";
		this.projectType = "es6";
		this.themes = ["default"];

		const groups = require("../../jquery/js/groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new ReactProjectLibrary();
