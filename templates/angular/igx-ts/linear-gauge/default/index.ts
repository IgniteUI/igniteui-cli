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
				import: ["IgxLinearGaugeModule"],
				from: "igniteui-angular-gauges/ES5/igx-linear-gauge-module"
			}
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~7.2.0", "igniteui-angular-gauges@~7.2.0"];
	}
}
module.exports = new IgxLinearGaugeTemplate();
