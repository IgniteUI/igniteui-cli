import { BaseComponent } from "@igniteui/cli-core";

class IgxRatingComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Rating";
		this.group = "Data Entry & Display";
		this.description = "allows users to select a value from a range of rating symbols";
	}
}
module.exports = new IgxRatingComponent();
