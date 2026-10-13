import { BaseComponent } from "@igniteui/cli-core";

class IgxChatComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Chat";
		this.group = "Interactions";
		this.description = "provides a chat interface for conversational experiences";
	}
}
module.exports = new IgxChatComponent();
