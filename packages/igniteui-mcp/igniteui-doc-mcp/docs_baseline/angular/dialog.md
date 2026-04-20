---
title: Angular Dialog Window Component - MIT license 
_description: Whether building informative dialogs or data manipulation windows, Ignite UI for Angular Dialog Window component can manage information shown in real-time for fast capability.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Dialog Window component, Angular Dialog Window control, Angular Dialog Component
_license: MIT
_tocName: Dialog Window
---

# Angular Dialog Window Component Overview

<p class="highlight">Use the Ignite UI for Angular Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</p>

## Angular Dialog Window Example

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxDialogComponent } from 'igniteui-angular/dialog';

@Component({
    selector: 'app-dialog-sample-1',
    styleUrls: ['./dialog-sample-1.component.scss'],
    templateUrl: './dialog-sample-1.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent]
})
export class DialogSample1Component { }
```
```html
<button igxButton="contained" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (leftButtonSelect)="alert.close()">
</igx-dialog>
```
```scss
:host {
    display: block;
    padding: 16px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Dialog Window

To get started with the Ignite UI for Angular Dialog Window component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDialogModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDialogModule } from 'igniteui-angular/dialog';
// import { IgxDialogModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDialogModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDialogComponent` as a standalone dependency, or use the [`IGX_DIALOG_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/dialog/src/dialog/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_DIALOG_DIRECTIVES } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRippleDirective } from 'igniteui-angular/directives';
// import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

    <igx-dialog #alert
        title="Notification"
        message="Your email has been sent successfully!"
        leftButtonLabel="OK"
        (leftButtonSelect)="alert.close()">
    </igx-dialog>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective]
    /* or imports: [IgxDialogComponent, IgxButtonDirective, IgxRippleDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Dialog Window module or directives imported, you can start using the `igx-dialog` component.

<div class="divider--half"></div>

## Using the Angular Dialog Window

### Alert Dialog

To create an alert dialog, in the template of our email component, we add the following code. We have to set the [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#title), [`message`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#message),
[`leftButtonLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#leftButtonLabel) and handle [`leftButtonSelect`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#leftButtonSelect) event:

```html
<!--email.component.html-->
<button igxButton="contained" igxRipple="white" (click)="alert.open()">Show Alert Dialog</button>

<igx-dialog #alert
    title="Notification"
    message="Your email has been sent successfully!"
    leftButtonLabel="OK"
    (leftButtonSelect)="alert.close()">
</igx-dialog>
```

If everything's done right, you should see the demo sample shown above in your browser.

<div class="divider--half"></div>

### Standard Dialog

To create a standard dialog, in the template of our file manager component, we add the following code. We have to set the [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#title), [`message`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#message),
[`leftButtonLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#leftButtonLabel), [`rightButtonLabel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#rightButtonLabel), and handle [`leftButtonSelect`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#leftButtonSelect) and [`rightButtonSelect`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#rightButtonSelect) events:

```html
<!--file-manager.component.html-->
<button igxButton="contained" igxRipple="white" (click)="dialog.open()">Show Confirmation Dialog</button>

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (leftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (rightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Microsoft_Annual_Report_2015.pdf and Microsoft_Annual_Report_2015.pdf files?">
</igx-dialog>
```


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxDialogComponent } from 'igniteui-angular/dialog';

@Component({
    selector: 'app-dialog-sample-2',
    styleUrls: ['./dialog-sample-2.component.scss'],
    templateUrl: './dialog-sample-2.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent]
})
export class DialogSample2Component {

    constructor() { }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }
}
```
```html
<button igxButton="contained" igxRipple="white" (click)="dialog.open()">Show Confirmation Dialog</button>

<igx-dialog #dialog title="Confirmation"
    leftButtonLabel="Cancel"
    (leftButtonSelect)="dialog.close()"
    rightButtonLabel="OK"
    (rightButtonSelect)="onDialogOKSelected($event)"
    message="Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?">
</igx-dialog>
```
```scss
:host {
    display: block;
    padding: 16px;
}
```

<div class="divider--half"></div>

### Custom Dialog

To create a custom dialog, in the template of our sign-in component, we add the following code. The dialog title area can be customized using the `igxDialogTitle` directive or the `igx-dialog-title` selector. The actions area can be customized using the `igxDialogActions` directive or the `igx-dialog-actions` selector.
We add two input groups consisting of a label and and input decorated with the [**igxLabel**](input-group.md) and [**igxInput**](input-group.md) directives.

```html
<!--sign-in.component.html-->
<button igxButton="contained" igxRipple="white" (click)="alert.open()">Show Custom Dialog</button>

<igx-dialog #form [closeOnOutsideSelect]="true">
    <igx-dialog-title>
        <div class="dialog-container">
            <igx-icon>vpn_key</igx-icon>
            <div class="dialog-title">Sign In</div>
        </div>
    </igx-dialog-title>

    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text"/>
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password"/>
        </igx-input-group>
    </form>

    <div igxDialogActions>
        <button igxButton (click)="form.close()">CANCEL</button>
        <button igxButton (click)="form.close()">SIGN IN</button>
    </div>
</igx-dialog>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`


```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dialog-sample-3',
    styleUrls: ['./dialog-sample-3.component.scss'],
    templateUrl: './dialog-sample-3.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxIconComponent, FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxDialogActionsDirective]
})
export class DialogSample3Component {

    constructor() { }

    public signIn(event) {
        event.dialog.close();
    }
}
```
```html
<button igxButton="contained" igxRipple="white" (click)="form.open()">Show Custom Dialog</button>

<igx-dialog #form [closeOnOutsideSelect]="true">
    <igx-dialog-title>
        <div class="title-container">
            <igx-icon>vpn_key</igx-icon>
            <div class="dialog-title">Sign In</div>
        </div>
    </igx-dialog-title>

    <form class="signInForm">
        <igx-input-group>
            <igx-prefix>
                <igx-icon>person</igx-icon>
            </igx-prefix>
            <label igxLabel for="username">Username</label>
            <input igxInput id="username" type="text" />
        </igx-input-group>
        <igx-input-group>
            <igx-prefix>
                <igx-icon>lock</igx-icon>
            </igx-prefix>
            <label igxLabel>Password</label>
            <input igxInput id="password" type="password" />
        </igx-input-group>
    </form>

    <div igxDialogActions>
        <button igxButton (click)="form.close()">CANCEL</button>
        <button igxButton (click)="form.close()">SIGN IN</button>
    </div>
</igx-dialog>
```
```scss
:host {
    display: block;
    padding: 16px;
}

.signInForm {
    igx-input-group + igx-input-group {
        margin-top: 24px;
    }
}

.title-container{
    display: flex;

    igx-icon {
        margin-right: 8px;
    }
}
```

<div class="divider--half"></div>

### Position and Animation Settings

There are two ways to change the position at which the `igx-dialog` will be shown:

- Using [`open`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#open) method and pass a valid [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html). Example:

```typescript
import { PositionSettings, OverlaySettings, GlobalPositionStrategy, NoOpScrollStrategy, HorizontalAlignment, VerticalAlignment } from 'igniteui-angular/core';
// import { PositionSettings, OverlaySettings, GlobalPositionStrategy, NoOpScrollStrategy, HorizontalAlignment, VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class HomeComponent {
    public positionSettingsOnOpen: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Middle,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Middle,
    };
    public overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(this.positionSettingsOnOpen),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: false,
        closeOnOutsideClick: true
    };

    public openDialog() {
        this.alert.open(this.overlaySettings);
    }
}
```

- Using the `positionSettings` `@Input`. Example:

```html
<igx-dialog #alert title="Notification" [positionSettings]="positionSettings" >
</igx-dialog>
```

```typescript
import { useAnimation } from '@angular/animations';
import { slideInTop, slideOutBottom } from 'igniteui-angular/animations';
import { PositionSettings, HorizontalAlignment, VerticalAlignment } from 'igniteui-angular/core';
// import { PositionSettings, HorizontalAlignment, VerticalAlignment } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class HomeComponent {
    public positionSettings: PositionSettings = {
        openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
        closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
        horizontalDirection: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Middle,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Middle,
        minSize: { height: 100, width: 100 }
    };
}
```

> [!Note]
> The same approach should be used for the animation settings, use the `openAnimation` and `closeAnimation` properties to define animation params like duration.
`params` object example:

```typescript
params: {
    delay: '0s',
    duration: '350ms',
    easing: EaseOut.quad,
    endOpacity: 1,
    fromPosition: 'translateX(-500px)',
    startOpacity: 0,
    toPosition: 'translateY(0)'
}
```

### Trap focus inside dialog

By default when the dialog is opened the Tab key focus is trapped within it, i.e. the focus does not leave the element when the user keeps tabbing through the focusable elements. When the focus leaves the last element, it moves to the first one and vice versa, when SHIFT + TAB is pressed, when the focus leaves the first element, the last element should be focused. In case the dialog does not contain any focusable elements, the focus will be trapped on the dialog container itself. This behavior can be changed by setting the [`focusTrap`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html#focusTrap) property.

## Styling

### Dialog Theme Property Map

Changing the `$background` property automatically updates the following dependent properties:

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
        <td>
            <details><summary><strong>$background</strong></summary></details>
        </td>
        <td>$title-color</td>
        <td>The dialog title text color.</td>
        </tr>
        <tr class="dependent">
        <td></td>
        <td>$message-color</td>
        <td>The dialog message text color.</td>
        </tr>
        <tr class="dependent">
        <td></td>
        <td>$border-color</td>
        <td>The border color used for dialog component.</td>
        </tr>
    </tbody>
</table>

To get started with styling the dialog window, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`dialog-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-dialog-theme) and accepts parameters that style the dialog. By providing the `$background`, the theme automatically selects suitable contrast colors for the foreground properties. However, you can still manually define them if desired.

```scss
$my-dialog-theme: dialog-theme(
  $background: #011627,
  $title-color: #ecaa53,
  $border-radius: 5px,
);
```

> [!NOTE]
> In order to style any additional components that are used as part of the dialog window's content (such as the [`IgxButton`](button.md)), an additional theme should be created that is specific to the respective component and is placed under the dialog window's scope only (so it does not affect the rest of the application).

```scss
$custom-button: contained-button-theme(
  $background: #ecaa53,
  $foreground: #011627,
);
```

Since the dialog window uses the [`IgxOverlayService`](overlay.md), in order for our custom theme to reach down the dialog window that we want to style, we will provide a specific outlet where the dialog window will be placed in the DOM when it is visible.

```html
<div igxOverlayOutlet>
  <igx-dialog #dialog1>
      <!-- .... -->
  </igx-dialog>
</div>
```

> [!NOTE]
> In order to learn more about the various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay.md), you can take a look at the [Overlay styling topic](overlay-styling.md).

### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

```scss
:host {
    @include tokens($my-dialog-theme);
}
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to apply the styles.

```scss
:host {
  ::ng-deep {
    @include tokens($my-dialog-theme);
  }
}
```

### Demo

```typescript
import { useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseScrollStrategy, GlobalPositionStrategy, IgxOverlayOutletDirective, PositionSettings } from 'igniteui-angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { slideInBottom, slideOutTop } from 'igniteui-angular/animations';

@Component({
    selector: 'app-dialog-styling-sample',
    styleUrls: ['./dialog-styling-sample.component.scss'],
    templateUrl: './dialog-styling-sample.component.html',
    imports: [IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxIconComponent, IgxDialogActionsDirective]
})
export class DialogStylingSampleComponent implements OnInit {

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog1', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    private _animaitonSettings: PositionSettings = {
        openAnimation: useAnimation(slideInBottom, { params: { fromPosition: 'translateY(100%)' } }),
        closeAnimation: useAnimation(slideOutTop, { params: { toPosition: 'translateY(-100%)' } })
    };

    private _dialogOverlaySettings2;

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet,
            scrollStrategy: new CloseScrollStrategy(),
            positionStrategy: new GlobalPositionStrategy(this._animaitonSettings)
        };
    }
}
```
```html
<div igxOverlayOutlet class="dialog-wrapper">
    <button igxButton="contained" igxRipple="white" (click)="openDialog()">Show Styled Dialog</button>
    <igx-dialog #dialog1 message="This will create a new social media account.">
        <igx-dialog-title>
            <div class="dialog-container">
                <igx-icon>account_box</igx-icon>
                <div class="dialog-title">Create a new account?</div>
            </div>
        </igx-dialog-title>
        <div  igxDialogActions class="dialog-container dialog-actions">
            <button igxButton="contained" igxRipple="white" (click)="dialog.close()">CREATE</button>
            <button igxButton="contained" igxRipple="white" (click)="dialog.close()">CANCEL</button>
        </div>
    </igx-dialog>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$my-dialog-theme: dialog-theme(
  $background: #011627,
  $title-color: #ecaa53,
  $border-radius: 5px,
);

$custom-button: contained-button-theme(
  $background: #ecaa53,
  $foreground: #011627,
);

.dialog-container {
  @include tokens($custom-button);
}

:host {
    @include tokens($my-dialog-theme);
}
```

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxDialogComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html)
- [IgxDialogComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-dialog-theme)
- [IgxOverlay](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Theming Dependencies

- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
