import { BaseComponent } from "@igniteui/cli-core";

class IgrSplitterComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Splitter";
		this.group = "Layouts";
		this.description = `resizable split panes for arranging content`;
	}
}
module.exports = new IgrSplitterComponent();
