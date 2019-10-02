import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class DoughnutChartTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components = ["Doughnut Chart"];
		this.controlGroup =  "Charts";
		this.listInComponentTemplates =  true;
		this.id =  "doughnut-chart";
		this.framework =  "jquery";
		this.projectType =  "js";
		this.name = "Doughnut Chart";
		this.description = "igDoughnutChart template";
		this.dependencies = ["igDoughnutChart"];
	}

}
module.exports = new DoughnutChartTemplate();
