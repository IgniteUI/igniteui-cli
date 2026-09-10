import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcComboGroupsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "combo-groups";
		this.projectType = "igc-ts";
		this.name = "Combo Groups";
		this.description = "IgcCombo with grouped, data-bound items";
	}
}
module.exports = new IgcComboGroupsTemplate();
