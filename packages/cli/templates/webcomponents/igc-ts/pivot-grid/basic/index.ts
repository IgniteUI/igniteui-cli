import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcPivotGridTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Pivot Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "pivot-grid";
		this.projectType = "igc-ts";
		this.name = "Pivot Grid";
		this.description = "Basic IgcPivotGrid component";
		this.packages = [ "igniteui-webcomponents-grids@~7.1.0" ];
	}
}
module.exports = new IgcPivotGridTemplate();
