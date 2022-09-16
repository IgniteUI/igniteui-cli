import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgxProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
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

export const factory = () => new IgxProjectLibrary();
