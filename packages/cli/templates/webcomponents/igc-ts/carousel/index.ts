import { BaseComponent } from "@igniteui/cli-core";

class IgcCarouselComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Carousel";
		this.group = "Layouts";
		this.description = `Browse or navigate through a collection of slides`;
	}
}
module.exports = new IgcCarouselComponent();
