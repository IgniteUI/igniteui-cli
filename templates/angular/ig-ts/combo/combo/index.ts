import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class ComboTemplate extends AngularTemplate {

	constructor() {
		super(__dirname);
		this.id = "combo";
		this.name = "combo";
		this.description = "The is a combo template structure for Angular";
		this.projectType = "ig-ts";
		this.components = ["Combo"];
		this.dependencies = ["igCombo"];
		this.controlGroup = "Data Entry";
	}

}
module.exports = new ComboTemplate();
