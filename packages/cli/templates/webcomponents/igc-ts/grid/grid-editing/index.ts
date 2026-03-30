import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcGridEditingTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-editing";
		this.projectType = "igc-ts";
		this.name = "Grid Editing";
		this.description = "IgcGrid with editing enabled";
	}
}
module.exports = new IgcGridEditingTemplate();
