import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_CHARTS_PACKAGE } from "../../constants";

class IgrTsDoughnutChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "igr-ts";
		this.name = "Doughnut Chart";
		this.description = `proportionally illustrate the occurrences of variables.`;
		this.packages = [IGNITEUI_REACT_CHARTS_PACKAGE];
	}
}
module.exports = new IgrTsDoughnutChartTemplate();
