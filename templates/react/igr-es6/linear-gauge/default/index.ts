import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrLinearGaugeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Linear Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "linear-graph";
		this.projectType = "igr-es6";
		this.name = "Linear Gauge";
		this.description = `value compared against a scale and one or more ranges.`;
		this.packages = ["igniteui-react-gauges@^16.6.4"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrLinearGaugeTemplate();
