import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcBreadcrumbTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Breadcrumb"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "breadcrumb";
		this.projectType = "igc-ts";
		this.name = "Breadcrumb";
		this.description = "basic IgcBreadcrumb";
	}
}
module.exports = new IgcBreadcrumbTemplate();
