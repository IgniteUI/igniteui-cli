import { BaseProjectLibrary } from "@igniteui/cli-core";
import * as groups from "../../jquery/js/groups.json";

class ReactProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for jQuery React Wrappers";
		this.projectType = "es6";
		this.themes = ["default"];

		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports = new ReactProjectLibrary();
