import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxHierarchicalGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Hierarchical Grid With Batch Editing"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "hierarchical-grid-batch-editing";
		this.projectType = "igx-ts";
		this.name = "Hierarchical Grid With Batch Editing";
		this.description = "IgxHierarchicalGrid with batch editing";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxHierarchicalGridTemplate();
