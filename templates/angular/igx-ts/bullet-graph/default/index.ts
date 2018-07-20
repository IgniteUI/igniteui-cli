import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxBulletGraphTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bullet Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "bullet-graph";
		this.projectType = "igx-ts";
		this.name = "Bullet Graph";
		this.description = "Graph with different animations.";
		this.dependencies = [{
			from: "igniteui-angular-gauges/ES5/igx-bullet-graph-module",
			import: ["IgxBulletGraphModule"]
		}];
		this.packages = ["tslib@1.7.1", "igniteui-angular-core@6.1.0", "igniteui-angular-gauges@6.1.0"];
	}
}
module.exports = new IgxBulletGraphTemplate();
