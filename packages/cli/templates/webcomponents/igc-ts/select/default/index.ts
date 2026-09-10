import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSelectTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Select"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "select";
		this.projectType = "igc-ts";
		this.name = "Select";
		this.description = "basic IgcSelect";
	}
}
module.exports = new IgcSelectTemplate();
