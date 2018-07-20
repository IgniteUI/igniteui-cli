import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxLinearGaugeTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Linear Gauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igx-ts";
		this.name = "Linear Gauge";
		this.description = "IgxLinearGauge IgxRadialGauge with different animations.";
		this.dependencies = [
			{
				from: "ignite-angular-gauges/ES5/igx-linear-gauge-module",
				import: ["IgxLinearGaugeModule"]}
		];
	}
}
module.exports = new IgxLinearGaugeTemplate();
