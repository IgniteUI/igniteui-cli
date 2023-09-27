import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgrTsReactProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for React TS";
		this.projectType = "igr-ts";
		this.themes = ["default"];

		const groups = require("./groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new IgrTsReactProjectLibrary();
