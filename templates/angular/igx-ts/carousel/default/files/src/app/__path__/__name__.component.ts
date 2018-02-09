import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
	selector: 'app-home',
	templateUrl: './$(filePrefix).component.html',
	styleUrls: ['./$(filePrefix).component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class $(ClassName)Component implements OnInit {

	public slides: any[] = [];
	public interval = 3000;
	public pause = true;
	public loop = true;
	constructor() { }

	public ngOnInit() {
		this.addNewSlide();
	}

	public addNewSlide() {
		this.slides.push(
			{ image: "assets/slide1@x2.jpg" },
			{ image: "assets/slide2@x2.jpg" },
			{ image: "assets/slide3@x2.jpg" },
			{ image: "assets/slide4@x2.jpg" }
		);
	}
}