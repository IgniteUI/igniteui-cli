---
title: Angular Navbar Component – Ignite UI for Angular | Infragistics | MIT license
description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular NavBar component, Angular Navbar control, Angular Navigation Bar, Angular Navigation Bar component
license: MIT
llms:
  description: "The Ignite UI for Angular Navbar is an application header component that informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser)."
_tocName: Navbar
---
# Angular Navbar Component Overview

The Ignite UI for Angular [`IgxNavbar`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent) is an application header component that informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## Angular Navbar Example

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html',
    imports: [IgxNavbarComponent]
})
export class NavbarComponent { }
```
```html
<article class="sample-column">
    <div class="navbar-sample">
        <igx-navbar title="Ignite UI for Angular">
        </igx-navbar>
    </div>
</article>
```

<hr/>

## Getting Started with Ignite UI for Angular Navbar

To get started with the Ignite UI for Angular Navbar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](./general/getting-started.md) topic.

The first step is to import the `IgxNavbarModule` inside our **app.module.ts** file.

```typescript
// app.module.ts

import { IgxNavbarModule } from 'igniteui-angular/navbar';
// import { IgxNavbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxNavbarComponent` as a standalone dependency, or use the [`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/navbar/src/navbar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_NAVBAR_DIRECTIVES } from 'igniteui-angular/navbar';
// import { IGX_NAVBAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-navbar title="Ignite UI for Angular"></igx-navbar>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_NAVBAR_DIRECTIVES],
  /* or imports: [IgxNavbarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Navbar module or directives imported, you can start using the `igx-navbar` component.

## Using the Angular Navbar

Then in the template of our component we can add the following code to show a basic navbar with a title:

```html
{/*navbar.component.html*/}

<igx-navbar title="Ignite UI for Angular"> </igx-navbar>
```

### Add Menu Button

In order to add a menu button, we will show the action button using the `actionButtonIcon` property, and make it use a menu icon as follows:

```html
{/*navbar.component.html*/}

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true"></igx-navbar>
```

**Note:** 
The [`actionButtonIcon`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent&member=actionButtonIcon) uses the Material fontset by design.

### Add Icon Buttons

We can make our app a little more functional by adding options for searching, favorites and more. To do that let's grab the [**IgxIconButton**](./icon-button.md) and [**IgxIcon**](./icon.md) modules and import them in our **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxNavbarModule } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
// import { IgxNavbarModule, IgxButtonModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxIconButtonDirective, IgxIconModule],
})
export class AppModule {}
```

Next, we need to update our template with an icon button for each of the options we want our app to provide:

```html
{/*navbar.component.html*/}

<igx-navbar title="Sample App">
  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

**Note:** 
This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

If all went well, you should see the following in your browser:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar-sample-1',
    styleUrls: ['./navbar-sample-1.component.scss'],
    templateUrl: './navbar-sample-1.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarSample1Component { }
```
```html
<div class="sample-column">
    <igx-navbar title="Sample App">
        <igx-navbar-action>
            <button igxIconButton="flat">
                <igx-icon>menu</igx-icon>
            </button>
        </igx-navbar-action>
        
        <button igxIconButton="flat">
            <igx-icon>search</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```

<hr/>

### Add Custom Action

What if we want to use a custom template for our app navigation on the left-most part of the navbar? We can easily achieve this by using the `igx-navbar-action` directive, which will render the content we have provided. We will do that by using a button with the Font Awesome home icon.

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");
```

```html
{/*navbar.component.html*/}

<igx-navbar title="Sample App">
  <igx-navbar-action>
    <button igxIconButton="flat">
      <igx-icon family="fa" name="fa-home"></igx-icon>
    </button>
  </igx-navbar-action>

  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

Finally, this is how our navbar should look like with its custom action button icon:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar-sample-2',
    styleUrls: ['./navbar-sample-2.component.scss'],
    templateUrl: './navbar-sample-2.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarSample2Component { }
