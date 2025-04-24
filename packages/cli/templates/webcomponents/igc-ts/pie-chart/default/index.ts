import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcPieChartTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["PieChart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "igc-ts";
		this.name = "Pie Chart";
		this.description = "IgcPieChart with local data";
		this.packages = [
			"igniteui-webcomponents-core@~5.4.0",
			"igniteui-webcomponents-charts@~5.4.0"
		];
	}
}
module.exports = new IgcPieChartTemplate();
