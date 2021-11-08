import { BaseProjectLibrary } from "@igniteui/cli-core";
import * as groups from "../../jquery/js/groups.json";

class AngularFramework extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI Angular Wrappers";
		this.projectType = "ig-ts";
		this.themes = ["infragistics"];

		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports = new AngularFramework();
