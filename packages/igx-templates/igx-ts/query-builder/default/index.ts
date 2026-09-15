import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxQueryBuilderTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Query Builder"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "query-builder";
		this.projectType = "igx-ts";
		this.name = "Query Builder";
		this.description = "Basic IgxQueryBuilder sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxQueryBuilderTemplate();
