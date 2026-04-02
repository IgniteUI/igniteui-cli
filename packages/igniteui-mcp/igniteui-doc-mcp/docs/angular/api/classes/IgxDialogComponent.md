# Class: IgxDialogComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L47)

**Ignite UI for Angular Dialog Window** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)

The Ignite UI Dialog Window presents a dialog window to the user which can simply display messages or display
more complicated visuals such as a user sign-in form.  It also provides a right and left button
which can be used for custom actions.

Example:
```html
<button type="button" igxButton (click)="form.open()">Show Dialog</button>
<igx-dialog #form title="Sign In" rightButtonLabel="OK">
  <div>
    <igx-input-group>
      <input type="text" igxInput/>
      <label igxLabel>Username</label>
    </igx-input-group>
  </div>
  <div>
    <igx-input-group>
      <input type="password" igxInput/>
      <label igxLabel>Password</label>
    </igx-input-group>
  </div>
</igx-dialog>
```

## Implements

- [`IToggleView`](../interfaces/IToggleView.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxDialogComponent**(): `IgxDialogComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:436](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L436)

#### Returns

`IgxDialogComponent`

## Properties

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L293)

An event that is emitted after the dialog is closed.
```html
<igx-dialog (closed)="onDialogClosedHandler($event)" title="Confirmation" leftButtonLabel="Cancel" rightButtonLabel="OK">
</igx-dialog>
```

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:283](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L283)

An event that is emitted before the dialog is closed.
```html
<igx-dialog (closing)="onDialogCloseHandler($event)" title="Confirmation" leftButtonLabel="Cancel" rightButtonLabel="OK">
</igx-dialog>
```

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:423](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L423)

***

### focusTrap

> **focusTrap**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L111)

Set whether the Tab key focus is trapped within the dialog when opened.
Defaults to `true`.
```html
<igx-dialog focusTrap="false""></igx-dialog>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L69)

Sets the value of the `id` attribute. If not provided it will be automatically generated.
```html
<igx-dialog [id]="'igx-dialog-56'" #alert title="Notification"
 leftButtonLabel="OK" (leftButtonSelect)="alert.close()">
</igx-dialog>
```

***

### leftButtonLabel

> **leftButtonLabel**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L138)

Sets the `label` of the left button of the dialog.
```html
<igx-dialog leftButtonLabel="OKAY" #alert title="Notification"  (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### leftButtonRipple

> **leftButtonRipple**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L161)

Sets the left button `ripple`. The `ripple` animates a click/tap to a component as a series of fading waves.
The property accepts all valid CSS color property values.
```html
<igx-dialog leftButtonRipple="green" leftButtonLabel="OKAY" #alert (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### leftButtonSelect

> **leftButtonSelect**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:303](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L303)

An event that is emitted when the left button is clicked.
```html
<igx-dialog (leftButtonSelect)="onDialogOKSelected($event)" #dialog leftButtonLabel="OK" rightButtonLabel="Cancel">
</igx-dialog>
```

***

### leftButtonType

> **leftButtonType**: [`IgxButtonType`](../type-aliases/IgxButtonType.md) = `'flat'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:151](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L151)

Sets the left button `type`. The types are `flat`, `contained` and `fab`.
The `flat` type button is a rectangle and doesn't have a shadow. <br>
The `contained` type button is also a rectangle but has a shadow. <br>
The `fab` type button is a circle with a shadow. <br>
The default value is `flat`.
```html
<igx-dialog leftButtonType="contained" leftButtonLabel="OKAY" #alert (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### message

> **message**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L129)

Sets the message text of the dialog.
```html
<igx-dialog message="Your email was sent!" #alert leftButtonLabel="OK" (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:273](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L273)

An event that is emitted after the dialog is opened.
```html
<igx-dialog (opened)="onDialogOpenedHandler($event)" (leftButtonSelect)="dialog.close()" rightButtonLabel="OK">
</igx-dialog>
```

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L263)

An event that is emitted before the dialog is opened.
```html
<igx-dialog (opening)="onDialogOpenHandler($event)" (leftButtonSelect)="dialog.close()" rightButtonLabel="OK">
</igx-dialog>
```

***

### rightButtonLabel

> **rightButtonLabel**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:170](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L170)

Sets the `label` of the right button of the dialog.
```html
<igx-dialog rightButtonLabel="OKAY" #alert title="Notification"  (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### rightButtonRipple

> **rightButtonRipple**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:192](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L192)

Sets the right button `ripple`.
```html
<igx-dialog rightButtonRipple="green" rightButtonLabel="OKAY" #alert (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### rightButtonSelect

> **rightButtonSelect**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L315)

An event that is emitted when the right button is clicked.
```html
<igx-dialog (rightButtonSelect)="onDialogOKSelected($event)"
#dialog title="Confirmation" (leftButtonSelect)="dialog.close()" rightButtonLabel="OK"
rightButtonRipple="#4CAF50" closeOnOutsideSelect="true">
</igx-dialog>
```

***

### rightButtonType

> **rightButtonType**: [`IgxButtonType`](../type-aliases/IgxButtonType.md) = `'flat'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L183)

