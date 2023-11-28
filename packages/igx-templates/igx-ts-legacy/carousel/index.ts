import { BaseComponent } from "@igniteui/cli-core";

class IgxCarouselComponent extends BaseComponent {
	/**
		*
		*/
	constructor() {
		super(__dirname);
		this.name = "Carousel";
		this.group = "Layouts";
		this.description = `browse or navigate through a collection of slides, image galleries,
							cards, or page-based interfaces`;
	}
}
module.exports = new IgxCarouselComponent();
