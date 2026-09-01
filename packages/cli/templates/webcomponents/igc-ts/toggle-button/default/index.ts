import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcToggleButtonTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Toggle button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "toggle-button";
		this.projectType = "igc-ts";
		this.name = "Toggle Button";
		this.description = "basic IgcToggleButton";
	}
}
module.exports = new IgcToggleButtonTemplate();
