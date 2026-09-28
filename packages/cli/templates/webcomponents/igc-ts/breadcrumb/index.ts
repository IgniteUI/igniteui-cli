import { BaseComponent } from "@igniteui/cli-core";

class IgcBreadcrumbComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Breadcrumb";
		this.group = "Menus";
		this.description = `Customizable breadcrumb component`;
	}
}
module.exports = new IgcBreadcrumbComponent();
