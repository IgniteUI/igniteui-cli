import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcLinearProgressComponent extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Linear Progress"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "linear-progress";
		this.projectType = "igc-ts";
		this.name = "Linear Progress";
		this.description = "Basic Linear Progress";
		this.packages = [
			"igniteui-webcomponents-core@~5.0.0",
			"igniteui-webcomponents-charts@~5.0.0"
		];
	}
}
module.exports = new IgcLinearProgressComponent();
