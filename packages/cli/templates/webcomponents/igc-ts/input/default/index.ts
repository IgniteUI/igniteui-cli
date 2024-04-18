import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcInputTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "input";
		this.projectType = "igc-ts";
		this.name = "Input";
		this.description = "basic IgcInput";
	}
}
module.exports = new IgcInputTemplate();
