---
title: Angular Snackbar Component - MIT license 
_description: Easily integrate a brief, single-line message within your mobile and desktop applications with Ignite UI for Angular Snackbar component.
_keywords: Angular Snackbar component, Angular Snackbar control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Snackbar
---

# Angular Snackbar Component Overview

<p class="highlight">The Ignite UI for Angular Snackbar component provides feedback about an operation with a single-line message, which can include an action. The Snackbar message appears above all other elements and is positioned at the bottom center of the screen.</p>

## Angular Snackbar Example

<div class="divider--half"></div>


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-sample-1',
    styleUrls: ['./snackbar-sample-1.component.scss'],
    templateUrl: './snackbar-sample-1.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarSample1Component { }
```
```html
<button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```
```scss
/* .div
{
    position: absolute; 
    height: 150px; 
    width: 100%;
} */
```


<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Snackbar

To get started with the Ignite UI for Angular Snackbar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxSnackbarModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular/snackbar';
// import { IgxSnackbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSnackbarComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
// import { IgxSnackbarComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
    <div>
        <igx-snackbar #snackbar>Message deleted</igx-snackbar>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxSnackbarComponent, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Snackbar module or component imported, you can start using the `igx-snackbar` component.

## Using the Angular Snackbar

### Show Snackbar

In order to display the snackbar component, use its [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#open) method and call it on a button click.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```

If the sample is configured properly, you should see the demo sample. A snackbar appears displaying a text message when the button is clicked.
As you can see in the code snippet above, one way to set the massage displayed in the snackbar is to use the content projection. But if you need to switch the value programmatically based on some custom logic you can just pass the value as a parameter to the [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#open) method.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open('Message deleted')">Delete Message</button>
<button igxButton="contained" (click)="snackbar.open('Message deletion was not successful. Please try again')">Delete Message</button>
<div>
    <igx-snackbar #snackbar></igx-snackbar>
</div>
```

### Hide/Auto Hide

Once opened, the snackbar disappears after a period specified by the [`displayTime`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#displayTime) input which is set initially to 4000 milliseconds. This behavior is enabled by default but you can change it by setting [`autoHide`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#autoHide) to **false**. In this way, the snackbar will remain visible. Using the snackbar [`close()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#close) method, you can close the component in the code.

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar)">Message sent</igx-snackbar>
</div>
```

```typescript
// sample.component.ts

public close(element) {
    element.close();
}
```

If the sample is configured properly, the first snackbar appears when the button is clicked, showing both the _message_ and _action button_. The auto-hide feature is disabled and the snackbar disappears on 'CLOSE' button click. Another snackbar passes a different message through the [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#open) method and hides it when the _display time_ expires. The third component passes a message as a param to the [`open()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#open) method and adds an icon using content projection.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-snackbar-sample-2',
    styleUrls: ['./snackbar-sample-2.component.scss'],
    templateUrl: './snackbar-sample-2.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent, IgxIconComponent]
})
export class SnackbarSample2Component {
  public close(element) {
    element.close();
  }
}
```
```html
<div class="columnWrapper">
    <span>
        <h6>Snackbar Component that uses Content projection</h6>
        <button igxButton="contained" (click)="snackbar.open()">Send message</button>
        <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar)">Message sent</igx-snackbar>
    </span>

    <span>
        <h6>Snackbar Component which dynamically changes the message text</h6>
        <button igxButton="outlined" (click)="snackbar1.open('Hi! This is info message.')">Info Message</button>
        <button igxButton="outlined" (click)="snackbar1.open('Hi! This is success message.')">Success Message</button>
        <igx-snackbar #snackbar1 [autoHide]="true" actionText="CLOSE" (clicked)="close(snackbar1)"></igx-snackbar>
    </span>
    <span>
        <h6>Snackbar Component that uses Content Projection and dynamically changes the message text</h6>
        <button igxButton="contained" (click)="snackbar2.open('The message was not delivered successfully. Please contact our support team.')">Send message</button>
        <igx-snackbar #snackbar2 [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar2)">
            <igx-icon>support_agent</igx-icon>
        </igx-snackbar>
    </span>
