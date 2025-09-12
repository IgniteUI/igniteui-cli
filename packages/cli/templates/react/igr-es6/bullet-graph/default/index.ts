import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrBulletGraphTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bullet Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "bullet-graph";
		this.projectType = "igr-es6";
		this.name = "Bullet Graph";
		this.description = `allows for a linear and concise view of measures compared against a scale.`;
		this.packages = ["igniteui-react-gauges@~19.0.0"]; // TODO: read version from igniteui-react-core in package.json
	}
}
module.exports = new IgrBulletGraphTemplate();
