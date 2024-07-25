import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcIconTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon";
		this.projectType = "igc-ts";
		this.name = "Icon";
		this.description = "basic IgcIcon";
	}
}
module.exports = new IgcIconTemplate();
