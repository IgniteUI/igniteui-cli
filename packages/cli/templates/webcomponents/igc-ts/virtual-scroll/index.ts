import { BaseComponent } from "@igniteui/cli-core";

class IgcVirtualScrollComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Virtual Scroll";
		this.group = "Grids & Lists";
		this.description = `Efficiently renders large or unbounded lists by only rendering visible items`;
	}
}
module.exports = new IgcVirtualScrollComponent();
