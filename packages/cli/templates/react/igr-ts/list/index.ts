import { BaseComponent } from "@igniteui/cli-core";

class IgrListComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "List";
this.group = "Grids & Lists";
this.description = `displays list component`;
}
}
module.exports = new IgrListComponent();
