import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GAUGES_PACKAGE } from "../../constants";

class IgrTsRadialGaugeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Radial Gauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "radial-gauge";
		this.projectType = "igr-ts";
		this.name = "Radial Gauge";
		this.description = `provides a number of visual elements, like a needle, tick marks, ranges
							and labels, in order to create a predefined shape and scale.`;
		this.packages = [IGNITEUI_REACT_GAUGES_PACKAGE];
	}
}
module.exports = new IgrTsRadialGaugeTemplate();
