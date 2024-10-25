import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcFinancialChartTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["FinancialChart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "financial-chart";
		this.projectType = "igc-ts";
		this.name = "Financial Chart";
		this.description = "IgcFinancialChart";
		this.packages = [
			"igniteui-webcomponents-core@~5.0.0",
			"igniteui-webcomponents-charts@~5.0.0"
		];
	}
}
module.exports = new IgcFinancialChartTemplate();
