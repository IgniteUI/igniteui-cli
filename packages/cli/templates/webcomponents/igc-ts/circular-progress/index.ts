import { BaseComponent } from "@igniteui/cli-core";

class IgcCircularProgressComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Circular Progress";
		this.group = "Data Entry & Display";
		this.description = `Customizable Circular Progress component`;
	}
}
module.exports = new IgcCircularProgressComponent();
