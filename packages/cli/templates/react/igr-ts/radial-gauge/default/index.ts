import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		// TODO: read version from igniteui-react-core in package.json
		this.packages = ["igniteui-react-gauges@~18.7.0"];
	}
}
module.exports = new IgrTsRadialGaugeTemplate();
