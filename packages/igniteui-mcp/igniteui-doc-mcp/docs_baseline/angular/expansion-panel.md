---
title: Angular Expansion Panel – Ignite UI for Angular - MIT license 
_description: Use our Angular expansion panel which provides an easily configurable expandable component with two states - collapsed and expanded. Try it now.
_keywords: angular expansion panel, angular expansion panel component, angular UI components, igniteui for angular, infragistics
_license: MIT
_tocName: Expansion Panel
---

# Angular Expansion Panel Component Overview

Ignite UI for Angular provides developers with one of the most useful and easy-to-use layout components - Expansion Panel. This feature-rich component is used to create an expandable/collapsible detailed summary view. The content can include Angular Expansion Panel animation, text, icons, header, action bar, and other elements.
<p class="highlight">

Ignite UI Expansion Panel [igx-expansion-panel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) is a lightweight Angular accordion component which can be rendered in two states - collapsed or expanded. The Expansion Panel in Angular can be toggled using mouse click, or keyboard interactions. You can also combine multiple Angular Expansion Panels into Angular accordion.
</p>

## Angular Expansion Panel Example

We've created this simple Angular Expansion Panel Example using Ignite UI Angular. See how the sample works.

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-1',
    styleUrls: ['./expansion-sample-1.component.scss'],
    templateUrl: './expansion-sample-1.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class ExpansionPanelSample1Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
}
```
```html
<igx-expansion-panel>
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            Golden Retriever
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
    </igx-expansion-panel-body>
</igx-expansion-panel>
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Expansion Panel