```
```html
<div class="sample-column">
    <igx-navbar title="Sample App">
        <igx-navbar-action>
            <button igxIconButton="flat">
                <igx-icon family="fa" name="fa-home"></igx-icon>
            </button>
        </igx-navbar-action>
        
        <button igxIconButton="flat">
            <igx-icon>search</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```
```scss
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");
```

<hr/>

### Add Navigation Icon

If we want to create a navbar with an icon navigating back, we should follow a couple of steps. First, we can use the `actionButtonIcon` property to choose a suitable icon from the Material fontset. Then, we can make a simple check if there are any previously visited pages to go back to, and pass the result to the [`isActionButtonVisible`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent&member=isActionButtonVisible) property. The last step is to create a method for navigating back and hook it to the [`action`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent&member=action) property.

```html
{/*navbar.component.html*/}

<igx-navbar
  title="Ignite UI for Angular"
  actionButtonIcon="arrow_back"
  [isActionButtonVisible]="canGoBack()"
  (action)="navigateBack()"
>
</igx-navbar>
```

```typescript
export class NavbarSample3Component {
  constructor(private _location: Location) {}

  public ngOnInit() {}

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
    return window.history.length > 0;
  }
}
```

If the sample is configured properly, you should see the following in your browser:

```typescript
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';

@Component({
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    selector: 'app-navbar',
    styleUrls: ['./navbar-sample-3.component.scss'],
    templateUrl: './navbar-sample-3.component.html',
    imports: [IgxNavbarComponent]
})
export class NavbarSample3Component {
  private _location = inject(Location);


  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
```
```html
<div class="sample-column">
    <igx-navbar title="Ignite UI for Angular" actionButtonIcon="arrow_back" [isActionButtonVisible]="canGoBack()"
        (action)="navigateBack()">
    </igx-navbar>
</div>
```

**Note:** 
If [`igx-navbar-action`](mcp:get_api_reference?platform=angular&component=IgxNavbarActionDirective) or [`igxNavbarAction`](mcp:get_api_reference?platform=angular&component=IgxNavbarActionDirective) is provided, the default [`actionButtonIcon`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent&member=actionButtonIcon) will not be used.

<hr/>

### Add Custom Title

If we want to provide a custom content for a navbar's title, we can achieve this by using `igx-navbar-title` or `igxNavbarTitle` directive. They will replace the default navbar's title provided by `title` input property. The sample below has a custom title containing a link with an image:

```html
{/*navbar.component.html*/}

<div class="sample-column">

  <igx-navbar>
    <igx-navbar-action>
      <button igxIconButton="flat">
        <igx-icon>menu</igx-icon>
      </button>
    </igx-navbar-action>

    <div igxNavbarTitle>
      <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
        <img
          src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
          width="120px"
          height="50px"
          alt
          style="margin-top: 7px;"
        />
      </a>
    
</div>

