import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSwitchTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Switch"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "switch";
		this.projectType = "igc-ts";
		this.name = "Switch";
		this.description = "basic IgcSwitch";
	}
}
module.exports = new IgcSwitchTemplate();
