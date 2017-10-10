import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class RadialChartTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components = ["Radial Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "radial-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Radial Chart";
		this.description = "Radial series template of Data Chart";
		this.dependencies = ["igDataChart"];
		
	};
	
}
module.exports = new RadialChartTemplate();