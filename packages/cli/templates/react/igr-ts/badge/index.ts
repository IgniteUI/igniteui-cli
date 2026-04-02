import { BaseComponent } from "@igniteui/cli-core";

class IgrBadgeComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Badge";
		this.group = "Data Entry & Display";
		this.description = `displays a badge with customizable variants and styles.`;
	}
}
module.exports = new IgrBadgeComponent();
