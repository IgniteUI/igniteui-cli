import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE, IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE } from "../../constants";

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
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE
		];
	}
}
module.exports = new IgcFinancialChartTemplate();
