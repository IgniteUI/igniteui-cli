import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcBadgeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Badge"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "badge";
		this.projectType = "igc-ts";
		this.name = "Badge";
		this.description = "basic IgcBadge";
	}
}
module.exports = new IgcBadgeTemplate();
