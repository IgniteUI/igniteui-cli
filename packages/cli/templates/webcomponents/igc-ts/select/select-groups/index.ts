import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSelectGroupsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Select"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "select-groups";
		this.projectType = "igc-ts";
		this.name = "Select Groups";
		this.description = "IgcSelect with grouped and header items";
	}
}
module.exports = new IgcSelectGroupsTemplate();
