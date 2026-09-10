import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxSnackbarTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Snackbar"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "snackbar";
		this.projectType = "igx-ts";
		this.name = "Snackbar";
		this.description = "Basic IgxSnackbar sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxSnackbarTemplate();
