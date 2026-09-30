import { BaseComponent } from "@igniteui/cli-core";

class IgrVirtualScrollComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Virtual Scroll";
		this.group = "Grids & Lists";
		this.description = `efficiently renders large lists by only rendering the visible items`;
	}
}
module.exports = new IgrVirtualScrollComponent();
