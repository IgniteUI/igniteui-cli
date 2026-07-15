import { BaseComponent } from "@igniteui/cli-core";

class IgrIconComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Icon";
		this.group = "Data Entry & Display";
		this.description = `displays an icon.`;
	}
}
module.exports = new IgrIconComponent();
