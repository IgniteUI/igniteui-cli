import { BaseComponent } from "@igniteui/cli-core";

class IgrLinearProgressComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Linear Progress";
this.group = "Data Entry & Display";
this.description = `displays linear progress component`;
}
}
module.exports = new IgrLinearProgressComponent();
