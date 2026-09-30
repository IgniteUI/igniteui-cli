import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_CHARTS_PACKAGE } from "../../constants";

class IgrTsCategoryChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Category Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "category-chart";
		this.projectType = "igr-ts";
		this.name = "Category Chart";
		this.description = `makes visualizing category data easy. Simplifies the complexities
							of the data visualization domain into manageable API`;
		this.packages = [IGNITEUI_REACT_CHARTS_PACKAGE];
	}
}
module.exports = new IgrTsCategoryChartTemplate();