Sets the right button `type`. The types are `flat`, `contained` and `fab`.
The `flat` type button is a rectangle and doesn't have a shadow. <br>
The `contained` type button is also a rectangle but has a shadow. <br>
The `fab` type button is a circle with a shadow. <br>
The default value is `flat`.
```html
<igx-dialog rightButtonType="fab" rightButtonLabel="OKAY" #alert (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### title

> **title**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L120)

Sets the title of the dialog.
```html
<igx-dialog title="Notification" #alert leftButtonLabel="OK" (leftButtonSelect)="alert.close()"></igx-dialog>
```

***

### toggleRef

> **toggleRef**: [`IgxToggleDirective`](IgxToggleDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L57)

## Accessors

### closeOnEscape

#### Get Signature

> **get** **closeOnEscape**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L94)

Controls whether the dialog should close when `Esc` key is pressed. Defaults to `true`
```html
<igx-dialog [closeOnEscape]="false" ></igx-dialog>
```

##### Returns

`boolean`

#### Set Signature

> **set** **closeOnEscape**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L98)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### closeOnOutsideSelect

#### Get Signature

> **get** **closeOnOutsideSelect**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L203)

Gets/Sets whether the dialog should close on click outside the component. By default it's false.
```html
<igx-dialog closeOnOutsideSelect="true" leftButtonLabel="Cancel" (leftButtonSelect)="dialog.close()"
rightButtonLabel="OK" rightButtonRipple="#4CAF50" (rightButtonSelect)="onDialogOKSelected($event)">
</igx-dialog>
```

##### Returns

`boolean`

#### Set Signature

> **set** **closeOnOutsideSelect**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L207)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### isCollapsed

#### Get Signature

> **get** **isCollapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:380](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L380)

##### Returns

`boolean`

***

### isModal

#### Get Signature

> **get** **isModal**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L78)

Controls whether the dialog should be shown as modal. Defaults to `true`
```html
<igx-dialog [isModal]="false" ></igx-dialog>
```

##### Returns

`boolean`

#### Set Signature

> **set** **isModal**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L82)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### isOpen

#### Get Signature

> **get** **isOpen**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L363)

State of the dialog.

```typescript
// get
let dialogIsOpen = this.dialog.isOpen;
```

```html
<!--set-->
<igx-dialog [isOpen]='false'></igx-dialog>
```

Two-way data binding.
```html
<!--set-->
<igx-dialog [(isOpen)]='model.isOpen'></igx-dialog>
```

##### Returns

`boolean`

#### Set Signature

> **set** **isOpen**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:366](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L366)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### positionSettings

#### Get Signature

> **get** **positionSettings**(): [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:220](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L220)

Get the position and animation settings used by the dialog.
```typescript
@ViewChild('alert', { static: true }) public alert: IgxDialogComponent;
let currentPosition: PositionSettings = this.alert.positionSettings
```

##### Returns

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Set Signature

> **set** **positionSettings**(`settings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:242](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L242)

Set the position and animation settings used by the dialog.
```typescript
import { slideInLeft, slideOutRight } from 'igniteui-angular';
...
@ViewChild('alert', { static: true }) public alert: IgxDialogComponent;
 public newPositionSettings: PositionSettings = {
     openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
     closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
     horizontalDirection: HorizontalAlignment.Left,
     verticalDirection: VerticalAlignment.Middle,
     horizontalStartPoint: HorizontalAlignment.Left,
     verticalStartPoint: VerticalAlignment.Middle,
     minSize: { height: 100, width: 100 }
 };
this.alert.positionSettings = this.newPositionSettings;
```

##### Parameters

###### settings

[`PositionSettings`](../interfaces/PositionSettings.md)

##### Returns

`void`

***

### role

#### Get Signature

> **get** **role**(): `"dialog"` \| `"alertdialog"` \| `"alert"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:395](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L395)

Returns the value of the role of the dialog. The valid values are `dialog`, `alertdialog`, `alert`.
```typescript
@ViewChild("MyDialog")
public dialog: IgxDialogComponent;
ngAfterViewInit() {
    let dialogRole = this.dialog.role;
}
 ```

##### Returns

`"dialog"` \| `"alertdialog"` \| `"alert"`

***

### state

#### Get Signature

> **get** **state**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:339](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L339)

Returns the value of state. Possible state values are "open" or "close".
```typescript
@ViewChild("MyDialog")
public dialog: IgxDialogComponent;
ngAfterViewInit() {
    let dialogState = this.dialog.state;
}
```

##### Returns

`string`

***

### titleId

#### Get Signature

> **get** **titleId**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L419)

Returns the value of the title id.
```typescript
 @ViewChild("MyDialog")
public dialog: IgxDialogComponent;
ngAfterViewInit() {
    let dialogTitle = this.dialog.titleId;
}
```

##### Returns

`string`

## Methods

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:486](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L486)

A method that that closes the dialog.

#### Returns

`void`

#### Member Of

IgxDialogComponent
```html
<button type="button" (click)="dialog.close() igxButton="contained">Trigger Dialog</button>
<igx-dialog #dialog></igx-dialog>
```

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`close`](../interfaces/IToggleView.md#close)

***

### ngAfterContentInit()

> **ngAfterContentInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:448](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L448)

#### Returns

`void`

***

### open()

> **open**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:463](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L463)

A method that opens the dialog.

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md) = `...`

#### Returns

`void`

#### Member Of

IgxDialogComponent
```html
<button type="button" (click)="dialog.open() igxButton="contained">Trigger Dialog</button>
<igx-dialog #dialog></igx-dialog>
```

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`open`](../interfaces/IToggleView.md#open)

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts:501](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/dialog/src/dialog/dialog.component.ts#L501)

A method that opens/closes the dialog.

#### Returns

`void`

#### Member Of

IgxDialogComponent
```html
<button type="button" (click)="dialog.toggle() igxButton="contained">Trigger Dialog</button>
<igx-dialog #dialog></igx-dialog>
```

#### Implementation of

[`IToggleView`](../interfaces/IToggleView.md).[`toggle`](../interfaces/IToggleView.md#toggle)
