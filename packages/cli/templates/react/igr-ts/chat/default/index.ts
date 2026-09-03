import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrChatTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Chat"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "chat";
		this.projectType = "igr-ts";
		this.name = "Chat";
		this.description = "basic IgrChat";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrChatTemplate();
