import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcCarouselVerticalTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Carousel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "carousel-vertical";
		this.projectType = "igc-ts";
		this.name = "Carousel Vertical";
		this.description = "IgcCarousel with vertical slide transitions";
	}
}
module.exports = new IgcCarouselVerticalTemplate();
