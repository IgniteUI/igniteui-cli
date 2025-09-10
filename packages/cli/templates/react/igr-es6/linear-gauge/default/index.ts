import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrLinearGaugeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Linear Gauge"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-gauge";
		this.projectType = "igr-es6";
		this.name = "Linear Gauge";
		this.description = `value compared against a scale and one or more ranges.`;
		this.packages = ["igniteui-react-gauges@~19.0.0"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrLinearGaugeTemplate();
