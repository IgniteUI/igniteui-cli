import { BaseProjectLibrary } from "@igniteui/cli-core";

class IgbBlazorProjectLibrary extends BaseProjectLibrary {
	constructor() {
		super(__dirname);
		this.name = "Ignite UI for Blazor";
		this.projectType = "igb";
		this.themes = ["default"];
	}
}
module.exports = new IgbBlazorProjectLibrary();
