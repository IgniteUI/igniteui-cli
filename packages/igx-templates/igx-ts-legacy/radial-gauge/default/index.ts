import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
		this.packages = ["igniteui-angular-core@~20.1.0", "igniteui-angular-gauges@~20.1.0"];
	}
}
module.exports = new IgxRadialGaugeTemplate();
