import { BaseComponent } from "@igniteui/cli-core";

class IgcCardComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Card";
		this.group = "Layouts";
		this.description = `Customizable card component`;
	}
}
module.exports = new IgcCardComponent();
