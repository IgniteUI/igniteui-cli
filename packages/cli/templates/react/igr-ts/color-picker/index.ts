import { BaseComponent } from "@igniteui/cli-core";

class IgrColorPickerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Color Picker";
		this.group = "Data Entry & Display";
		this.description = `lets users pick a color from a canvas, sliders or predefined swatches`;
	}
}
module.exports = new IgrColorPickerComponent();
