import { BaseComponent } from "@igniteui/cli-core";

class IgrTreeComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Tree";
this.group = "Grids & Lists";
this.description = `displays tree component`;
}
}
module.exports = new IgrTreeComponent();
