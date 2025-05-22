import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTsFinancialChartTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Financial Chart"];
		this.controlGroup = "Charts";
		// set to true once bug with chart destoy is fixed
		this.listInComponentTemplates = false;
		this.id = "financial-chart";
		this.projectType = "igr-ts";
		this.name = "Financial Chart";
		this.description = `charting component that makes it easy to visualize financial data by
							using a simple and intuitive API.`;
		this.packages = ["igniteui-react-charts@~19.0.0-alpha.1"];
	}
}
module.exports = new IgrTsFinancialChartTemplate();
