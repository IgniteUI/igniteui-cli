import { BaseComponent } from "@igniteui/cli-core";

class IgxLinearProgressComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Linear Progress";
		this.group = "Data Entry & Display";
		this.description = "displays a progress bar and updates its appearance as its state changes";
	}
}
module.exports = new IgxLinearProgressComponent();
