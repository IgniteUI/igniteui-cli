import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcColorPickerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Color Picker"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "color-picker";
		this.projectType = "igc-ts";
		this.name = "Color Picker";
		this.description = "basic IgcColorPicker with predefined swatches";
	}
}
module.exports = new IgcColorPickerTemplate();
