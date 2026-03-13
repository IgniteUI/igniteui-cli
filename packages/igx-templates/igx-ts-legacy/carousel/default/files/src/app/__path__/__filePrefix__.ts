import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> implements OnInit {

  public slides: Slide[] = [];
  public interval = 3000;
  public pause = true;
  public loop = true;
  constructor() { }

  public ngOnInit() {
    this.addNewSlide();
  }

  public addNewSlide() {
    this.slides.push(
      { image: 'assets/slide1@x2.jpg' },
      { image: 'assets/slide2@x2.jpg' },
      { image: 'assets/slide3@x2.jpg' },
      { image: 'assets/slide4@x2.jpg' }
    );
  }
}

interface Slide {
  image: string;
  active?: boolean;
}
