import { BaseProjectLibrary } from "@igniteui/cli-core";

class AngularFramework extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI Angular Wrappers";
		this.projectType = "ig-ts";
		this.themes = ["infragistics"];

		const groups = require("../../jquery/js/groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports = new AngularFramework();
