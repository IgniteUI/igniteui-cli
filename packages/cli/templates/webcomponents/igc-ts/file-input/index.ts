import { BaseComponent } from "@igniteui/cli-core";

class IgcFileInputComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "File Input";
		this.group = "Data Entry & Display";
		this.description = `Input control for selecting and uploading one or more files`;
	}
}
module.exports = new IgcFileInputComponent();
