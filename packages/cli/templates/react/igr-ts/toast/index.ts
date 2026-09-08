import { BaseComponent } from "@igniteui/cli-core";

class IgrToastComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Toast";
		this.group = "Notifications";
		this.description = `displays a brief, non-interactive notification`;
	}
}
module.exports = new IgrToastComponent();
