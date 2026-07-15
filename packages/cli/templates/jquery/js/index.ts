import { BaseProjectLibrary } from "@igniteui/cli-core";
class jQueryJSProjectLibrary extends BaseProjectLibrary {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name = "jquery";
		this.themes = ["infragistics", "infragistics.less"];
		this.projectType = "js";
		this._projectsPath = "projects";
		this._customTemplatesPath = "custom-templates";

		const groups = require("./groups.json");

		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new jQueryJSProjectLibrary();
