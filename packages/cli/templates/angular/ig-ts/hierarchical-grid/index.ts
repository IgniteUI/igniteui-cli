import { BaseComponent } from "@igniteui/cli-core";

class HierarchicalGridComponent extends BaseComponent {
  constructor() {
    super(__dirname);
    this.name = "Hierarchical Grid";
    this.group = "Data Grids";
    this.description = "pick from hierarchical grids: basic, custom, editing, export.";
  }
}
module.exports = new HierarchicalGridComponent();
