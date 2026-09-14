import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcMaskInputFormatsTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Mask Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "mask-input-formats";
		this.projectType = "igc-ts";
		this.name = "Mask Input Formats";
		this.description = "IgcMaskInput with letter and digit mask patterns";
	}
}
module.exports = new IgcMaskInputFormatsTemplate();
