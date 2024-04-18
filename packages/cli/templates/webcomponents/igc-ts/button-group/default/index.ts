import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcTabsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["ButtonGroup"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "button-group";
		this.projectType = "igc-ts";
		this.name = "Button group";
		this.description = "basic IgcButtonGroup";
	}
}
module.exports = new IgcTabsTemplate();