</div>
```
```scss
.columnWrapper {
    display: flex;
    flex-flow: row;
    padding-top: 30px;
}
.columnWrapper span {
    min-width: 250px;
    flex: 1 0 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
}
button {
    margin-top: 20px;
}
```

### Display Time

Use [`displayTime`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#displayTime) and set it to an interval in milliseconds to configure how long the snackbar component is visible. By default, as we said, it's initially set to 4000 milliseconds.

### Customize Snackbar

We can also customize the content of the Snackbar to display more complex elements than a message and a button. If we want to show the snackbar while loading a file, for example, a loading animation could be added to its content.

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="snackbar.open()">Load file</button>
<div>
  <igx-snackbar #snackbar displayTime="5000">File loading
    <svg id="dots" height="20px">
        <g id="dots" fill="#FFFFFF">
            <circle id="dot1" cx="5" cy="18" r="2"></circle>
            <circle id="dot2" cx="15" cy="18" r="2"></circle>
            <circle id="dot3" cx="25" cy="18" r="2"></circle>
        </g>
    </svg>
  </igx-snackbar>
</div>
```

```scss
//sample.component.scss
#dots #dot1 {
    animation: load 1s infinite;
}

#dots #dot2 {
    animation: load 1s infinite;
    animation-delay: 0.2s;
}

#dots #dot3 {
    animation: load 1s infinite;
    animation-delay: 0.4s;
}

@keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
```

As a result, a message and three loading dots appear in the snackbar.


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-sample-5',
    styleUrls: ['./snackbar-sample-5.component.scss'],
    templateUrl: './snackbar-sample-5.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarSample5Component { }
```
```html
<button igxButton="contained" (click)="snackbar.open()">Load file</button>
<div>
  <igx-snackbar #snackbar [displayTime]="5000">File loading
    <svg id="dots" height="20px">
        <g id="dots" fill="#999999">
            <circle id="dot1" cx="5" cy="18" r="2"></circle>
            <circle id="dot2" cx="15" cy="18" r="2"></circle>
            <circle id="dot3" cx="25" cy="18" r="2"></circle>
        </g>
    </svg>
  </igx-snackbar>
</div>
```
```scss
#dots #dot1 {
    animation: load 1s infinite;
}

#dots #dot2 {
    animation: load 1s infinite;
    animation-delay: 0.2s;
}

#dots #dot3 {
    animation: load 1s infinite;
    animation-delay: 0.4s;
}

@keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
```


### Snackbar in list

Having all main snackbar features covered, we can integrate this component in a more interesting scenario. We can use the snackbar to provide a notification and the ability to revert actions.

Let’s create a list with contacts that can be deleted. When an item is deleted, a snackbar is displayed containing a message and a button to undo the action.

```html
<!--sample.component.html-->
<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>

    <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item" *ngFor="let item of navItems">
        <div class="item-container">
            <div class="contact">
                <igx-avatar [src]="item.avatar" shape="circle"></igx-avatar>
                <div class="contact__info">
                    <span class="name">{{item.text}}</span>
                </div>
            </div>
            <span igxIconButton="flat" igxRipple igxRippleCentered="true" (click)="delete(item)">
                <igx-icon [style.color]="'#ff5252'">delete</igx-icon>
            </span>
        </div>

    </igx-list-item>

    <igx-snackbar actionText="Undo" (clicked)="restore()">Contact deleted</igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
// import { IgxSnackbarComponent } from '@infragistics/igniteui-angular'; for licensed package
...
@ViewChild(IgxSnackbarComponent)
public snackbar: IgxSnackbarComponent;
public navItems: any[];
public deletedItems = [];

constructor() { }

public ngOnInit() {
    this.navItems = [
        { avatar: 'assets/images/avatar/2.jpg', text: 'Richard Mahoney'},
        { avatar: 'assets/images/avatar/4.jpg', text: 'Lisa Landers' },
        { avatar: 'assets/images/avatar/14.jpg', text: 'Marianne Taylor' },
        { avatar: 'assets/images/avatar/17.jpg', text: 'Ward Riley' }
    ];
}

public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.open();
}

public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.close();
}
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-snackbar-sample-4',
    styleUrls: ['./snackbar-sample-4.component.scss'],
    templateUrl: './snackbar-sample-4.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListActionDirective, IgxIconButtonDirective, IgxIconComponent, IgxSnackbarComponent]
})
export class SnackbarSample4Component implements OnInit {
  @ViewChild(IgxSnackbarComponent, { static: true })
  public snackbar: IgxSnackbarComponent;
  public navItems: any[];
  public deletedItems = [];

