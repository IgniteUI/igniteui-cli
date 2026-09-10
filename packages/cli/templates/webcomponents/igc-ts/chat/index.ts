import { BaseComponent } from "@igniteui/cli-core";

class IgcChatComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Chat";
		this.group = "Interactions";
		this.description = `Complete conversational UI with messages, attachments and suggestions`;
	}
}
module.exports = new IgcChatComponent();
