import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxRadialGaugeTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Radial Gauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "radial-gauge";
		this.projectType = "igx-ts";
		this.name = "Radial Gauge";
		this.description = "IgxRadialGauge with different animations";
		this.dependencies = [
			{
				from: "igniteui-angular-gauges/ES5/igx-radial-gauge-module",
				import: ["IgxRadialGaugeModule"]
			}
		];
		this.packages = ["tslib@1.7.1", "igniteui-angular-core@6.1.1", "igniteui-angular-gauges@6.1.1"];
	}
}
module.exports = new IgxRadialGaugeTemplate();
