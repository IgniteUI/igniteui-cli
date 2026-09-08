import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrCarouselTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Carousel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "carousel";
		this.projectType = "igr-ts";
		this.name = "Carousel";
		this.description = "basic IgrCarousel";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrCarouselTemplate();