  constructor() { }

  public ngOnInit() {
    this.navItems = [{
      avatar: 'assets/images/avatar/2.jpg',
      text: 'Richard Mahoney'
    },
    {
      avatar: 'assets/images/avatar/4.jpg',
      text: 'Lisa Landers'
    },
    {
      avatar: 'assets/images/avatar/14.jpg',
      text: 'Marianne Taylor'
    }, {
      avatar: 'assets/images/avatar/17.jpg',
      text: 'Ward Riley'
    }];
  }

  public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.open();
  }

  public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.close();
  }
}
```
```html
<div class="list-sample">
  <igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>

    @for (item of navItems; track item) {
      <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item-content">
        <igx-avatar igxListThumbnail [src]="item.avatar" shape="circle"></igx-avatar>
        <span igxListLineTitle class="name">{{item.text}}</span>
        <span igxListAction igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="delete(item)">
          <igx-icon [style.color]="'#ff5252'">delete</igx-icon>
        </span>
      </igx-list-item>
    }

    <igx-snackbar actionText="Undo" (clicked)="restore()">Contact deleted</igx-snackbar>
  </igx-list>
</div>
```
```scss
:host {
    display: block;
    padding: 16px;
}

.list-sample {
    display: block;
    position: relative;
    overflow: hidden;
    height: 280px;
    min-width: 300px;
    box-shadow:
		0 1px 3px 0 rgba(0, 0, 0, 0.2),
		0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
```

### Positioning

Use [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html#positionSettings) property to configure where the snackbar appears. By default, it is displayed at the bottom of the page. In the sample below, we set notification to appear at the top position.

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="open(snackbar)">Show notification on top</button>
<igx-snackbar #snackbar>Notification displayed</igx-snackbar>
```

```typescript
// sample.component.ts
import { VerticalAlignment, HorizontalAlignment } from 'igniteui-angular/core';
// import { VerticalAlignment, HorizontalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(snackbar) {
    snackbar.positionSettings.verticalDirection = VerticalAlignment.Top;
    snackbar.positionSettings.horizontalDirection = HorizontalAlignment.Right;
    snackbar.open();
}
...
```

## Styling

### Snackbar Theme Property Map

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
        <tr class="primary">
        <td><strong>$background</strong></td>
        <td>$text-color</td>
        <td>The text color used in the snackbar</td>
        </tr>
        <tr class="dependent"><td></td><td>$button-color</td><td>The button color used in the snackbar</td></tr>
    </tbody>
</table>

To get started with styling the snackbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`snackbar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-snackbar-theme) and accepts the `$text-color`, `$background`, `$button-color` and the `$border-radius` parameters.

```scss
$dark-snackbar: snackbar-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $button-color: #ffcd0f,
  $border-radius: 12px
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component theme in our application.

```scss
:host {
    @include tokens($dark-snackbar);
}
```

### Demo

```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-style',
    styleUrls: ['./snackbar-style.component.scss'],
    templateUrl: './snackbar-style.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarStyleComponent {
  elem = inject(ElementRef);


  public close(element) {
    element.close();
  }
}
```
```html
<button igxButton="contained" (click)="snackbar.open()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" [outlet]="elem" actionText="Close" (clicked)="close(snackbar)">Message sent</igx-snackbar>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

$dark-snackbar: snackbar-theme(
  $text-color: #ffcd0f,
  $background: #292826,
  $button-color: #ffcd0f,
  $border-radius: 12px
);

:host {
  @include tokens($dark-snackbar);
  display: block;
  height: 100vh;
}
```

<div class="divider--half"></div>

### Styling with Tailwind

You can style the snackbar using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-snackbar`, `dark-snackbar`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [snackbar-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-snackbar-theme). The syntax is as follows:

```html
<igx-snackbar
  class="!light-snackbar ![--background:#7B9E89]
  ![--button-color:#DD0D4B]">
  ...
</igx-snackbar>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your snackbar should look like this:

<div class="sample-container loading" style="height:150px">
    <iframe id="snackbar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/notifications/snackbar-tailwind-style/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

In this article we learned how to use and configure the [`IgxSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html). For more details in regards its API, take a look at the links below:

- [`IgxSnackbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsnackbarcomponent.html)

Styles:

- [`IgxSnackbarComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-snackbar-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
