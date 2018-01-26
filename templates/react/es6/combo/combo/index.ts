import * as path from "path";
import { ReactTemplate } from "../../../../../lib/templates/ReactTemplate";

class ComboTemplate extends ReactTemplate {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.id = "combo";
		this.name = "Combo";
		this.widget = "igCombo";
		this.description = "Combo template for React";
		this.projectType = "es6";
		this.components = ["Combo"];
		this.controlGroup = "Data Entry";
		this.dependencies = ["igCombo"];

		this.hasExtraConfiguration = false;
	}
}
module.exports = new ComboTemplate();
