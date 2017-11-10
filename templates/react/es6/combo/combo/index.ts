import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

class ComboTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "combo";
		this.name = "combo";
		this.widget = "igCombo";
		this.description = "The is a combo template structure for React";
		this.projectType = "es6";
		this.components = ["Combo"];
		this.controlGroup = "Editors";
		this.dependencies = ["igCombo"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new ComboTemplate();
