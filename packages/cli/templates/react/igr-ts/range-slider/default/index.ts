import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrRangeSliderTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Range Slider"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "range-slider";
		this.projectType = "igr-ts";
		this.name = "Range Slider";
		this.description = "basic IgrRangeSlider";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrRangeSliderTemplate();
