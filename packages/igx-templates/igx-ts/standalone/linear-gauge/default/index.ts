import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

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
		this.packages = ["igniteui-angular-core@~17.0.0", "igniteui-angular-gauges@~17.0.0"];
	}
}
module.exports = new IgxLinearGaugeTemplate();
