import { BaseComponent } from "@igniteui/cli-core";

class IgxPaginatorComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Paginator";
		this.group = "Grids & Lists";
		this.description = "displays paging information and lets users navigate through large data sets";
	}
}
module.exports = new IgxPaginatorComponent();
