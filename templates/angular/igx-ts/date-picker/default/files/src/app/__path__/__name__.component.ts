import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "$(filePrefix)",
	templateUrl: './$(filePrefix).component.html',
	styleUrls: ['./$(filePrefix).component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class $(ClassName)Component implements OnInit {

	constructor() { }

	public ngOnInit() {
	}

	public today: Date = new Date(Date.now());
}
