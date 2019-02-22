import { Component, ViewChild } from "@angular/core";
import { IgxSelectComponent } from "igniteui-angular";

@Component({
	selector: "app-$(filePrefix)",
	styleUrls: ["$(filePrefix).component.scss"],
	templateUrl: "$(filePrefix).component.html"
})
export class $(ClassName)Component {
	@ViewChild(IgxSelectComponent)
	public igxSelect: IgxSelectComponent;

	public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
	public value: string;

	public onSubmit() {
		this.value = this.igxSelect.value;
	}
}
