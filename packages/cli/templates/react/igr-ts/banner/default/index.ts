import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
this.packages = ["igniteui-react@~19.5.2"];
}
}
module.exports = new IgrBannerTemplate();
