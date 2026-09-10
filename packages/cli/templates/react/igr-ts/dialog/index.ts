import { BaseComponent } from "@igniteui/cli-core";

class IgrDialogComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Dialog";
		this.group = "Notifications";
		this.description = `a modal dialog built on the native dialog element`;
	}
}
module.exports = new IgrDialogComponent();
