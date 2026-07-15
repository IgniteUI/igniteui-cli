import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrBannerTemplate extends IgniteUIForReactTemplate {
constructor() {
super(__dirname);
this.components = ["Banner"];
this.controlGroup = "Notifications";
this.listInComponentTemplates = true;
this.id = "banner";
this.projectType = "igr-ts";
this.name = "Banner";
this.description = "basic IgrBanner";
this.packages = [IGNITEUI_REACT_PACKAGE];
}
}
module.exports = new IgrBannerTemplate();
