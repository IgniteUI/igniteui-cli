import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxFinancialChartTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "financial-chart";
		this.projectType = "igx-ts";
		this.name = "Financial Chart";
		this.description = "Basic Financial chart with automatic toolbar and type selection.";
		this.dependencies = [
			{ import: "IgxFinancialChartModule", from: "igniteui-angular-charts/ES5/igx-financial-chart-module" }
		];
		this.packages = ["tslib@1.7.1", "igniteui-angular-core@6.1.0", "igniteui-angular-charts@6.1.0"];
	}
}
module.exports = new IgxFinancialChartTemplate();
