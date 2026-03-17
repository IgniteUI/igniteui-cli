---
title: Angular Tabs Component | Ignite UI for Angular | MIT license
_description: The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen. Try it now.
_keywords: Angular Tabs component, Angular Tabs control, Angular Tabs, Angular Tabbar Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Tabs
---

# Angular Tabs Component Overview

Ignite UI for Angular Tabs is a full-featured user interface component that has the primary purpose to organize and group related content in a single tabbed view, thus saving space and making content more comprehensible. It packs different features like animations, templating, customization options, and others.

Tabs in Angular are extremely useful when you’re building a web page with plenty of content that must be fitted into categories and displayed in a concise and space-efficient way.

<p class="highlight">

The [`igx-tabs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html) component in Ignite UI for Angular is used to organize or switch between similar data sets. It functions as a wrapper for [`igx-tab-item`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabitemcomponent.html) which respectively represent the container for the data and the tab header. The Angular Tabs Component places tabs at the top and allows scrolling when there are multiple tab items on the screen.

</p>

## Angular Tabs Example

This is a basic example of Angular Nested Tabs where we have one tab within another where only one view can be seen at the time. Using nested tabs in Angular, we can display information in a better, structured way.

```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabs-sample-3',
    styleUrls: ['./tabs-sample-3.component.scss'],
    templateUrl: './tabs-sample-3.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample3Component { }
```
```html
<igx-tabs>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>library_music</igx-icon>
            <span igxTabHeaderLabel>Albums</span>
        </igx-tab-header>
        <igx-tab-content>
            Albums
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>favorite</igx-icon>
            <span igxTabHeaderLabel>Favorite</span>
        </igx-tab-header>
        <igx-tab-content>
            Favorite
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>info</igx-icon>
            <span igxTabHeaderLabel>Details</span>
        </igx-tab-header>
        <igx-tab-content>
            Details
        </igx-tab-content>
    </igx-tab-item>
</igx-tabs>
```
```scss
igx-tab-content {
    padding: 8px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tabs

To get started with the Ignite UI for Angular Tabs component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxTabsModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular/tabs';
// import { IgxTabsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTabsComponent` as a standalone dependency, or use the [`IGX_TABS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/tabs/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TABS_DIRECTIVES } from 'igniteui-angular/tabs';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-tabs>
      <igx-tab-item>
        <igx-tab-header>
          <span igxTabHeaderLabel>Tab 1</span>
        </igx-tab-header>
        <igx-tab-content>
          This is Tab 1 content.
        </igx-tab-content>
      </igx-tab-item>
      <igx-tab-item>
        <igx-tab-header>
          <span igxTabHeaderLabel>Tab 2</span>
        </igx-tab-header>
        <igx-tab-content>
          This is Tab 2 content.
        </igx-tab-content>
      </igx-tab-item>
    </igx-tabs>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TABS_DIRECTIVES]
    /* or imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabContentComponent, IgxTabHeaderLabelDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Tabs module or directives imported, you can start using the `igx-tabs` component.

## Using the Angular Tabs

We set the Angular Tabs header by providing content to `igx-tab-header`. To set the tab's name we simply add a span with `igxTabHeaderLabel` directive. Any content that will appear as a tab item's content should be added between `igx-tab-content` tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 1</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 1 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 2</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 2 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 3</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 3 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 4</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 4 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 5</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 5 content.
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

If the sample is configured properly, the final result should look like that:


```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-sample-1',
    styleUrls: ['./tabs-sample-1.component.scss'],
    templateUrl: './tabs-sample-1.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample1Component { }
```
```html
<igx-tabs>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Tab 1</span>
        </igx-tab-header>
        <igx-tab-content>Tab 1 Content</igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Tab 2</span>
        </igx-tab-header>
        <igx-tab-content>Tab 2 Content</igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Tab 3</span>
        </igx-tab-header>
        <igx-tab-content>Tab 3 Content</igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Tab 4</span>
        </igx-tab-header>
        <igx-tab-content>Tab 4 Content</igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Tab 5</span>
        </igx-tab-header>
        <igx-tab-content>Tab 5 Content</igx-tab-content>
    </igx-tab-item>
</igx-tabs>
```
```scss
igx-tab-content {
    padding: 8px;
}
```


<div class="divider"></div>

## Angular Tabs Alignment

`IgxTabs` [`tabAlignment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#tabAlignment) input property controls how tabs are positioned and arranged. It accepts four different values - start, center, end and justify.

- **Start** (default): the width of the tab header depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container left side.
- **Center**: the width of the tab header depends on the content and occupies the tabs container center. If the space is not enough to fit all items, scroll buttons are displayed.
- **End**: the width of the tab header depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container right side.
- **Justify**: all tab headers are equal in width and fully fit the tabs container. If the space is not enough to fit all items, scroll buttons are displayed.


Sample below demonstrates how tabs get aligned when switching between `tabAlignment` property values.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-alignment',
    templateUrl: './tabs-alignment.component.html',
    imports: [IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsAlignmentComponent {
    public tabAlignment = 'start';
    public tabAlignments = [
        { label: 'start', selected: this.tabAlignment === 'start', togglable: true },
        { label: 'center', selected: this.tabAlignment === 'center', togglable: true },
        { label: 'end', selected: this.tabAlignment === 'end', togglable: true },
        { label: 'justify', selected: this.tabAlignment === 'justify', togglable: true }
    ];

    changeAlignment(event) {
        this.tabAlignment = this.tabAlignments[event.index].label;
    }
}
```
```html
<igx-buttongroup [values]="tabAlignments" (selected)="changeAlignment($event)">
</igx-buttongroup>

<igx-tabs [tabAlignment]="tabAlignment">
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Home</span>
        </igx-tab-header>
        <igx-tab-content>
            Home Content.
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>Recent</span>
        </igx-tab-header>
        <igx-tab-content>
            Recent contact list.
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <span igxTabHeaderLabel>More</span>
        </igx-tab-header>
        <igx-tab-content>
            More detailed contact information.
        </igx-tab-content>
    </igx-tab-item>
</igx-tabs>
```


<div class="divider"></div>

## Customizing Angular Tabs

Let's modify the tabs and make them more appealing by including icons using the `igxTabHeaderIcon` directive. The `igx-tabs` component is compatible with the Material Design
[**Icons**](https://material.io/icons/) so it will be very easy to adopt them in your application.
> [!NOTE]
> If you haven't used the `igx-icon` in your application so far, please make sure to import the `IgxIconModule` in the **app.module.ts** before proceeding.

First, add the Material Icons in your 'styles.scss' file in the main application folder. Next, add `igx-icon` with `igxTabHeaderIcon` directive set, as a child of `igx-tab-header`.

```css
// styles.scss

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>library_music</igx-icon>
        <span igxTabHeaderLabel>Albums</span>
    </igx-tab-header>
    <igx-tab-content>
        Albums
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>favorite</igx-icon>
        <span igxTabHeaderLabel>Favorite</span>
    </igx-tab-header>
    <igx-tab-content>
        Favorite
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>info</igx-icon>
        <span igxTabHeaderLabel>Details</span>
    </igx-tab-header>
    <igx-tab-content>
        Details
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>

```

If the sample is configured properly, the tabs should look like the following example:


```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabs-sample-3',
    styleUrls: ['./tabs-sample-3.component.scss'],
    templateUrl: './tabs-sample-3.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsSample3Component { }
```
```html
<igx-tabs>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>library_music</igx-icon>
            <span igxTabHeaderLabel>Albums</span>
        </igx-tab-header>
        <igx-tab-content>
            Albums
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>favorite</igx-icon>
            <span igxTabHeaderLabel>Favorite</span>
        </igx-tab-header>
        <igx-tab-content>
            Favorite
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>info</igx-icon>
            <span igxTabHeaderLabel>Details</span>
        </igx-tab-header>
        <igx-tab-content>
            Details
        </igx-tab-content>
    </igx-tab-item>
</igx-tabs>
```
```scss
igx-tab-content {
    padding: 8px;
}
```

<div class="divider--half"></div>

If setting the labels and icons is not enough, you can also provide your own custom content directly between `igx-tab-header` tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <!-- your custom tab content goes here -->
      <div>
        <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
             width="80px" height="40px">
      </div>
    </igx-tab-header>
    <igx-tab-content>
      <h1>IgniteUI Rocks!</h1>
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

You can also add you own custom tab header's prefix and suffix simply by using `igxPrefix` and `igxSuffix` directives. The sample below demonstrates how to add a tab with custom header content and prefix/suffix.

```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-tabs-header-prefix-suffix',
    templateUrl: './tabs-header-prefix-suffix.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent, IgxTabContentComponent]
})
export class TabsHeaderPrefixSuffixComponent {
    public tabs = [{
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab1',
        content: 'Content1'
    }, {
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab2',
        content: 'Content2'
    }, {
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab3',
        content: 'Content3'
    }];

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
```

<div class="divider--half"></div>

## Integration With Router Outlet Container

Although the `igx-tabs` component is meant to be used as a list of tabs with content specified for each tab item, there might be cases in which you need to define tab items where the content is separate from the tab content.

When defining tab items you have the ability to apply directives to them. For example, you may use this functionality to achieve navigation between views using the Angular Router. The following example will demonstrate how to configure the `igx-tabs` component to switch between three components in a single router-outlet.

To start we need a component to hold our `igx-tabs` component and three view components with some content for demonstration purposes. For simplicity, the view components have very short templates.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-routing',
    styleUrls: ['tabs-routing.component.scss'],
    templateUrl: 'tabs-routing.component.html'
})
export class TabsRoutingComponent { }

@Component({
    template: '<p>Tab 1 Content</p>'
})
export class TabsRoutingView1Component { }

@Component({
    template: '<p>Tab 2 Content</p>'
})
export class TabsRoutingView2Component { }

@Component({
    template: '<p>Tab 3 Content</p>'
})
export class TabsRoutingView3Component { }
```

Next, we create the appropriate navigation mappings in the `app-routing.module.ts` file:

```typescript
import { RouterModule, Routes } from '@angular/router';

import {
    TabsRoutingComponent,
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component
} from './tabs-routing.component';

...

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tabs-routing'
  },
  {
    path: 'tabs-routing',
    component: TabsRoutingComponent,
    children: [
        { path: 'view1', component: TabsRoutingView1Component },
        { path: 'view2', component: TabsRoutingView2Component },
        { path: 'view3', component: TabsRoutingView3Component },
      ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
```

Now that we have all navigation routes set up, we need to declare the `igx-tabs` component and configure it for routing. Make sure to add a router-outlet for rendering the view components.

```html
<!-- tabs-routing.component.html -->

<igx-tabs #tabs1>
  <igx-tab-item
      routerLinkActive
      #rla1="routerLinkActive"
      [selected]="rla1.isActive"
  >
      <igx-tab-header routerLink="view1">
          <span igxTabHeaderLabel>Tab 1</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla2="routerLinkActive"
      [selected]="rla2.isActive"
  >
      <igx-tab-header routerLink="view2">
          <span igxTabHeaderLabel>Tab 2</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla3="routerLinkActive"
      [selected]="rla3.isActive"
  >
      <igx-tab-header routerLink="view3">
          <span igxTabHeaderLabel>Tab 3</span>
      </igx-tab-header>
  </igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

The above code creates an `igx-tabs` component with three tab items. Each tab item's header has the `RouterLink` directive applied, which is used to specify the routing link used for the navigation. If any of the links becomes active, the corresponding tab item will have its `selected` property set because of the binding to the `RouterLinkActive` directive's `isActive` property. This way the selected tab item will always be synchronized with the current url path.


```typescript
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-sample-4',
    styleUrls: ['./tabs-sample-4.component.scss'],
    templateUrl: './tabs-sample-4.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, RouterLinkActive, IgxTabHeaderComponent, RouterLink, IgxTabHeaderLabelDirective, RouterOutlet]
})
export class TabsSample4Component implements OnInit {
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

<igx-tabs #tabs1>
    <igx-tab-item
        routerLinkActive
        #rla1="routerLinkActive"
        [selected]="rla1.isActive"
    >
        <igx-tab-header routerLink="view1">
            <span igxTabHeaderLabel>Tab 1</span>
        </igx-tab-header>
    </igx-tab-item>
    <igx-tab-item
        routerLinkActive
        #rla2="routerLinkActive"
        [selected]="rla2.isActive"
    >
        <igx-tab-header routerLink="view2">
            <span igxTabHeaderLabel>Tab 2</span>
        </igx-tab-header>
    </igx-tab-item>
    <igx-tab-item
        routerLinkActive
        #rla3="routerLinkActive"
        [selected]="rla3.isActive"
    >
        <igx-tab-header routerLink="view3">
            <span igxTabHeaderLabel>Tab 3</span>
        </igx-tab-header>
    </igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
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
        padding: 8px;
    }
}
```

> [!NOTE]
> Please note that the routerLink directive is set to the `igx-tab-header`, not directly to the `igx-tab-item`.


## Styles

### Tabs Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<div class="theme-switcher-wrapper">
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <div class="theme-table material">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-background</strong></summary></details></td>
            <td>$item-active-background</td>
            <td>The color used for the active/focused tab background.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-text-color</td><td>The color used for the tab text color.</td></tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$item-hover-background</td><td>The background used for the tabs on hover.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
          <tr class="dependent"><td></td><td>$button-background</td><td>The color used for the button background.</td></tr>
          <tr class="dependent"><td></td><td>$button-hover-background</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-active-background</strong></summary></details></td>
            <td>$item-active-icon-color</td>
            <td>The color used for the active tab icon.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text.</td></tr>
          <tr class="dependent"><td></td><td>$tab-ripple-color</td><td>The color used for the button background.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-text-color</strong></summary></details></td>
            <td>$item-hover-color</td>
            <td>The text color used for the tabs on hover if no `$item-hover-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon if no `$item-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text if no `$item-active-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator if no `$item-background` is provided</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-icon-color</strong></summary></details></td>
            <td>$item-hover-icon-color</td>
            <td>The color used for the tab icon on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-icon-color</td><td>The color used for the active tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The color used for the button background on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-color</td><td>The color used for the button icon/text color.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-color</strong></summary></details></td>
            <td>$button-disabled-color</td>
            <td>The color used for the disabled button icon/text.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-ripple-color</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-color</td>
            <td>The color used for the button icon/text color on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-background</strong></summary></details></td>
            <td>$item-active-background</td>
            <td>The color used for the active/focused tab background.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-text-color</td><td>The color used for the tab text color.</td></tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$item-hover-background</td><td>The background used for the tabs on hover.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
          <tr class="dependent"><td></td><td>$button-background</td><td>The color used for the button background.</td></tr>
          <tr class="dependent"><td></td><td>$button-hover-background</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-active-background</strong></summary></details></td>
            <td>$item-active-icon-color</td>
            <td>The color used for the active tab icon.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text.</td></tr>
          <tr class="dependent"><td></td><td>$tab-ripple-color</td><td>The ripple color for the tab interaction.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-text-color</strong></summary></details></td>
            <td>$item-hover-color</td>
            <td>The text color used for the tabs on hover if no `$item-hover-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon if no `$item-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text if no `$item-active-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator if no `$item-background` is provided</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-icon-color</strong></summary></details></td>
            <td>$item-hover-icon-color</td>
            <td>The color used for the tab icon on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-icon-color</td><td>The color used for the active tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The color used for the button background on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-color</td><td>The color used for the button icon/text color.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-color</strong></summary></details></td>
            <td>$button-disabled-color</td>
            <td>The color used for the disabled button icon/text.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-ripple-color</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-color</td>
            <td>The color used for the button icon/text color on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-background</strong></summary></details></td>
            <td>$item-active-background</td>
            <td>The color used for the active/focused tab background.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-text-color</td><td>The color used for the tab text color.</td></tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$item-hover-background</td><td>The background used for the tabs on hover.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
          <tr class="dependent"><td></td><td>$button-background</td><td>The color used for the button background.</td></tr>
          <tr class="dependent"><td></td><td>$button-hover-background</td><td>The color used for the button background on hover.</td></tr>
          <tr class="dependent"><td></td><td>$border-color</td><td>The border color of the tabs.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-active-background</strong></summary></details></td>
            <td>$item-active-icon-color</td>
            <td>The color used for the active tab icon.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text.</td></tr>
          <tr class="dependent"><td></td><td>$tab-ripple-color</td><td>The color used for the button background.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-text-color</strong></summary></details></td>
            <td>$item-hover-color</td>
            <td>The text color used for the tabs on hover if no `$item-hover-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon if no `$item-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$button-color</td><td>The color used for the button icon/text color if no `$button-background` is provided (non-material)</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-icon-color</strong></summary></details></td>
            <td>$item-hover-icon-color</td>
            <td>The color used for the tab icon on hover if no `$item-hover-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-text-color</td><td>The color used for the tab text color if no `$item-background` is provided</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The color used for the button background on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-color</td><td>The color used for the button icon/text color.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-color</strong></summary></details></td>
            <td>$button-hover-color</td>
            <td>The color used for the button icon/text color on hover if no `$button-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-disabled-color</td><td>The color used for the disabled button icon/text.</td></tr>
          <tr class="dependent"><td></td><td>$button-ripple-color</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-color</td>
            <td>The color used for the button icon/text color on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-background</strong></summary></details></td>
            <td>$item-active-background</td>
            <td>The color used for the active/focused tab background.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-text-color</td><td>The color used for the tab text color.</td></tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$item-hover-background</td><td>The background used for the tabs on hover.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
          <tr class="dependent"><td></td><td>$button-background</td><td>The color used for the button background.</td></tr>
          <tr class="dependent"><td></td><td>$button-hover-background</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-active-background</strong></summary></details></td>
            <td>$item-active-icon-color</td>
            <td>The color used for the active tab icon.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text.</td></tr>
          <tr class="dependent"><td></td><td>$tab-ripple-color</td><td>The color used for the button background.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-text-color</strong></summary></details></td>
            <td>$item-hover-color</td>
            <td>The text color used for the tabs on hover if no `$item-hover-background` is provided</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-icon-color</td><td>The color used for the tab icon if no `$item-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$item-active-color</td><td>The color used for the active tabs text if no `$item-active-background` is provided</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator if no `$item-background` is provided</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$item-icon-color</strong></summary></details></td>
            <td>$item-hover-icon-color</td>
            <td>The color used for the tab icon on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$item-active-icon-color</td><td>The color used for the active tab icon.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-color</td><td>The color used for the active tab indicator.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The color used for the button background on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-color</td><td>The color used for the button icon/text color.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-color</strong></summary></details></td>
            <td>$button-disabled-color</td>
            <td>The color used for the disabled button icon/text.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-ripple-color</td><td>The color used for the button background on hover.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-color</td>
            <td>The color used for the button icon/text color on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


To get started with styling the tabs, we need to import the theming module, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`tabs-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tabs-theme). By passing just a few base parameters—such as `$item-background` and `$item-active-color`—you can style your tabs with minimal effort. The theme will automatically generate all necessary background and foreground colors for the various interaction states.

You can, of course, override any additional parameters to further fine-tune the appearance.

```scss
$dark-tabs: tabs-theme(
  $item-background: #292826,
  $item-active-color: #F4D45C,
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

If we take a look at the [`tabs-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tabs-theme), we will notice that there are even more properties available to us in order to style our tabs.

> [!NOTE]
> In order to style any component used as part of a tab content, additional themes should be created specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
:host {
  @include tokens($dark-tabs);
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabs-style',
    styleUrls: ['./tabs-style.component.scss'],
    templateUrl: './tabs-style.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxIconComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsStyleComponent { }
```
```html
<igx-tabs>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>library_music</igx-icon>
            <span igxTabHeaderLabel>Albums</span>
        </igx-tab-header>
        <igx-tab-content>
            Albums
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>favorite</igx-icon>
            <span igxTabHeaderLabel>Favorite</span>
        </igx-tab-header>
        <igx-tab-content>
            Favorite
        </igx-tab-content>
    </igx-tab-item>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>info</igx-icon>
            <span igxTabHeaderLabel>Details</span>
        </igx-tab-header>
        <igx-tab-content>
            Details
        </igx-tab-content>
    </igx-tab-item>
</igx-tabs>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$dark-tabs: tabs-theme(
  $item-background: #292826,
  $item-active-color: #F4D45C,
);

:host {
  @include tokens($dark-tabs);
}
```

### Styling with Tailwind

You can style the tabs using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-tabs`, `dark-tabs`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxTabs Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tabs-theme). The syntax is as follows:

```html
<igx-tabs
  class="!light-tabs
  ![--item-background:#011627]
  ![--item-active-icon-color:#FF8040]
  ![--item-active-color:#FF8040]">
  ...
</igx-tabs>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your tabs should look like this:

<div class="sample-container loading" style="height:200px">
    <iframe id="tabs-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API References

<div class="divider"></div>

- [IgxIconComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)
- [IgxNavbarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnavbarcomponent.html)
- [IgxTabsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html)
- [IgxTabsComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tabs-theme)
- [IgxTabItemComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabitemcomponent.html)
- [IgxTabHeaderComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabheadercomponent.html)
- [IgxTabContentComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabcontentcomponent.html)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)
- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
