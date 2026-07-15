import { BaseComponent } from "@igniteui/cli-core";

class IgrFormComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Form";
this.group = "Data Entry & Display";
this.description = `displays form component`;
}
}
module.exports = new IgrFormComponent();
