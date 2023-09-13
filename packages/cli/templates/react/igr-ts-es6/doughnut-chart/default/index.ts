import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTsDoughnutChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "igr-ts-es6";
		this.name = "Doughnut Chart";
		this.description = `proportionally illustrate the occurrences of variables.`;
		this.packages = ["igniteui-react-charts@~16.15.0"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrTsDoughnutChartTemplate();
