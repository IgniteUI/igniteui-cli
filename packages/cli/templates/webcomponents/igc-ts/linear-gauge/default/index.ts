import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE, IGNITEUI_WEBCOMPONENTS_GAUGES_PACKAGE } from "../../constants";

class IgcLinearGaugeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["LinearGauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igc-ts";
		this.name = "Linear Gauge";
		this.description = "IgcLinearGauge";
		this.packages = [
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_GAUGES_PACKAGE
		];
	}
}
module.exports = new IgcLinearGaugeTemplate();
