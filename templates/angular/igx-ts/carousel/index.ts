
import { BaseComponent } from "../../../../lib/BaseComponent";

class IgxCarouselComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Carousel";
		this.group = "Carousels";
	}
}
module.exports = new IgxCarouselComponent();
