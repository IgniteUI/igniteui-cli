import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE } from "../../constants";

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
		this.packages = [ IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE ];
	}
}
module.exports = new IgcGridEditingTemplate();
