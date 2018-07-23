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
		this.description = "IgxLinearGauge with different animations.";
		this.dependencies = [
			{
				from: "igniteui-angular-gauges/ES5/igx-linear-gauge-module",
				import: ["IgxLinearGaugeModule"]}
		];
		this.packages = ["tslib@1.7.1", "igniteui-angular-core@6.1.1", "igniteui-angular-gauges@6.1.1"];
	}
}
module.exports = new IgxLinearGaugeTemplate();
