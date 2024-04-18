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
			"igniteui-webcomponents-core@~4.2.5",
			"igniteui-webcomponents-charts@~4.2.5"
		];
	}
}
module.exports = new IgcPieChartTemplate();
