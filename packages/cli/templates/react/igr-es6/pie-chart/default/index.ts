import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrPieChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pie Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "pie-chart";
		this.projectType = "igr-es6";
		this.name = "Pie Chart";
		this.description = `easily illustate the proportions of data entries`;
		this.packages = ["igniteui-react-charts@~19.0.0"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrPieChartTemplate();
