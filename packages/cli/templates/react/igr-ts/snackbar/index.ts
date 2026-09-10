import { BaseComponent } from "@igniteui/cli-core";

class IgrSnackbarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Snackbar";
		this.group = "Notifications";
		this.description = `provides brief feedback about an operation with an optional action`;
	}
}
module.exports = new IgrSnackbarComponent();
