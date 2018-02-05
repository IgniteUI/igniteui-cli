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
			{ image: "assets/images/carousel/slide1@x2.jpg" },
			{ image: "assets/images/carousel/slide2@x2.jpg" },
			{ image: "assets/images/carousel/slide3@x2.jpg" },
			{ image: "assets/images/carousel/slide4@x2.jpg" }
		);
	}
}