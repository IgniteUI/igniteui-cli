import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrColorPickerAlphaTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Color Picker"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "color-picker-alpha";
		this.projectType = "igr-ts";
		this.name = "Color Picker Alpha";
		this.description = "IgrColorPicker in input mode with an alpha slider";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrColorPickerAlphaTemplate();
