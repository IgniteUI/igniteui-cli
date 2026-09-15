import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxPaginatorTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Paginator"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "paginator";
		this.projectType = "igx-ts";
		this.name = "Paginator";
		this.description = "Basic IgxPaginator sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxPaginatorTemplate();
