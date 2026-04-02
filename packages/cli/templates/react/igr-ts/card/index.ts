import { BaseComponent } from "@igniteui/cli-core";

class IgrCardComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Card";
		this.group = "Layouts";
		this.description = `displays organized content and actions about a single subject.`;
	}
}
module.exports = new IgrCardComponent();
