import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcLinearGaugeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["LinearGauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igc-ts";
		this.name = "Linear Gauge";
		this.description = "IgcLinearGauge";
		this.packages = [
			"igniteui-webcomponents-core@~5.0.0",
			"igniteui-webcomponents-gauges@~5.0.0"
		];
	}
}
module.exports = new IgcLinearGaugeTemplate();
