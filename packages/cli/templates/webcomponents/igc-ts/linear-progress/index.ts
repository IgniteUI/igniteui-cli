import { BaseComponent } from "@igniteui/cli-core";

class IgcLinearProgressComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Linear Progress";
		this.group = "Data Entry & Display";
		this.description = `Customizable Linear Progress component`;
	}
}
module.exports = new IgcLinearProgressComponent();
