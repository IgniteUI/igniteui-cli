import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgcWebComponentsProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for Web Components";
		this.projectType = "igc-ts";
		this.themes = ["default"];

		const groups = require("./groups.json");
		for (const key in groups) {
			if (groups.hasOwnProperty(key)) {
				this.groupDescriptions.set(key, groups[key]);
			}
		}
	}
}
module.exports = new IgcWebComponentsProjectLibrary();
