import * as fs from "fs";
import * as path from "path";
import { BaseProjectLibrary } from "../../../lib/BaseProjectLibrary";
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

