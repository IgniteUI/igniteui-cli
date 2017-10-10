import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class FinancialChartTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components  = ["Financial Chart"];
		this.controlGroup =  "Charts";
		this.listInComponentTemplates =  true;
		this.id =  "financial-chart";
		this.framework =  "jquery";
		this.projectType =  "js";
		this.name = "Financial Chart";
		this.description = "Financial series template of Data Chart";
		this.dependencies = ["igDataChart"];
	};
	
}
module.exports = new FinancialChartTemplate();