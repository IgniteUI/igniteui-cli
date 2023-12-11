import { BaseComponent } from "@igniteui/cli-core";

class IgxGeographicMapComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Geographic Map";
		this.group = "Maps";
		this.description = `allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.`;
	}
}
module.exports = new IgxGeographicMapComponent();
