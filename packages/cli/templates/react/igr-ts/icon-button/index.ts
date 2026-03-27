import { BaseComponent } from "@igniteui/cli-core";

class IgrIconButtonComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Icon button";
		this.group = "Data Entry & Display";
		this.description = `displays an icon button.`;
	}
}
module.exports = new IgrIconButtonComponent();
