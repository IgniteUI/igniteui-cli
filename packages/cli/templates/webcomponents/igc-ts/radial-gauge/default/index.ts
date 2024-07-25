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
			"igniteui-webcomponents-core@~4.2.5",
			"igniteui-webcomponents-gauges@~4.2.5"
		];
	}
}
module.exports = new IgcradialGaugeTemplate();
