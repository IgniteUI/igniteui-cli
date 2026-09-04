import { BaseComponent } from "@igniteui/cli-core";

class IgcChatComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Chat";
		this.group = "Data Entry & Display";
		this.description = `Complete conversational UI with messages, attachments and suggestions`;
	}
}
module.exports = new IgcChatComponent();
