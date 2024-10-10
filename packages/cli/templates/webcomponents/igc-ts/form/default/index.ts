import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcFormTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Form"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "form";
		this.projectType = "igc-ts";
		this.name = "Form";
		this.description = "basic Form";
	}
}
module.exports = new IgcFormTemplate();
