import { BaseComponent } from "@igniteui/cli-core";

class IgrBannerComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Banner";
this.group = "Notifications";
this.description = `displays banner component`;
}
}
module.exports = new IgrBannerComponent();
