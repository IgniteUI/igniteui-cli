import { Component } from "@angular/core";
import { routes } from "../app-routing.module";

@Component({
  selector: "nav-menu",
  styleUrls: ['./nav-menu.component.css'],
  template: `
  <nav class="nav-menu">
    <h1>$(name)</h1>
    <div class="nav-menu-item" *ngFor="let route of topNavLinks">
      <!-- only top bav links generated -->
      <a [routerLink]="route.path" routerLinkActive="active">{{route.name}}</a>
    </div>
  </nav>`
})
export class NavMenuComponent {
  public topNavLinks: Array<{
    path: string,
    name: string
  }> = [];
  /**
   *
   */
  constructor() {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf("*") === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: "/" + route.path
        });
      }
    }
  }
}
