import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcToastTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Toast"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "toast";
		this.projectType = "igc-ts";
		this.name = "Toast";
		this.description = "basic IgcToast";
	}
}
module.exports = new IgcToastTemplate();
