import { BaseComponent } from "@igniteui/cli-core";

class IgcBreadcrumbComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Breadcrumb";
		this.group = "Menus";
		this.description = `Shows the current page location within a navigational hierarchy`;
	}
}
module.exports = new IgcBreadcrumbComponent();
