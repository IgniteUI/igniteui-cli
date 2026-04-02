---
title: Angular Toggle Component | Ignite UI for Angular | MIT license 
_description: The Ignite UI for Angular Toggle directive allows the users to open, to interact with, to apply animations, and to close a toggle container. 
_keywords: Angular Toggle directive, Angular Toggle control, Angular Toggle Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Native Angular Components
_license: MIT
_tocName: Toggle
---

# Angular Toggle Directive Overview

<p class="highlight">The Ignite UI for Angular Toggle directive allows the users to make a container in the DOM toggleable through user interaction.</p>

## Angular Toggle Example


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-1',
    styleUrls: ['./toggle-sample-1.component.scss', '../toggle-samples.scss'],
    templateUrl: './toggle-sample-1.component.html',
    imports: [IgxButtonDirective, IgxToggleDirective]
})
export class ToggleSample1Component {

  @ViewChild(IgxToggleDirective, { static: true })
  public toggle: IgxToggleDirective;

  public toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open();
    } else {
      this.toggle.close();
    }
  }
}
```
```html
<div class="sample-column">
    <button class="toggle-button" igxButton="contained" (click)="toggleContent()">Toggle</button>
    <div class="toggle-content" igxToggle>
        <section class="toggle-section">
            <img src="assets/images/toggle/nature.jpg"/>
        </section>
    </div>
</div>
```
```scss
.toggle-section{
    background-color: white;
}
```


## Getting Started with Ignite UI for Angular Toggle

To get started with the Ignite UI for Angular Toggle directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxToggleModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular/directives';
// import { IgxToggleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxToggleDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxToggleDirective, IgxButtonDirective } from 'igniteui-angular/directives';

// import { IgxToggleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button class="toggle-button" igxButton="contained" (click)="toggleContent()">Toggle</button>
    <div class="toggle-content" igxToggle>
        <section class="toggle-section">
            <img src="assets/images/toggle/nature.jpg" alt="Nature" />
        </section>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToggleDirective, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Toggle module or directive imported, you can start using the `igxToggle` directive.

## Using the Angular Toggle Directive

### Display Toggle

In order to show and hide the toggle content, use its [open](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html#open) and [close](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html#close) methods:

```typescript
import { IgxToggleDirective } from 'igniteui-angular/directives'
// import { IgxToggleDirective } from '@infragistics/igniteui-angular'; for licensed package
...

export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggleContent() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

Then in the template of our component, we can apply the directive on the element we want to be toggleable:

```html
<!--template.component.html-->
<button class="toggle-button" igxButton="contained" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <img src="assets/images/toggle/nature.jpg"/>
    </section>
</div>
```

## Examples

### Change Position

In the next sample, we'll use a different positioning strategy so that the content is displayed below the button.

The `igxToggle` directive uses the [`IgxOverlayService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html) provider. The `open`, `close` and `toggle` methods accept optional overlay settings that control how the content is displayed. If omitted, the default overlay settings are used as seen in the previous sample.

>[!NOTE]
> By default, the [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#closeOnOutsideClick) property is set to `true`. In order to disable this functionality, the property has to be set to `false`. Additionally, the [`closeOnEscape`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#closeOnEscape) property defaults to `false`, so in order to make use of it, we have to set it to `true`.

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild('button') public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings = {
        target: this.igxButton.nativeElement,
        closeOnOutsideClick: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this.igxToggle.toggle(this._overlaySettings);
    }
```

This is how our toggle should look like now:


```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';

import { ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle',
    styleUrls: ['./toggle-samples.scss'],
    templateUrl: './toggle.component.html',
    imports: [IgxButtonDirective, IgxToggleDirective]
})
export class ToggleComponent {
    @ViewChild(IgxToggleDirective, { static: true }) public igxToggle: IgxToggleDirective;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this._overlaySettings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
}
```
```html
<div class="sample-column">
    <button class="toggle-button" #button igxButton="contained" (click)="toggle()">Toggle</button>
    <div class="toggle-content" igxToggle>
        <section class="toggle-section">
            <img src="assets/images/toggle/nature.jpg"/>
        </section>
    </div>
</div>
```


### Automatic Toggle Actions

In order to avoid using the `open` and `close` methods, we can use a directive, which has an `onClick` handler, and changes the state of the toggle we are referring to automatically.

If we would like to take advantage of this functionality, we will have to use the `IgxToggleActionDirective` from the `IgxToggleModule` and assign the `IgxToggleDirective` to it.

>[!NOTE]
> The [`IgxToggleActionDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html) should be declared on the element we are planing to use like a trigger (toggle).

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="contained" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <h6>Automatic toggle actions</h6>
    </section>
</div>
```

After these changes the toggle should work exactly in the same way.


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-2',
    styleUrls: ['../toggle-samples.scss'],
    templateUrl: './toggle-sample-2.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective]
})
export class ToggleSample2Component { }
```
```html
<div class="sample-column">
    <button class="toggle-button" igxButton="contained" [igxToggleAction]="toggleRef">Toggle</button>
    <div class="toggle-content" igxToggle #toggleRef="toggle">
        <section class="toggle-section">
            <h6>Automatic toggle actions</h6>
        </section>
    </div>
