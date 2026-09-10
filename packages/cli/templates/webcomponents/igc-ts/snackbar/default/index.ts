import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSnackbarTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Snackbar"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "snackbar";
		this.projectType = "igc-ts";
		this.name = "Snackbar";
		this.description = "basic IgcSnackbar";
	}
}
module.exports = new IgcSnackbarTemplate();
