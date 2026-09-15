import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrFileInputTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["File Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "file-input";
		this.projectType = "igr-ts";
		this.name = "File Input";
		this.description = "basic IgrFileInput";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrFileInputTemplate();
