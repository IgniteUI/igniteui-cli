import { BaseComponent } from "@igniteui/cli-core";

class IgxSnackbarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Snackbar";
		this.group = "Interactions";
		this.description = "provides feedback about an operation by showing a brief message";
	}
}
module.exports = new IgxSnackbarComponent();