To get started with the Ignite UI for Angular Drop Down component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxExpansionPanelModule` in your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxExpansionPanelModule } from 'igniteui-angular/expansion-panel';
// import { IgxExpansionPanelModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxExpansionPanelModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxExpansionPanelComponent` as a standalone dependency, or use the [`IGX_EXPANSION_PANEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/expansion-panel/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular/expansion-panel';
// import { IGX_EXPANSION_PANEL_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>
            Golden Retriever
            </igx-expansion-panel-title>
            <igx-expansion-panel-description>
            Medium-large gun dog
            </igx-expansion-panel-description>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, 
            such as ducks and upland game birds, during hunting and shooting parties. 
            The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. 
            Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_EXPANSION_PANEL_DIRECTIVES]
    /* or imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Expansion Panel module or directives imported, you can start using the `igx-expansion-panel` component.

## Using the Angular Expansion Panel

The table below shows all the available markup parts for the Angular Expansion Panel.

| Tag Name                          | Description                                                                                                            |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| `igx-expansion-panel`             | The component host - stores header and body.                                                                           |
| `igx-expansion-panel-header`      | Stores the component header. This is always visible. Stores title and description as well as any additional content    |
| `igx-expansion-panel-title`       | Use it to set expansion panel title.                                                                                   |
| `igx-expansion-panel-description` | It can be used to provide a short summary. The description will always appear after the title (if the title is set).   |
| `igx-expansion-panel-icon`        | Use it to change the default expand/collapse icon.                                                                     |
| `igx-expansion-panel-body`        | This is the expandable container and it's only visible when the panel is expanded.                                     |


## Properties Binding and Events

We can add some logic to our component to make it show/hide the `igx-expansion-panel-description` depending on the current state of the panel.  
We can do this by binding the description to the control [`collapsed`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html#collapsed) property:

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular/expansion-panel';
// import { IgxExpansionPanelComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
}
```

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        Golden Retriever
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```

The following code sample will show the short description only when the component is in its collapsed state.
If we want to add more complex functionality depending on the component state, we could also bind to an event emitter.

```typescript
// in expansion-panel.component.ts

@Component({...})
export class ExpansionPanelComponent {
    ...
    public handleExpansion(args: {event: Event}): void {
        ... // Some functionality
    }
}
```

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel (onExpanded)="handleExpansion($event)" (contentCollapsed)="handleCollapse($event)"></igx-expansion-panel>
```

Below we have the results:

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxToastComponent } from 'igniteui-angular/toast';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-2',
    styleUrls: ['./expansion-sample-2.component.scss'],
    templateUrl: './expansion-sample-2.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxToastComponent]
})
export class ExpansionPanelSample2Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public eventToast: IgxToastComponent;
    public readMore = 'https://en.wikipedia.org/wiki/Hummingbird';
    public handleExpansion(evt?: {event: Event}) {
        this.eventToast.close();
        console.log('Expanded event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
        this.eventToast.open('Expanded Event Fired!');
    }

    public handleCollapse(evt?: {event: Event}) {
        this.eventToast.close();
        console.log('Collapsed event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
        this.eventToast.open('Collapsed Event Fired!');
    }
}
```
```html
<igx-expansion-panel (contentExpanded)="handleExpansion($event)" (contentCollapsed)="handleCollapse($event)">
  <igx-expansion-panel-header>
    <igx-expansion-panel-title>
      Golden Retriever
    </igx-expansion-panel-title>
    @if (panel.collapsed) {
      <igx-expansion-panel-description>
        Medium-large gun dog
      </igx-expansion-panel-description>
    }
  </igx-expansion-panel-header>
  <igx-expansion-panel-body>
    The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
  </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-toast [displayTime]="1500" #eventToast></igx-toast>
```


## Component Customization

The [`IgxExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) allows for easy customization of [the header](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html).
Configuring the position of the header icon can be done through the [`iconPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html#iconPosition) input on the `igx-expansion-panel-header`. The possible options for the icon position are **left**, **right** and **none**. The next code sample demonstrates how to configure the component's button to go on the _right_ side.

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```

>[!NOTE]
> The [`iconPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html#iconPosition) property works with `RTL` - e.g. an icon set to show up in **right** will show in the leftmost part of the header when RTL is on.

The default icon for the toggle state of the control can be templated.
We can do that by passing content in an `igx-expansion-panel-icon` tag:

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'">
        ...
        <igx-expansion-panel-icon>
            <span class="example-icon" *ngIf="panel.collapsed">Show More</span>
            <span class="example-icon" *ngIf="!panel.collapsed">Show Less</span>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>   
    ...
</igx-expansion-panel>
```

Our Angular Expansion Panel will now render "Show More" when the panel is collapsed and "Show Less" once it's fully expanded.

The `IgxExpansionPanel` control allows all sorts of content to be added inside of the `igx-expansion-panel-body`. It can render [`IgxGrid`](grid/grid.md)s, [`IgxCombo`](combo.md), charts and even other expansion panels!

For the sake of simplicity let's add some basic markup to the body of our expansion panel.

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div class="example-content">
        <img [src]="imgSource" alt="dog-image">
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        <a igxButton="outlined" target="_blank" [href]="readMore">Read more</a>
    </div>
</igx-expansion-panel-body>
...
```

Lets see the result from all the above changes:

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelIconDirective, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxButtonDirective } from 'igniteui-angular/directives';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-3',
    styleUrls: ['./expansion-sample-3.component.scss'],
    templateUrl: './expansion-sample-3.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelIconDirective, IgxExpansionPanelBodyComponent, IgxButtonDirective]
})

export class ExpansionPanelSample3Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
    public imgSource = 'https://i.ibb.co/6ZdY7cn/Untitled-design-3.png';
    public readMore = 'https://en.wikipedia.org/wiki/Golden_Retriever';
}
```
```html
<div class="sample-holder">
  <igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header [iconPosition]="'right'">
      <igx-expansion-panel-title>
        Golden Retriever
      </igx-expansion-panel-title>
      <igx-expansion-panel-description>
        Medium-large gun dog
      </igx-expansion-panel-description>
      <igx-expansion-panel-icon>
        @if (panel.collapsed) {
          <span class="example-icon">Show more</span>
        }
        @if (!panel.collapsed) {
          <span class="example-icon">Show Less</span>
        }
      </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <div class="example-content">
        <img height="100" [src]="imgSource" alt="">
        <span>
          The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        </span>
        <a igxButton="outlined" target="_blank" [href]="readMore">Read more</a>
      </div>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
</div>
```
```scss
.sample-holder {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
}

.my-expansion-panel {
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    border: 1px solid rgba(171, 171, 171, 0.3)
}

.example-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 1px solid rgba(171, 171, 171, 0.3);
    span {
        display: block;
        margin-bottom: 16px;
    }
}

a {
    text-decoration: none;
}

img {
    width: 100%;
    margin-bottom: 8px;
}
```


## Styling

### Expansion Panel Theme Property Map

Changing the `$header-background` and `$body-background` properties automatically updates the following dependent properties:

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
            <td><details><summary><strong>$header-background</strong></summary></details></td>
            <td>$header-title-color</td>
            <td>The panel header title text color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$header-icon-color</td>
            <td>The panel header icon color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$header-description-color</td>
            <td>The panel header description text color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$header-focus-background</td>
            <td>The panel header focus background color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$disabled-text-color</td>
            <td>The panel disabled text color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$disabled-description-color</td>
            <td>The panel disabled header description text color.</td>
        </tr>
        <tr class="primary">
            <td><strong>$body-background</strong></td>
            <td>$body-color</td>
            <td>The panel body text color.</td>
        </tr>
    </tbody>
</table>

### Palettes & Colors

First we create a custom palette which can later be passed to our component:

```scss
// In real life, this should be in our main sass file so we can share the palette between all components. 
// In our case, it's in the component SCSS file "expansion-styling.component.scss".

@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

// Add your brand colors.
$my-primary-color:#353a4b;
$my-secondary-color: #ffd351;
$my-surface-color: #efefef;

// Create custom palette.
$my-color-palette: palette(
  $primary: $my-primary-color,
  $secondary: $my-secondary-color,
  $surface: $my-surface-color
);
```

### Creating the Component Theme

Now let's create our component theme and pass the `$my-color-palette` palette from the above sniped.

```scss
// In expansion-styling.component.scss
// Create expansion panel theme.
$custom-panel-theme: expansion-panel-theme(
  // Styling parameters.
  $header-background: color($my-color-palette, "primary", 700),
  $header-focus-background: color($my-color-palette, "primary", 700),
  $header-title-color: color($my-color-palette, "secondary"),
  $header-icon-color: color($my-color-palette, "secondary"),
  $body-background: color($my-color-palette, "primary", 700),
  $body-color: color($my-color-palette, "secondary", 100),
  $border-radius: .5
);
```

If we prefer instead of creating a palette, we can assign the colors directly to the expansion-panel-theme function as arguments. If the `title-color`, `icon-color`, or other foreground properties are not explicitly provided, they will be automatically assigned to either black or white - whichever offers better contrast with the background.

```scss
$custom-panel-theme: expansion-panel-theme(
  $header-background: #353a4b,
  $header-focus-background: #353a4b,
  $header-title-color: #ffd351,
  $header-icon-color: #ffd351,
  ...
);
```

>[!NOTE]
> To see all the available parameters for styling trough the [`theming`](themes/sass/component-themes.md) engine check the [`API documentation`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-expansion-panel-theme)

### Applying the Component Theme

Now to apply the component theme all that's left is to include `css-vars` mixin and pass the `$custom-panel-theme` map.

```scss
// In expansion-styling.component.scss
@include css-vars($custom-panel-theme);
```

To find out more on how you can use Ignite UI theming engine [`click here`](themes/sass/component-themes.md)

### Demo

```typescript
import {Component} from '@angular/core';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-styling',
    styleUrls: ['./expansion-styling.component.scss'],
    templateUrl: './expansion-styling.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxButtonDirective]
})

export class ExpansionPanelStylingComponent {
    public imgSource = 'https://i.ibb.co/6ZdY7cn/Untitled-design-3.png';
    public readMore = 'https://en.wikipedia.org/wiki/Golden_Retriever';
}
```
```html
<div class="sample-holder">
    <igx-expansion-panel class="my-expansion-panel">
        <igx-expansion-panel-header [iconPosition]="'right'">
            <igx-expansion-panel-title>
                Golden Retriever
            </igx-expansion-panel-title>
            <igx-expansion-panel-description>
                Medium-large gun dog
            </igx-expansion-panel-description>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            <div class="example-content">
                <img height="100" [src]="imgSource" alt="">
                <span>
                    The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
                </span>
                <a igxButton="contained" target="_blank" [href]="readMore">Read more</a>
            </div>
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// Create expansion panel theme
$custom-panel-theme: expansion-panel-theme(
  $header-background: #353a4b,
  $body-background: #353a4b,
  $header-title-color: #ffd351,
  $header-icon-color: #ffd351,
);

// Apply the custom themes to the components mixins.
@include css-vars($custom-panel-theme);
```

### Styling with Tailwind

You can style the expansion panel using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-expansion-panel`, `dark-expansion-panel`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [expansion-panel-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-expansion-panel-theme). The syntax is as follows:

```html
<igx-expansion-panel
  class="!light-expansion-panel
  ![--header-background:#4F6A5A]
  ![--body-background:#A3C7B2]"
>
  ...
</igx-expansion-panel>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your expansion panel should look like this:

<div class="sample-container loading" style="height:440px">
    <iframe id="expansion-panel-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/expansion-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Angular Expansion Panel Animations

### Using specific animation

It is possible to use other than default animation when expanding and collapsing the component.
Assuming the igxExpansionPanel is already imported in `app.module.ts` as previously described, you can create a custom animation setting object and set it to be used in the Ignite UI for Angular Expansion Panel. The approach requires the [`useAnimation`](https://angular.io/api/animations/useAnimation) method and the specific animations to be used so we start importing these and defining the animation settings like:

```typescript
// in expansion-panel.component.ts
import { useAnimation } from '@angular/animations';
import { IgxExpansionPanelComponent } from 'igniteui-angular/expansion-panel';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';
// import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: '100ms',
                toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: '500ms',
                fromPosition: 'translateX(-15px)',
                startOpacity: 0.1
            }
        })
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
```

As you can see, we are going to use [`slideInLeft`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations#mixin-slide-in-left) and [`slideOutRight`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations#mixin-slide-out-right) animations from our [**inbuilt suite of animations**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations) to make the component content appear more dramatically from the left side and disappear on the right when collapsing the content. In the process, we override some of the existing parameters with the specific ones we want to use.

The sample shows some user information and the key point here is passing the animation settings to the component like:
`[animationSettings] = "animationSettingsCustom"`

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="my-expansion-panel">
    <igx-expansion-panel-header>
        <igx-expansion-panel-title class="sample-title">Angular</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

You can see the results below:

```typescript
import { useAnimation } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-5',
    styleUrls: ['./expansion-sample-5.component.scss'],
    templateUrl: './expansion-sample-5.component.html',
    imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class ExpansionPanelSample5Component {

    @ViewChild(IgxExpansionPanelComponent, { static: true })
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
                params: {
                    duration: '100ms',
                    toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
                params: {
                    duration: '500ms',
                    fromPosition: 'translateX(-15px)',
                    startOpacity: 0.1
                }
            })
    };

    public user = {
        email: '',
        fullName: '',
        phone: undefined
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
```
```html
<div class="sample-holder">
    <igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="my-expansion-panel">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title class="sample-title">Angular</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</div>
```
```scss
.sample-holder {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
}

.my-expansion-panel {
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    border: 1px solid rgba(171, 171, 171, 0.3)
}
```


## Multiple panel scenario

See the [igxAccordion topic](accordion.md)

## API Reference

- [IgxExpansionPanel API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html)
- [IgxExpansionPanelHeader API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html)
- [IgxExpansionPanelBody API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelbodycomponent.html)
- [IgxExpansionPanel Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-expansion-panel)

## Theming Dependencies

- [IgxExpansionPanel Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-expansion-panel-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
