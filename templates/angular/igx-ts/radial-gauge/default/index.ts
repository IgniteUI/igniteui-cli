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
				from: "igniteui-angular-gauges"
			}
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.2.12", "igniteui-angular-gauges@~8.2.12"];
	}
}
module.exports = new IgxRadialGaugeTemplate();
