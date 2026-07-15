import { BaseComponent } from "@igniteui/cli-core";

class IgrRatingComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Rating";
		this.group = "Data Entry & Display";
		this.description = `represents a rating component`;
	}
}
module.exports = new IgrRatingComponent();
