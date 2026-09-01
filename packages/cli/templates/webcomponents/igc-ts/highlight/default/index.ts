import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcHighlightTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Highlight"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "highlight";
		this.projectType = "igc-ts";
		this.name = "Highlight";
		this.description = "basic IgcHighlight";
	}
}
module.exports = new IgcHighlightTemplate();
