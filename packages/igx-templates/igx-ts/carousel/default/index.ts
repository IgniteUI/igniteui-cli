import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
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
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxCarouselTemplate();
