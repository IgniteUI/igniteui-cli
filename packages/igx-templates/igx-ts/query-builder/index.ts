import { BaseComponent } from "@igniteui/cli-core";

class IgxQueryBuilderComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Query Builder";
		this.group = "Grids & Lists";
		this.description = "provides a way to build complex queries through the UI";
	}
}
module.exports = new IgxQueryBuilderComponent();
