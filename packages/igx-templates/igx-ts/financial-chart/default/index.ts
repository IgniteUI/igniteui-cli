import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
			{ import: "IgxFinancialChartModule", from: "igniteui-angular-charts" }
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~9.1.2", "igniteui-angular-charts@~9.1.2"];
	}
}
module.exports = new IgxFinancialChartTemplate();
