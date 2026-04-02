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
		this.packages = [ "igniteui-webcomponents-grids@~6.0.0" ];
	}
}
module.exports = new IgcGridEditingTemplate();
