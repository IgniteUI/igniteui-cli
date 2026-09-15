import { BaseComponent } from "@igniteui/cli-core";

class IgrFileInputComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "File Input";
		this.group = "Data Entry & Display";
		this.description = `an input field for selecting and uploading one or more files`;
	}
}
module.exports = new IgrFileInputComponent();
