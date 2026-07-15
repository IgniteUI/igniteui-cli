import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE } from "../../constants";

class IgcGridSummariesTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-summaries";
		this.projectType = "igc-ts";
		this.name = "Grid Summaries";
		this.description = "IgcGrid with column summaries";
		this.packages = [ IGNITEUI_WEBCOMPONENTS_GRIDS_PACKAGE ];
	}
}
module.exports = new IgcGridSummariesTemplate();
