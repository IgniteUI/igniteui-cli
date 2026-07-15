import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE, IGNITEUI_WEBCOMPONENTS_GAUGES_PACKAGE } from "../../constants";

class IgcradialGaugeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["RadialGauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "radial-gauge";
		this.projectType = "igc-ts";
		this.name = "Radial Gauge";
		this.description = "IgcRadialGauge";
		this.packages = [
			IGNITEUI_WEBCOMPONENTS_CORE_PACKAGE,
			IGNITEUI_WEBCOMPONENTS_GAUGES_PACKAGE
		];
	}
}
module.exports = new IgcradialGaugeTemplate();
