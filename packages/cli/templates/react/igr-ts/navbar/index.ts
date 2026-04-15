import { BaseComponent } from "@igniteui/cli-core";

class IgrNavbarComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Navbar";
this.group = "Menus";
this.description = `displays navbar component`;
}
}
module.exports = new IgrNavbarComponent();
