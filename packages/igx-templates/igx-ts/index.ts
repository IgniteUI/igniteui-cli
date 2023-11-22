import * as path from "path";

import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgxProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(path.join(__dirname, "module-based")); // TODO: should be modified based on the project type (standalone or not)
		this.name = "Ignite UI for Angular";
		this.projectType = "igx-ts";
		this.themes = ["Custom", "Default"];

		const groups = require("./groups.json");
		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports = new IgxProjectLibrary();
