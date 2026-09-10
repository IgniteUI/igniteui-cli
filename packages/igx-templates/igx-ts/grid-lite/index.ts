import { BaseComponent } from "@igniteui/cli-core";

class IgxGridLiteComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Grid Lite";
		this.group = "Grids & Lists";
		this.description = "a lightweight, performant data grid solution with sorting, filtering and virtualization";
	}
}
module.exports = new IgxGridLiteComponent();
