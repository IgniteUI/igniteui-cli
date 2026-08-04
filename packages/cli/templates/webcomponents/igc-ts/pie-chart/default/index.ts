import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE, IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE } from "../../constants";

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
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE
		];
	}
}
module.exports = new IgcPieChartTemplate();
