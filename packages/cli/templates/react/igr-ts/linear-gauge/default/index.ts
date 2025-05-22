import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react-gauges@~19.0.0-alpha.1"];
	}
}
module.exports = new IgrTsLinearGaugeTemplate();
