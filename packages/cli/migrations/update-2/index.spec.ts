import * as path from "path";

// tslint:disable:no-implicit-dependencies
import { EmptyTree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";

describe("Update 2.0.0", () => {
	let appTree: UnitTestTree;
	const schematicRunner = new SchematicTestRunner("ig-migrate", path.join(__dirname, "../migration-collection.json"));

	beforeEach(() => {
		appTree = new UnitTestTree(new EmptyTree());
	});

	it("should update router event rxjs subscription", async () => {
		appTree.create(
			"/src/app/app.component.ts",
`import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

import { IgxNavigationDrawerComponent } from 'igniteui-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navdrawer: IgxNavigationDrawerComponent;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events
      .filter((x) => x instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
          if (event.url !== '/' && !this.navdrawer.pin) {
              this.navdrawer.close();
          }
      });
  }
}
`
		);

		const tree = await schematicRunner.runSchematic("migration-01", {}, appTree);
		expect(tree.readContent("/src/app/app.component.ts"))
			.toEqual(
`import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { IgxNavigationDrawerComponent } from 'igniteui-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navdrawer: IgxNavigationDrawerComponent;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((x) => x instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
          if (event.url !== '/' && !this.navdrawer.pin) {
              this.navdrawer.close();
          }
      });
  }
}
`
			);
	});

});
