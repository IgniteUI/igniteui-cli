import { BaseComponent } from "@igniteui/cli-core";

class IgxDividerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Divider";
		this.group = "Layouts";
		this.description = "separates content into clear groups";
	}
}
module.exports = new IgxDividerComponent();
