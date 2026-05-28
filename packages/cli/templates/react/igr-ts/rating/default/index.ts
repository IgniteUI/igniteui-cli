import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrRatingTemplate();
