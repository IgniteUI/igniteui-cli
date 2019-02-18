import { Component, Pipe, PipeTransform } from "@angular/core";
import { townsSimple, townsGrouped } from "./towns-data"; // TODO: Template imports

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
	public townsSimple: any[];
	public townsGrouped: any;
    public townSelected;

    constructor() {
		// TODO: template imports
		this.townsSimple = townsSimple;
		this.townsGrouped = townsGrouped;
    }
}

@Pipe({ name: "$(camelCaseName)StartsWith" })
export class $(ClassName)PipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = "") {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
