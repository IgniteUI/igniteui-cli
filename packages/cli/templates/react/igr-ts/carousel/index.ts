import { BaseComponent } from "@igniteui/cli-core";

class IgrCarouselComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Carousel";
		this.group = "Layouts";
		this.description = `presents a set of slides by sequentially displaying one at a time`;
	}
}
module.exports = new IgrCarouselComponent();
