
import { BaseComponent } from "@igniteui/cli-core";

class IgrTsBulletGraphComponent extends BaseComponent {
  /**
   *
   */
  constructor() {
    super(__dirname);
    this.name  = "Bullet Graph";
    this.group = "Gauges";
    this.description = `allows for a linear and concise view of measures compared against a scale.`;
  }
}
module.exports = new IgrTsBulletGraphComponent();
