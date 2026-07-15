import { BaseComponent } from "@igniteui/cli-core";

class IgrAvatarComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Avatar";
		this.group = "Layouts";
		this.description = `displays an avatar with customizable shape, size, and initials.`;
	}
}
module.exports = new IgrAvatarComponent();
