import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcSnackbarActionTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Snackbar"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "snackbar-action";
		this.projectType = "igc-ts";
		this.name = "Snackbar Action";
		this.description = "IgcSnackbar with an action button";
	}
}
module.exports = new IgcSnackbarActionTemplate();
