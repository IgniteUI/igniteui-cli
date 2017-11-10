import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";

class FileExplorerTemplate extends jQueryTemplate {
	constructor() {
		super(__dirname);
		this.controlGroup = "";
		this.id = "file-explorer";
		this.framework = "jquery";
		this.projectType = "js";
		this.components = ["igTreeGrid"];
		this.listInCustomTemplates = true;
		this.name = "File Explorer";
		this.description = "File explorer sample using igTreeGrid";
		this.dependencies = ["igTreeGrid"];
	}
}
module.exports = new FileExplorerTemplate();
