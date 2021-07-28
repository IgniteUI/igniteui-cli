
import { BaseComponent } from "@igniteui/cli-core";

class IgxComboComponent extends BaseComponent {
  /**
   *
   */
  constructor() {
    super(__dirname);
    this.name = "Tree";
    this.group = "Grids & Lists";
    this.description = `visualize hierarchical data in beautiful and easy-to-navigate tree-view.`;
  }
}
module.exports = new IgxComboComponent();
