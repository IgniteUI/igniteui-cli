import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class RadialChartTemplate extends AngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Radial Chart"];
		this.controlGroup = "Charts";
		this.listInComponentTemplates = true;
		this.id = "radial-chart";
		this.projectType = "ts";
		this.name = "Radial Chart";
		this.description = "Radial series template of Data Chart";
		this.dependencies = ["igDataChart"];
	}
}
module.exports = new RadialChartTemplate();