    <button igxIconButton="flat">
      <igx-icon>search</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>favorite</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>more_vert</igx-icon>
    </button>
  </igx-navbar>
</div>
```

**Note:** 
If [`igx-navbar-title`](mcp:get_api_reference?platform=angular&component=IgxNavbarTitleDirective) or [`igxNavbarTitle`](mcp:get_api_reference?platform=angular&component=IgxNavbarTitleDirective) is provided, the default [`title`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent&member=title) will not be used.

```typescript
import { Component } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent, IgxNavbarTitleDirective } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-navbar-custom-title',
    templateUrl: './navbar-custom-title.component.html',
    styleUrls: ['./navbar-custom-title.component.scss'],
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent, IgxNavbarTitleDirective]
})
export class NavbarCustomTitleComponent { }
```
```html
<div class="sample-column">
    <igx-navbar>
        <igx-navbar-action>
            <button igxIconButton="flat">
                <igx-icon>menu</igx-icon>
            </button>
        </igx-navbar-action>
        
        <div igxNavbarTitle>
            <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
                <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
                    width="120px" height="50px" alt="" style="margin-top: 7px;">
            </a>
        </div>
        
        <button igxIconButton="flat">
            <igx-icon>search</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```
```scss
:host ::ng-deep {
    .igx-navbar {
        padding: 0 16px;
    }
}
```

<hr/>

## Styling

### Navbar Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

| Primary Property | Dependent Property | Description |
| --- | --- | --- |
| **$background** | $text-color | The navbar text color |
|  | $idle-icon-color | The navbar idle icon color |
|  | $hover-icon-color | The navbar hover icon color |
|  | $border-color (changes for indigo variant only) | The navbar border color |
| **$idle-icon-color** | $hover-icon-color | The navbar hover icon color |

To get started with styling the navbar, we need to import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the `navbar-theme` and provide just the `$background` and `$idle-icon-color` parameters. The theme will automatically compute all of the necessary background and foreground colors for various interaction states. If need, you can also manually override specific properties for finer control over the appearance.

```scss
$custom-navbar-theme: navbar-theme(
  $background: #011627,
  $idle-icon-color: #ecaa53,
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](./themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the newly created theme to the `tokens` mixin:

```scss
:host {
  @include tokens($custom-navbar-theme);
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-navbar-style',
    styleUrls: ['./navbar-style.component.scss'],
    templateUrl: './navbar-style.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})

export class NavbarStyleComponent { }
```
```html
<div class="sample-column">
    <igx-navbar title="Sample App">
        <igx-navbar-action>
            <button igxIconButton="flat">
                <igx-icon>menu</igx-icon>
            </button>
        </igx-navbar-action>

        <button igxIconButton="flat">
            <igx-icon>search</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

$custom-navbar-theme: navbar-theme(
  $background: #011627,
);

$custom-icon-button-theme: flat-icon-button-theme(
  $foreground: #ecaa53,
);

:host {
  @include tokens($custom-navbar-theme);
  @include tokens($custom-icon-button-theme);
}
```

<hr/>

### Styling with Tailwind

You can style the navbar using our custom Tailwind utility classes. Make sure to [set up Tailwind](./themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-navbar`, `dark-navbar`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the `navbar-theme`. The syntax is as follows:

```html
<igx-navbar class="!light-navbar ![--background:#7B9E89] ![--text-color:#121E17]" title="Sample App">
  ...
</igx-navbar>
```

**Note:** 
The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your navbar should look like this:

```typescript
import { Component } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-navbar-tailwind-style',
    styleUrls: ['./navbar-tailwind-style.component.scss'],
    templateUrl: './navbar-tailwind-style.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})

export class NavbarTailwindStyleComponent { }
```
```html
<div class="sample-column">
    <igx-navbar class="!light-navbar ![--background:#7B9E89] ![--text-color:#121E17]" title="Sample App">
        <igx-navbar-action>
            <button class="!light-flat-icon-button ![--foreground:#121E17]" igxIconButton="flat">
                <igx-icon>menu</igx-icon>
            </button>
        </igx-navbar-action>

        <button class="!light-flat-icon-button ![--foreground:#121E17]" igxIconButton="flat">
            <igx-icon>search</igx-icon>
        </button>
        <button class="!light-flat-icon-button ![--foreground:#121E17]" igxIconButton="flat">
            <igx-icon>favorite</igx-icon>
        </button>
        <button class="!light-flat-icon-button ![--foreground:#121E17]" igxIconButton="flat">
            <igx-icon>more_vert</igx-icon>
        </button>
    </igx-navbar>
</div>
```

## API References
<hr/>
- [`IgxNavbar`](mcp:get_api_reference?platform=angular&component=IgxNavbarComponent)
- [`IgxNavbarActionDirective`](mcp:get_api_reference?platform=angular&component=IgxNavbarActionDirective)
- [`IgxNavbarTitleDirective`](mcp:get_api_reference?platform=angular&component=IgxNavbarTitleDirective)
- `IgxNavbarComponent Styles`
Additional components and/or directives with relative APIs that were used:
- [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)
- `IgxIconComponent Styles`
## Theming Dependencies

- `IgxIconComponent Theme`
- `IgxButtonComponent Theme`

## Additional Resources

<hr/>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
