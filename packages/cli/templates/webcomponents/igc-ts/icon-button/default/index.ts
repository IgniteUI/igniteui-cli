import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcIconButtonTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon-button";
		this.projectType = "igc-ts";
		this.name = "Icon Button";
		this.description = "basic IgcIconButton";
	}
}
module.exports = new IgcIconButtonTemplate();
