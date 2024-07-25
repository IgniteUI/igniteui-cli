import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcRadioGroupTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["RadioGroup"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "radio-group";
		this.projectType = "igc-ts";
		this.name = "Radio Group";
		this.description = "basic IgcRadioGroup";
	}
}
module.exports = new IgcRadioGroupTemplate();
