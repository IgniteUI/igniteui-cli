import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = ["igniteui-angular-core@~20.1.0", "igniteui-angular-gauges@~20.1.0", IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxLinearGaugeTemplate();
