import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCardTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Card"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "card";
		this.projectType = "igc-ts";
		this.name = "Card";
		this.description = "basic IgcCard";
	}
}
module.exports = new IgcCardTemplate();
