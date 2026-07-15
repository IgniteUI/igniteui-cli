import { BaseComponent } from "@igniteui/cli-core";

class IgrTabsComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Tabs";
this.group = "Layouts";
this.description = `displays tabs component`;
}
}
module.exports = new IgrTabsComponent();
