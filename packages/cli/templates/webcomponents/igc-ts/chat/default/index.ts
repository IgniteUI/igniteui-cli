import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcChatTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Chat"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "chat";
		this.projectType = "igc-ts";
		this.name = "Chat";
		this.description = "basic IgcChat";
	}
}
module.exports = new IgcChatTemplate();
