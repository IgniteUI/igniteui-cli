import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcradialGaugeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["RadialGauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "radial-gauge";
		this.projectType = "igc-ts";
		this.name = "Radial Gauge";
		this.description = "IgcRadialGauge";
		this.packages = [
			"igniteui-webcomponents-core@~5.4.0",
			"igniteui-webcomponents-gauges@~5.4.0"
		];
	}
}
module.exports = new IgcradialGaugeTemplate();
