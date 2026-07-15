import { BaseComponent } from "@igniteui/cli-core";

class IgrCircularProgressComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Circular Progress";
this.group = "Data Entry & Display";
this.description = `displays circular progress component`;
}
}
module.exports = new IgrCircularProgressComponent();
