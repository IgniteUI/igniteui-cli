
import { BaseComponent } from "@igniteui/cli-core";

class IgxTimePickerComponent extends BaseComponent {
  /**
   *
   */
  constructor() {
    super(__dirname);
    this.name = "Time Picker";
    this.group = "Scheduling";
    this.description = "select time from a dialog with spinners which is then mirrored in the input field.";
  }
}
module.exports = new IgxTimePickerComponent();
