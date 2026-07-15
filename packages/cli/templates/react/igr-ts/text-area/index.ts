import { BaseComponent } from "@igniteui/cli-core";

class IgrTextAreaComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Text area";
		this.group = "Data Entry & Display";
		this.description = `represents a text area component`;
	}
}
module.exports = new IgrTextAreaComponent();
