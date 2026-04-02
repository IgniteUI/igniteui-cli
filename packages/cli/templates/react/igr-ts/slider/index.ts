import { BaseComponent } from "@igniteui/cli-core";

class IgrSliderComponent extends BaseComponent {
constructor() {
super(__dirname);
this.name  = "Slider";
this.group = "Interactions";
this.description = `displays slider component`;
}
}
module.exports = new IgrSliderComponent();
