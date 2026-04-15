import { BaseComponent } from "@igniteui/cli-core";

class IgrButtonGroupComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Button group";
		this.group = "Data Entry & Display";
		this.description = `displays a group of buttons with toggle functionality.`;
	}
}
module.exports = new IgrButtonGroupComponent();
