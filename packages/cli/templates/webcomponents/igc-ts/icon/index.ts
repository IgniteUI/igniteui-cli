import { BaseComponent } from "@igniteui/cli-core";

class IgcIconComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Icon";
		this.group = "Data Entry & Display";
		this.description = `Customizable icon component`;
	}
}
module.exports = new IgcIconComponent();
