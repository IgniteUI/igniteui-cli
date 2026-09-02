import { BaseComponent } from "@igniteui/cli-core";

class IgxButtonGroupComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Button Group";
		this.group = "Data Entry & Display";
		this.description = "displays a group of buttons either vertically or horizontally";
	}
}
module.exports = new IgxButtonGroupComponent();
