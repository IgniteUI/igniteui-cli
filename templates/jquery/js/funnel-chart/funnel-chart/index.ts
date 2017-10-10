import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class FunnelChartTemplate extends jQueryTemplate {

	constructor() {
		super(__dirname);
		this.components = ["Funnel Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;	
		this.id = "funnel-chart";
		this.framework = "jquery";
		this.projectType = "js";
		this.name = "Funnel Chart";
		this.description = "Funnel chart template";
		this.dependencies = ["igFunnelChart"];
	};
	
}
module.exports = new FunnelChartTemplate();