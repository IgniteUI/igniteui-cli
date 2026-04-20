---
title: Angular Bottom Navigation Component – Ignite UI for Angular | Infragistics | MIT license
_description: Display tabs for any occasion and implement a completely tabbed user interface. These UI controls manage every aspect of your tabs’ appearance and behavior.
_keywords: Angular Bottom Nav component, Angular Bottom Navigation control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Bottom Navigation
---

# Angular Bottom Navigation Component Overview

<p class="highlight">The Ignite UI for Angular Bottom Navigation component enables the user to navigate among a number of content panels displayed in a single view. The navigation through the panels is accomplished with the tab buttons located at bottom of your application.</p>

> [!NOTE]
> `igx-tab-bar` selector is deprecated. You could use [`igx-bottom-nav`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html) instead. `IgxTabBarComponent` class is renamed to [`IgxBottomNavComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html). `IgxTabBarModule` is renamed to `IgxBottomNavModule`.

## Angular Bottom Navigation Example

<div class="divider--half"></div>


```typescript
import { Component } from '@angular/core';
import { IgxBottomNavComponent, IgxBottomNavContentComponent, IgxBottomNavHeaderComponent, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabbar-sample-1',
    styleUrls: ['./tabbar-sample-1.component.scss'],
    templateUrl: './tabbar-sample-1.component.html',
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavContentComponent]
})
export class TabbarSample1Component {

  constructor() { }

}
```
```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_music</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 1 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>video_library</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 2 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_books</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 3 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```
```scss
igx-bottom-nav-content {
    padding: 10px;
}
```


<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Bottom Navigation

To get started with the Ignite UI for Angular Bottom Navigation component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxBottomNavModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxBottomNavModule } from 'igniteui-angular/bottom-nav';
// import { IgxBottomNavModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBottomNavModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxBottomNavComponent` as a standalone dependency, or use the [`IGX_BOTTOM_NAV_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/bottom-nav/src/bottom-nav/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_BOTTOM_NAV_DIRECTIVES } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';
// import { IGX_BOTTOM_NAV_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-bottom-nav>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon>library_music</igx-icon>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>This is Item 1 content.</igx-bottom-nav-content>
        </igx-bottom-nav-item>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon>video_library</igx-icon>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>This is Item 2 content.</igx-bottom-nav-content>
        </igx-bottom-nav-item>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon>library_books</igx-icon>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>This is Item 3 content.</igx-bottom-nav-content>
        </igx-bottom-nav-item>
    </igx-bottom-nav>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BOTTOM_NAV_DIRECTIVES, IgxIconComponent]
    /* or imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxBottomNavContentComponent, IgxIconComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Bottom Navigation module or directives imported, you can start using the `igx-bottom-nav` component.

## Using the Angular Bottom Navigation

Our component's template includes the Bottom Navigation and three items. Each item wraps an `igx-bottom-nav-header` and an `igx-bottom-nav-content` component which represent respectively the header and the container of the data. Headers usually consist of an icon and an optional text label. The Bottom Navigation control is compatible with the Material Design [**Icons**](https://material.io/icons/) so to adopt them in your application simply add the Material+Icons import in your 'styles.css' file in the main application folder.

> [!NOTE]
> If you haven't used the `igx-icon` in your application so far, please make sure to import the `IgxIconModule` in the **app.module.ts** before proceeding.

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_music</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 1 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>video_library</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 2 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_books</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 3 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

If all went well, you should see the demo sample in your browser.

<div class="divider--half"></div>

## Customizing Bottom Navigation

Let's modify the tabs by adding labels alongside the icons and make sure the headers are properly styled.

First, define some object arrays for the data source in the component typescript file:

```typescript
public songsList: object[] = [
    { title: 'Havana', artist: 'Camila Cabello' },
    { title: 'Meant To Be', artist: 'Bebe Rexha & Florida Georgia Line' },
    { title: 'New Rules', artist: 'Dua Lipa' },
    { title: 'Wolves', artist: 'Selena Gomez & Marshmello' }
];

public moviesList: object[] = [
    { title: 'Logan', genre: 'Action, Drama, Sci-Fi' },
    { title: 'Wonder Woman', genre: 'Action, Adventure, Fantasy' },
    { title: 'Guardians of the Galaxy Vol. 2', genre: 'Action, Adventure, Sci-Fi' },
    { title: 'Star Wars: The Last Jedi', genre: 'Action, Adventure, Fantasy' }
];

public booksList: object[] = [
    { title: 'Wonder', author: 'R. J. Palacio' },
    { title: 'Milk and Honey', author: 'Rupi Kaur' },
    { title: 'Giraffes Can\'t Dance', author: 'Jeff Kinne' },
    { title: 'The Getaway', author: 'Selena Gomez & Marshmello' }
];
```

Next, update the component's template markup as follows:

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_music</igx-icon>
            <span igxBottomNavHeaderLabel>Songs</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let song of songsList">
                <span class="item-line1">{{song.title}}</span><br/>
                <span class="item-line2">{{song.artist}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let movie of moviesList">
                <span class="item-line1">{{movie.title}}</span><br/>
                <span class="item-line2">{{movie.genre}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_books</igx-icon>
            <span igxBottomNavHeaderLabel>Books</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let book of booksList">
                <span class="item-line1">{{book.title}}</span><br/>
                <span class="item-line2">{{book.author}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

You probably noticed that in addition to placing the icon and the span with the label between the item's header tags, we also attach the `igxBottomNavHeaderIcon` and the `igxBottomNavHeaderLabel` directives to them. These directives denote the respective elements and apply the proper styles to them.

Finally, add the CSS classes used by the DIV and SPAN elements of the content's template to the component's CSS file:

```css
.item {
    margin-bottom: 5px;
}

.item-line1 {
    font-size: 14px;
    color: gray;
}

.item-line2 {
    font-size: 12px;
    color: darkgray;
}

igx-bottom-nav-content {
    padding: 10px;
}
```

After these modifications our Bottom Navigation should look similar to this:

```typescript
/* eslint-disable @typescript-eslint/quotes */
import { Component } from "@angular/core";
import { IgxBottomNavComponent, IgxBottomNavContentComponent, IgxBottomNavHeaderComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: "app-tabbar-sample-2",
    styleUrls: ["./tabbar-sample-2.component.scss"],
    templateUrl: "./tabbar-sample-2.component.html",
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavContentComponent]
})
export class TabbarSample2Component {

