import { BaseComponent } from "@igniteui/cli-core";

class IgrDividerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Divider";
		this.group = "Data Entry & Display";
		this.description = `provides a thin, lightweight separator.`;
	}
}
module.exports = new IgrDividerComponent();
