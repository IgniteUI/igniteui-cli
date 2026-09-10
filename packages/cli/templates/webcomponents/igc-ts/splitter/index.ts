import { BaseComponent } from "@igniteui/cli-core";

class IgcSplitterComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Splitter";
		this.group = "Layouts";
		this.description = `Resizable, collapsible panes split horizontally or vertically`;
	}
}
module.exports = new IgcSplitterComponent();
