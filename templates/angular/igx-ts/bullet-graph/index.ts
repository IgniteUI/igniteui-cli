
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxBulletGraphAnimationComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Bullet Graph";
		this.group = "Gauges";
	}
}
module.exports = new IgxBulletGraphAnimationComponent();
