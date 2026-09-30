import { BaseComponent } from "@igniteui/cli-core";

class IgrBreadcrumbsComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Breadcrumbs";
		this.group = "Menus";
		this.description = `shows the current page location within a navigational hierarchy`;
	}
}
module.exports = new IgrBreadcrumbsComponent();
