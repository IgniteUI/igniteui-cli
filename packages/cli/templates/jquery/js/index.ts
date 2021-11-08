import { BaseProjectLibrary } from "@igniteui/cli-core";
import * as groups from "./groups.json";

// tslint:disable-next-line:class-name
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

		// tslint:disable-next-line:forin
		for (const key in groups) {
			this.groupDescriptions.set(key, groups[key]);
		}
	}
}
module.exports =  new jQueryJSProjectLibrary();
