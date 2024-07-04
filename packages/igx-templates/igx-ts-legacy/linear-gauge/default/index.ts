import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
				from: "igniteui-angular-gauges"
			}
		];
		this.packages = ["igniteui-angular-core@~18.0.0", "igniteui-angular-gauges@~18.0.0"];
	}
}
module.exports = new IgxLinearGaugeTemplate();
