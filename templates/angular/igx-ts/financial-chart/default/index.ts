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
		this.description = "basic financial chart with automatic toolbar and type selection.";
		this.dependencies = [
			{ import: "IgxFinancialChartModule", from: "igniteui-angular-charts/ES5/igx-financial-chart-module" }
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.0.0-beta.0", "igniteui-angular-charts@~7.2.0"];
	}
}
module.exports = new IgxFinancialChartTemplate();
