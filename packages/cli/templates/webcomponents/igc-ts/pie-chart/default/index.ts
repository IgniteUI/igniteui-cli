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
			"igniteui-webcomponents-core@~6.0.0",
			"igniteui-webcomponents-charts@~6.0.0"
		];
	}
}
module.exports = new IgcPieChartTemplate();
