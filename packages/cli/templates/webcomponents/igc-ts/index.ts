import { BaseProjectLibrary } from "@igniteui/cli-core";
import * as groups from "./groups.json";

class IgcWebComponentsProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for Web Components";
		this.projectType = "igc-ts";
		this.themes = ["default"];
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports = new IgcWebComponentsProjectLibrary();
