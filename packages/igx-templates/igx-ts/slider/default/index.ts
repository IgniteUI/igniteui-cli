import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxSliderTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Slider"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "slider";
		this.projectType = "igx-ts";
		this.name = "Slider";
		this.description = "Basic IgxSlider sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxSliderTemplate();
