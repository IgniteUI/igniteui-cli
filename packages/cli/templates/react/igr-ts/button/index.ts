import { BaseComponent } from "@igniteui/cli-core";

class IgrButtonComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Button";
		this.group = "Data Entry & Display";
		this.description = `displays a button with customizable size and content.`;
	}
}
module.exports = new IgrButtonComponent();
