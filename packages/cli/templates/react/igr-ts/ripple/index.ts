import { BaseComponent } from "@igniteui/cli-core";

class IgrRippleComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Ripple";
this.group = "Interactions";
this.description = `displays ripple component`;
}
}
module.exports = new IgrRippleComponent();
