import { BaseComponent } from "@igniteui/cli-core";

class IgxSplitterComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Splitter";
		this.group = "Layouts";
		this.description = "a responsive layout component to divide content with live resizing and collapse behavior";
	}
}
module.exports = new IgxSplitterComponent();
