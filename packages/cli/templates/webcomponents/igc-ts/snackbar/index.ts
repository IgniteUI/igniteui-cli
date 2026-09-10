import { BaseComponent } from "@igniteui/cli-core";

class IgcSnackbarComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Snackbar";
		this.group = "Notifications";
		this.description = `Customizable snackbar component`;
	}
}
module.exports = new IgcSnackbarComponent();
