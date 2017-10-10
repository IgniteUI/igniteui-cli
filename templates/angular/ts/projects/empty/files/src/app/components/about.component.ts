import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'about-home',
  template: `<h3>About Home</h3>`
})
export class AboutHomeComponent { }

@Component({
  selector: 'about-item',
  template: `<h3>About Item Id: {{id}}</h3>`
})
export class AboutItemComponent {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

@Component({
  selector: 'app-about',
  template: `
    <h2>About</h2>
    <a [routerLink]="['/about']">Home</a>
    <a [routerLink]="['/about/item', 1]">Item 1</a>
    <a [routerLink]="['/about/item', 2]">Item 2</a>
    <div class="inner-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AboutComponent { }
