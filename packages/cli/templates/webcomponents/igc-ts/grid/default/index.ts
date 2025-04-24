import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid";
		this.projectType = "igc-ts";
		this.name = "Grid";
		this.description = "IgcGrid with local data";
		this.packages = [
			"igniteui-webcomponents-core@~5.4.0",
			"igniteui-webcomponents-grids@~5.4.0",
			"igniteui-webcomponents-inputs@~5.4.0",
			"igniteui-webcomponents-layouts@~5.4.0"
		];
	}
}
module.exports = new IgcGridTemplate();
