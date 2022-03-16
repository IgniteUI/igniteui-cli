import { BaseComponent } from "@igniteui/cli-core";

class IgcRatingComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Rating";
		this.group = "Data Entry & Display";
		this.description = `Customizable rating component`;
	}
}
module.exports = new IgcRatingComponent();
