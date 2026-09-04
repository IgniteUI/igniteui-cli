import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcComboTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.projectType = "igc-ts";
		this.name = "Combo";
		this.description = "basic IgcCombo with local data";
	}
}
module.exports = new IgcComboTemplate();
