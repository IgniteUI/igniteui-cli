import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcColorPickerAlphaTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Color Picker"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "color-picker-alpha";
		this.projectType = "igc-ts";
		this.name = "Color Picker Alpha";
		this.description = "IgcColorPicker in input mode with an alpha slider";
	}
}
module.exports = new IgcColorPickerAlphaTemplate();
