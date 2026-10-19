import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE, IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE } from "../../constants";

class IgcCategoryChartTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["CategoryChart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igc-ts";
		this.name = "Category Chart";
		this.description = "makes visualizing category data easy";
		this.packages = [
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_CHARTS_PACKAGE
		];
	}
}
module.exports = new IgcCategoryChartTemplate();
