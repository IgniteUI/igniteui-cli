import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_GAUGES_PACKAGE } from "../../constants";

class IgrTsLinearGaugeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Linear Gauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igr-ts";
		this.name = "Linear Gauge";
		this.description = `value compared against a scale and one or more ranges.`;
		this.packages = [IGNITEUI_REACT_GAUGES_PACKAGE];
	}
}
module.exports = new IgrTsLinearGaugeTemplate();
