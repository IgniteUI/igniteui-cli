import * as fs from "fs";
import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";

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
	}
}
module.exports =  new jQueryJSProjectLibrary();
