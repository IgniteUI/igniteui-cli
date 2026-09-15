import { BaseComponent } from "@igniteui/cli-core";

class IgxActionStripComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Action Strip";
		this.group = "Grids & Lists";
		this.description = "provides a template area with one or more actions overlaid on a container";
	}
}
module.exports = new IgxActionStripComponent();
