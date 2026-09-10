import { BaseComponent } from "@igniteui/cli-core";

class IgxToastComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Toast";
		this.group = "Interactions";
		this.description = "shows application messages in a stylized, non-interactive pop-up box";
	}
}
module.exports = new IgxToastComponent();
