import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxBannerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Banner"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "banner";
		this.projectType = "igx-ts";
		this.name = "Banner";
		this.description = "Basic IgxBanner sample";
		this.packages = [IGNITEUI_ANGULAR_PACKAGE];
	}
}
module.exports = new IgxBannerTemplate();
