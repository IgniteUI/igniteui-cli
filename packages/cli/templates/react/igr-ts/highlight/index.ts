import { BaseComponent } from "@igniteui/cli-core";

class IgrHighlightComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Highlight";
		this.group = "Data Entry & Display";
		this.description = `highlights matches of a search text within its slotted content`;
	}
}
module.exports = new IgrHighlightComponent();
