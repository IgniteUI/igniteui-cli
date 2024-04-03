import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTsBulletGraphTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bullet Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "bullet-graph";
		this.projectType = "igr-ts";
		this.name = "Bullet Graph";
		this.description = `allows for a linear and concise view of measures compared against a scale.`;
		// TODO: read version from igniteui-react-core in package.json
		this.packages = ["igniteui-react-gauges@~18.6.0"];
	}
}
module.exports = new IgrTsBulletGraphTemplate();
