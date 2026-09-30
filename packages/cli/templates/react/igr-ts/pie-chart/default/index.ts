import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_CHARTS_PACKAGE } from "../../constants";

class IgrTsPieChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "igr-ts";
		this.name = "Pie Chart";
		this.description = `easily illustate the proportions of data entries`;
		this.packages = [IGNITEUI_REACT_CHARTS_PACKAGE];
	}
}
module.exports = new IgrTsPieChartTemplate();
