import { BaseComponent } from "@igniteui/cli-core";

class IgrChatComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Chat";
		this.group = "Data Entry & Display";
		this.description = `a chat UI component for displaying messages, attachments and input interaction`;
	}
}
module.exports = new IgrChatComponent();
