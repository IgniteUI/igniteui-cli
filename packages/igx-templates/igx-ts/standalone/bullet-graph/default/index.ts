import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

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
		this.packages = ["igniteui-angular-core@~17.0.0", "igniteui-angular-gauges@~17.0.0"];
	}
}
module.exports = new IgxBulletGraphTemplate();
