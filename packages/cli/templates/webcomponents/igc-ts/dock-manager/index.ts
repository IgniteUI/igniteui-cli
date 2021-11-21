import { BaseComponent } from "@igniteui/cli-core";

class IgcDockManagerComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name  = "Dock Manager";
		this.group = "Layouts";
		this.description = "Dock Manager with most functionalities and docking options";
	}
}
module.exports = new IgcDockManagerComponent();
