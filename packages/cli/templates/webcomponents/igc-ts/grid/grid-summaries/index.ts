import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

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
	}
}
module.exports = new IgcGridSummariesTemplate();
