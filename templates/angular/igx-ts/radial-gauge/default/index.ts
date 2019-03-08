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
				import: ["IgxRadialGaugeModule"],
				from: "igniteui-angular-gauges/ES5/igx-radial-gauge-module"
			}
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~7.2.0", "igniteui-angular-gauges@~7.2.0"];
	}
}
module.exports = new IgxRadialGaugeTemplate();
