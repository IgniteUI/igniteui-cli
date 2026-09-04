import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrSnackbarTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Snackbar"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "snackbar";
		this.projectType = "igr-ts";
		this.name = "Snackbar";
		this.description = "basic IgrSnackbar";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrSnackbarTemplate();
