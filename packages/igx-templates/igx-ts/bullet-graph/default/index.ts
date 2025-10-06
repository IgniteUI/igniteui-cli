import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = ["igniteui-angular-core@~20.1.0", "igniteui-angular-gauges@~20.1.0", IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxBulletGraphTemplate();
