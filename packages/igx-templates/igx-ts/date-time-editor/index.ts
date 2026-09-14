import { BaseComponent } from "@igniteui/cli-core";

class IgxDateTimeEditorComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Date Time Editor";
		this.group = "Data Entry & Display";
		this.description = "allows the user to set and edit date and time in a chosen input element";
	}
}
module.exports = new IgxDateTimeEditorComponent();
