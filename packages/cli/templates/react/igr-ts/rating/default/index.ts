import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrRatingTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Rating"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "rating";
		this.projectType = "igr-ts";
		this.name = "Rating";
		this.description = "basic IgrRating";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrRatingTemplate();
