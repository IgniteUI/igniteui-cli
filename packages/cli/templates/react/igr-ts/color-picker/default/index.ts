import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrColorPickerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Color Picker"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "color-picker";
		this.projectType = "igr-ts";
		this.name = "Color Picker";
		this.description = "basic IgrColorPicker with predefined swatches";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrColorPickerTemplate();
