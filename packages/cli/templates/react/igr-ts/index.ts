import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgrTsReactProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for React";
		this.projectType = "igr-ts";
		this.themes = ["default"];

		const groups = require("./groups.json");
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new IgrTsReactProjectLibrary();
