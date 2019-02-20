import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrRadialGaugeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Radial Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "radial-graph";
		this.projectType = "igr-es6";
		this.name = "Radial Gauge";
		this.description = `provides a number of visual elements, like a needle, tick marks, ranges
							and labels, in order to create a predefined shape and scale.`;
		this.packages = ["igniteui-react-gauges@~16.6.5"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrRadialGaugeTemplate();
