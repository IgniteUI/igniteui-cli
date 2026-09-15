import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcMaskInputTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Mask Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "mask-input";
		this.projectType = "igc-ts";
		this.name = "Mask Input";
		this.description = "basic IgcMaskInput with a phone number mask";
	}
}
module.exports = new IgcMaskInputTemplate();
