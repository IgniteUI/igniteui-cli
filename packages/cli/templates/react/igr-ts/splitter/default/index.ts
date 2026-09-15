import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrSplitterTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Splitter"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "splitter";
		this.projectType = "igr-ts";
		this.name = "Splitter";
		this.description = "basic IgrSplitter";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrSplitterTemplate();
