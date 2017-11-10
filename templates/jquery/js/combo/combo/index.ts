import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class ComboTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Data Entry";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Combo";
		this.description = "Combo template";
		this.dependencies = ["igCombo"];
	}
}
module.exports = new ComboTemplate();
