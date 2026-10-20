import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE, IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE } from "../../constants";

class IgcDoughnutChartTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DoughnutChart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "igc-ts";
		this.name = "Doughnut Chart";
		this.description = "proportionally illustrate the occurrences of variables";
		this.packages = [
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE
		];
	}
}
module.exports = new IgcDoughnutChartTemplate();
