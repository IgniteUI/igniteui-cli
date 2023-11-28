import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxCarouselTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Carousel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "carousel";
		this.projectType = "igx-ts";
		this.name = "Carousel";
		this.description = "basic IgxCarousel";
	}
}
module.exports = new IgxCarouselTemplate();
