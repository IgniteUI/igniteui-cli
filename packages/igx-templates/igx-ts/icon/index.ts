import { BaseComponent } from "@igniteui/cli-core";

class IgxIconComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "Icon";
		this.group = "Data Entry & Display";
		this.description = "unifies various icon/font sets and custom SVG icons for interchangeable usage";
	}
}
module.exports = new IgxIconComponent();
