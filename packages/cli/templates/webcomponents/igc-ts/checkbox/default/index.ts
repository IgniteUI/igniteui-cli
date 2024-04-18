import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCheckboxTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Checkbox"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "checkbox";
		this.projectType = "igc-ts";
		this.name = "Checkbox";
		this.description = "basic IgcCheckbox";
	}
}
module.exports = new IgcCheckboxTemplate();
