import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxCarouselTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Carousel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "carousel";
		this.projectType = "igx-ts";
		this.name = "Carousel";
		this.description = "Basic IgxCarousel";
		this.dependencies = ["IgxCarouselModule"];
	}
}
module.exports = new IgxCarouselTemplate();
