import { BaseComponent } from "@igniteui/cli-core";

class IgxCircularProgressComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Circular Progress";
		this.group = "Data Entry & Display";
		this.description = "displays progress in a circle and updates its appearance as its state changes";
	}
}
module.exports = new IgxCircularProgressComponent();
