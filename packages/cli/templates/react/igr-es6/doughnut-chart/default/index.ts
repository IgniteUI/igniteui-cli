import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrDoughnutChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "doughnut-chart";
		this.projectType = "igr-es6";
		this.name = "Doughnut Chart";
		this.description = `proportionally illustrate the occurrences of variables.`;
		this.packages = ["igniteui-react-charts@~19.2.2"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrDoughnutChartTemplate();
