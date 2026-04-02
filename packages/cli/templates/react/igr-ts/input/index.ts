import { BaseComponent } from "@igniteui/cli-core";

class IgrInputComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Input";
		this.group = "Data Entry & Display";
		this.description = `displays an input field.`;
	}
}
module.exports = new IgrInputComponent();
