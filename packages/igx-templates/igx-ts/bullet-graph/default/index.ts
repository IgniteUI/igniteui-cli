import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxBulletGraphTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bullet Graph"];
		this.controlGroup = "Gauges";
		this.listInComponentTemplates = true;
		this.id = "bullet-graph";
		this.projectType = "igx-ts";
		this.name = "Bullet Graph";
		this.description = "IgxBulletGraph with different animations.";
		this.dependencies = [{
			import: ["IgxBulletGraphModule"],
			from: "igniteui-angular-gauges/ES5/igx-bullet-graph-module"
		}];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.0.0", "igniteui-angular-gauges@~8.0.0"];
	}
}
module.exports = new IgxBulletGraphTemplate();