</div>
```


>[!NOTE]
> By default `IgxToggleActionDirective` excludes its host element from the [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#closeOnOutsideClick) property. Therefore, clicking on the host element will not fire any event. Additionally, this directive will set its host element as the overlay settings [`target`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#target).

### Automatic Toggle Service Provider

There is a convenient way to keep the state of the `igxToggle` directive and command it via the [`igxNavigationService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnavigationservice.html) provider. We just need to set an identifier for our `igxToggle` element, which will be used to register the toggle with the service. If we would like to control its state automatically, we have to pass this identifier to the `igxToggleActionDirective`.

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button" igxButton="contained">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
        <h6>Toggled by the service provider</h6>
    </section>
</div>
```

If all went well, it will look like this:


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-3',
    styleUrls: ['../toggle-samples.scss'],
    templateUrl: './toggle-sample-3.component.html',
    imports: [IgxToggleActionDirective, IgxButtonDirective, IgxToggleDirective]
})
export class ToggleSample3Component { }
```
```html
<div class="sample-column">
    <button igxToggleAction="toggleId" class="toggle-button" igxButton="contained">Toggle</button>
    <div igxToggle id="toggleId" class="toggle-content">
        <section class="toggle-section">
            <h6>Toggled by the service provider</h6>
        </section>
    </div>
</div>
```


### Offsetting the Toggle Container

We can manipulate the position of the toggle container along the corresponding axis by a provided amount. The `setOffset` method also supports an optional `offsetMode` parameter that determines whether to add to the current offset values or set them to a specific value.

```typescript
// deltaX and deltaY determine by how much the container will be offset compared to its' previous position
// Using OffsetMode.Add to add the values (default behavior)
public offsetToggleAdd() {
    const deltaX = 30;
    const deltaY = 30;
    this.toggle.setOffset(deltaX, deltaY, OffsetMode.Add);
}
```

```typescript
// deltaX and deltaY determine the exact position to set the container to, relative to its target element.
// Using OffsetMode.Set to set the offset to specific values
public offsetToggleSet() {
    const deltaX = 30;
    const deltaY = 30;
    this.toggle.setOffset(deltaX, deltaY, OffsetMode.Set);
}
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-4',
    styleUrls: ['../toggle-samples.scss'],
    templateUrl: './toggle-sample-4.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxToggleDirective]
})
export class ToggleSample4Component {
    @ViewChild(IgxToggleDirective, { static: true }) public toggle: IgxToggleDirective;

    public offsetToggle() {
        const deltaX = 30;
        const deltaY = 30;
        this.toggle.setOffset(deltaX, deltaY);
    }
}
```
```html
<div class="sample-column">
    <button class="toggle-button" igxButton="contained" [igxToggleAction]="toggleRef" (click)="offsetToggle()">Toggle</button>
    <div class="toggle-content" igxToggle #toggleRef="toggle">
        <section class="toggle-section">
            <h6>Offsetting the toggle container</h6>
        </section>
    </div>
</div>
```


## API References

<div class="divider"></div>

- [IgxToggleDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html)
- [IgxToggleActionDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html)

Additional components and/or directives with relative APIs that were used:

- [IgxOverlayOutletDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayoutletdirective.html)
- [IgxOverlayService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxoverlayservice.html)
- [igxNavigationService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnavigationservice.html)

## Theming Dependencies

- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)


## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
