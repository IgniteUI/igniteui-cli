
import { BaseComponent } from "@igniteui/cli-core";

class IgxTabsComponent extends BaseComponent {
  /**
   *
   */
  constructor() {
    super(__dirname);
    this.name = "Tabs";
    this.group = "Layouts";
  }
}
module.exports = new IgxTabsComponent();