  public songsList = [
    { title: "Havana", artist: "Camila Cabello" },
    { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
    { title: "New Rules", artist: "Dua Lipa" },
    { title: "Wolves", artist: "Selena Gomez & Marshmello" }
  ];

  public moviesList = [
    { title: "Logan", genre: "Action, Drama, Sci-Fi" },
    { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
    { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
    { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
  ];

  public booksList = [
    { title: "Wonder", author: "R. J. Palacio" },
    { title: "Milk and Honey", author: "Rupi Kaur" },
    { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
    { title: "The Getaway", author: "Selena Gomez & Marshmello" }
  ];

  constructor() { }

}
```
```html
<igx-bottom-nav>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>library_music</igx-icon>
      <span igxBottomNavHeaderLabel>Songs</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (song of songsList; track song) {
        <div class="item">
          <span class="item-line1">{{song.title}}</span><br/>
          <span class="item-line2">{{song.artist}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
      <span igxBottomNavHeaderLabel>Movies</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (movie of moviesList; track movie) {
        <div class="item">
          <span class="item-line1">{{movie.title}}</span><br/>
          <span class="item-line2">{{movie.genre}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>library_books</igx-icon>
      <span igxBottomNavHeaderLabel>Books</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (book of booksList; track book) {
        <div class="item">
          <span class="item-line1">{{book.title}}</span><br/>
          <span class="item-line2">{{book.author}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
</igx-bottom-nav>
```
```scss
.item {
    margin-bottom: 5px;
}

.item-line1 {
    font-size: 14px;
    color: gray;
}

.item-line2 {
    font-size: 12px;
    color: darkgray;
}

igx-bottom-nav-content {
    padding: 10px;
}
```


<div class="divider--half"></div>

If having labels and icons in the headers is not enough, you can simply add your custom content between the header tags.
Here is an example:

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
            <div>
                <!-- your custom tab header content goes here -->
            </div>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <h1>Tab content</h1>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

<div class="divider"></div>

## Integration With Router Outlet Container

Despite the primary usage of the Bottom Navigation component is to define tab items with content, there may be cases in which you may need to define tab items with headers only. Probably, the main scenario for such usage is navigation between views using the Angular Router. The following example will demonstrate how to configure the Bottom Navigation component to switch between three components in a single router-outlet.

To start we need a main component hosting the Bottom Navigation component and three view components with some content for demonstration purposes. For code snippets' simplicity, the view components will have a very short template but feel free to make them more distinguishable if you need. Also import these view components in your `app.module.ts` file.

```typescript
// bottomnav-routing.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-bottomnav-routing',
    styleUrls: ['bottomnav-routing.component.scss'],
    templateUrl: 'bottomnav-routing.component.html'
})
export class BottomNavRoutingComponent { }

@Component({
    template: '<p>Item 1 Content</p>'
})
export class BottomNavRoutingView1Component { }

@Component({
    template: '<p>Item 2 Content</p>'
})
export class BottomNavRoutingView2Component { }

@Component({
    template: '<p>Item 3 Content</p>'
})
export class BottomNavRoutingView3Component { }
```

The next step is to create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
import { RouterModule, Routes } from '@angular/router';

import {
    TabbarRoutingComponent,
    TabbarRoutingView1Component,
    TabbarRoutingView2Component,
    TabbarRoutingView3Component,
} from './tabbar-routing.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabbar-routing'
    },
    {
        path: 'tabbar-routing',
        component: TabbarRoutingComponent,
        children: [
            { path: 'tabbar-view1', component: TabbarView1Component },
            { path: 'tabbar-view2', component: TabbarView2Component },
            { path: 'tabbar-view3', component: TabbarView3Component }
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ]
})
export class TabbarRoutingModule { }
```

Now that we have all navigation routes setup, we need to declare the BottomNavigation component and configure it for routing.
Also, make sure to add a router-outlet for rendering the view components' output.

```html
<!-- bottomnav-routing.component.html -->
<router-outlet></router-outlet>

<igx-bottom-nav #tabs1>
    <igx-bottom-nav-item
        routerLinkActive
        #rla1="routerLinkActive"
        [selected]="rla1.isActive"
        >
        <igx-bottom-nav-header routerLink="tabbar-view1">
            <igx-icon igxBottomNavHeaderIcon>phone</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla2="routerLinkActive"
        [selected]="rla2.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view2">
            <igx-icon igxBottomNavHeaderIcon>supervisor_account</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla3="routerLinkActive"
        [selected]="rla3.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view3">
            <igx-icon igxBottomNavHeaderIcon>format_list_bulleted</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

The above code creates a BottomNavigation component with three tab items. All tab items are having the `RouterLinkActive` directive applied which tracks whether the linked route is currently active. Please, note, that the `RouterLink` directive is applied on the header element itself, not on the tab item. If any of these links becomes active, the corresponding tab item will have its `selected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always stay synchronized with the current browser's address.

The approach described above is used by the following sample to demonstrate routing using the BottomNavigation component:


```typescript
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgxBottomNavComponent, IgxBottomNavHeaderComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabbar-sample-3',
    styleUrls: ['./tabbar-sample-3.component.scss'],
    templateUrl: './tabbar-sample-3.component.html',
    imports: [RouterOutlet, IgxBottomNavComponent, IgxBottomNavItemComponent, RouterLinkActive, IgxBottomNavHeaderComponent, RouterLink, IgxIconComponent, IgxBottomNavHeaderIconDirective]
})
export class TabbarSample3Component implements OnInit {
    private router = inject(Router);

    public path: string;

    public ngOnInit() {
        this.path = this.router.url;

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(args => this.path = args['url']);
    }
}
```
```html
<div class="url">
    <p class="url__title">Current URL Path:</p>
    <p class="url__path">http://localhost:4200{{path}}</p>
</div>

<router-outlet></router-outlet>

<igx-bottom-nav #tabs1>
    <igx-bottom-nav-item
        routerLinkActive
        #rla1="routerLinkActive"
        [selected]="rla1.isActive"
        >
        <igx-bottom-nav-header routerLink="tabbar-view1">
            <igx-icon igxBottomNavHeaderIcon>phone</igx-icon>
        </igx-bottom-nav-header></igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla2="routerLinkActive"
        [selected]="rla2.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view2">
            <igx-icon igxBottomNavHeaderIcon>supervisor_account</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla3="routerLinkActive"
        [selected]="rla3.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view3">
            <igx-icon igxBottomNavHeaderIcon>format_list_bulleted</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```
```scss
:host {
    .url {
        padding: 12px;

        &__title {
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
        }

        &__path {
            margin: 0;
            padding: 0;
            font-size: 13px;
        }
    }

    ::ng-deep p {
        margin: 0;
        padding: 12px;
    }
}
```


## Styles

### Bottom Nav Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table>
    <thead>
        <tr>
        <th>Primary Property</th>
        <th>Dependent Property</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><strong>$background</strong></td>
        <td>$label-color</td>
        <td>The label color used in idle state.</td>
        </tr>
        <tr>
        <td><strong>$label-color</strong></td>
        <td>$icon-color</td>
        <td>The icon color used in idle state.</td>
        </tr>
        <tr>
        <td></td>
        <td>$label-disabled-color</td>
        <td>The disabled color of the label.</td>
        </tr>
        <tr>
        <td><strong>$icon-color</strong></td>
        <td>$label-color</td>
        <td>The label color used in idle state.</td>
        </tr>
        <tr>
        <td><strong>$label-disabled-color</strong></td>
        <td>$icon-disabled-color</td>
        <td>The disabled color of the icon.</td>
        </tr>
        <tr>
        <td><strong>$icon-disabled-color</strong></td>
        <td>$label-disabled-color</td>
        <td>The disabled color of the label.</td>
        </tr>
        <tr>
        <td><strong>$label-selected-color</strong></td>
        <td>$icon-selected-color</td>
        <td>The icon color used in selected state.</td>
        </tr>
        <tr>
        <td><strong>$icon-selected-color</strong></td>
        <td>$label-selected-color</td>
        <td>The label color used in selected state.</td>
        </tr>
    </tbody>
</table>

To get started with styling the tabs, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`bottom-nav-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-bottom-nav-theme) and accepts various parameters that allow us to style the tab groups.

```scss
$dark-bottom-nav: bottom-nav-theme(
  $background: #292826,
  $icon-selected-color: #f4d45c
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

If we take a look at the [`bottom-nav-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-bottom-nav-theme), we will notice that there are even more parameters available to us in order to style our bottom navigation component!

> [!NOTE]
> In order to style any additional components that are used as part of an item's content, an additional theme should be created that is specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
:host {
    @include tokens($dark-bottom-nav);
}
```

### Demo


```typescript
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from "@angular/core";
import { IgxBottomNavComponent, IgxBottomNavContentComponent, IgxBottomNavHeaderComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: "app-tabbar-style",
    styleUrls: ["./tabbar-style.component.scss"],
    templateUrl: "./tabbar-style.component.html",
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavContentComponent]
})
export class TabbarStyleComponent {
    public songsList = [
        { title: "Havana", artist: "Camila Cabello" },
        { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
        { title: "New Rules", artist: "Dua Lipa" },
        { title: "Wolves", artist: "Selena Gomez & Marshmello" }
        ];

    public moviesList = [
    { title: "Logan", genre: "Action, Drama, Sci-Fi" },
    { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
    { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
    { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
    ];

    public booksList = [
    { title: "Wonder", author: "R. J. Palacio" },
    { title: "Milk and Honey", author: "Rupi Kaur" },
    { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
    { title: "The Getaway", author: "Selena Gomez & Marshmello" }
    ];

    constructor() { }
}
```
```html
<igx-bottom-nav>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>library_music</igx-icon>
      <span igxBottomNavHeaderLabel>Songs</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (song of songsList; track song) {
        <div class="item">
          <span class="item-line1">{{song.title}}</span><br/>
          <span class="item-line2">{{song.artist}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
      <span igxBottomNavHeaderLabel>Movies</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (movie of moviesList; track movie) {
        <div class="item">
          <span class="item-line1">{{movie.title}}</span><br/>
          <span class="item-line2">{{movie.genre}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
  <igx-bottom-nav-item>
    <igx-bottom-nav-header>
      <igx-icon igxBottomNavHeaderIcon>library_books</igx-icon>
      <span igxBottomNavHeaderLabel>Books</span>
    </igx-bottom-nav-header>
    <igx-bottom-nav-content>
      @for (book of booksList; track book) {
        <div class="item">
          <span class="item-line1">{{book.title}}</span><br/>
          <span class="item-line2">{{book.author}}</span>
        </div>
      }
    </igx-bottom-nav-content>
  </igx-bottom-nav-item>
</igx-bottom-nav>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$dark-bottom-nav: bottom-nav-theme(
  $background: #011627,
  $icon-selected-color: #F4D45C
);

:host {
  @include tokens($dark-bottom-nav);
}
```

### Styling with Tailwind

You can style the bottom navigation using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the Tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-bottom-nav`, `dark-bottom-nav`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxBottomNav Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-bottom-nav-theme). The syntax is as follows:

```html
<igx-bottom-nav
    class="!light-bottom-nav
    ![--background:#011627]
    ![--icon-selected-color:#FF8040] 
    ![--label-selected-color:#FF8040]">
    ...
</igx-bottom-nav>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your bottom nav should look like this:

<div class="sample-container loading" style="height:340px">
    <iframe id="tabbar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-tailwind-style' style="height: 350px; width: 300px; border: 1px solid #D4D4D4;" seamless class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxBottomNavComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html)
- [IgxBottomNavComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-bottom-nav-theme)
- [IgxIconComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
