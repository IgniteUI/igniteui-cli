import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		// TODO: read version from igniteui-react-core in package.json
		this.packages = ["igniteui-react-charts@~18.6.0"];
	}
}
module.exports = new IgrTsDoughnutChartTemplate();
