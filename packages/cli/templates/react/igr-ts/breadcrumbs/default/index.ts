import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrBreadcrumbsTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Breadcrumbs"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "breadcrumbs";
		this.projectType = "igr-ts";
		this.name = "Breadcrumbs";
		this.description = "basic IgrBreadcrumbs";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrBreadcrumbsTemplate();
