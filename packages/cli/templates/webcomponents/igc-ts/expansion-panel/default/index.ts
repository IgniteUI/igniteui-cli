import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcDropdownTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Expansion Panel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "expansion-panel";
		this.projectType = "igc-ts";
		this.name = "Expansion Panel";
		this.description = "A lightweight accordion component";
	}
}
module.exports = new IgcDropdownTemplate();
