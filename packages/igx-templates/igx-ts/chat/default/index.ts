import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxChatTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Chat"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "chat";
		this.projectType = "igx-ts";
		this.name = "Chat";
		this.description = "Basic IgxChat sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE, "igniteui-webcomponents@^7.2.1"];
	}
}
module.exports = new IgxChatTemplate();
