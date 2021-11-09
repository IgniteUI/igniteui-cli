import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgrReactProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for React";
		this.projectType = "igr-es6";
		this.themes = ["default"];

		const groups = require("./groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new IgrReactProjectLibrary();
