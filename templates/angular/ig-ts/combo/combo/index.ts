import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class ComboTemplate extends AngularTemplate {

	constructor() {
		super(__dirname);
		this.id = "combo";
		this.name = "Combo";
		this.description = "igCombo template for Angular";
		this.projectType = "ig-ts";
		this.components = ["Combo"];
		this.dependencies = ["igCombo"];
		this.controlGroup = "Data Entry";
	}

}
module.exports = new ComboTemplate();
