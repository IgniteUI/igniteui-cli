import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcBButtonTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "button";
		this.projectType = "igc-ts";
		this.name = "Button";
		this.description = "basic IgcButton";
	}
}
module.exports = new IgcBButtonTemplate();
