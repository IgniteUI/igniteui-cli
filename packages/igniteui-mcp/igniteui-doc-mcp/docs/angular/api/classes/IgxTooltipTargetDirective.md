# Class: IgxTooltipTargetDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:49](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L49)

**Ignite UI for Angular Tooltip Target** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tooltip)

The Ignite UI for Angular Tooltip Target directive is used to mark an HTML element in the markup as one that has a tooltip.
The tooltip target is used in combination with the Ignite UI for Angular Tooltip by assigning the exported tooltip reference to the
target's selector property.

Example:
```html
<button type="button" igxButton [igxTooltipTarget]="tooltipRef">Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

## Extends

- [`IgxToggleActionDirective`](IgxToggleActionDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTooltipTargetDirective**(): `IgxTooltipTargetDirective`

#### Returns

`IgxTooltipTargetDirective`

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`constructor`](IgxToggleActionDirective.md#constructor)

## Properties

### \_overlayDefaults

> `protected` **\_overlayDefaults**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:471](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L471)

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`_overlayDefaults`](IgxToggleActionDirective.md#_overlaydefaults)

***

### \_target

> `protected` **\_target**: `string` \| [`IToggleView`](../interfaces/IToggleView.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:472](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L472)

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`_target`](IgxToggleActionDirective.md#_target)

***

### element

> `protected` **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L419)

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`element`](IgxToggleActionDirective.md#element)

***

### hideDelay

> **hideDelay**: `number` = `300`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L82)

Gets/sets the amount of milliseconds that should pass before hiding the tooltip.

```typescript
// get
let tooltipHideDelay = this.tooltipTarget.hideDelay;
```

```html
<!--set-->
<button type="button" igxButton [igxTooltipTarget]="tooltipRef" [hideDelay]="1500">Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

***

### navigationService

> `protected` **navigationService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L420)

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`navigationService`](IgxToggleActionDirective.md#navigationservice)

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:449](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L449)

Determines where the toggle element overlay should be attached.

```html
<!--set-->
<div igxToggleAction [igxToggleOutlet]="outlet"></div>
```
Where `outlet` in an instance of `IgxOverlayOutletDirective` or an `ElementRef`

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`outlet`](IgxToggleActionDirective.md#outlet)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:437](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L437)

Provide settings that control the toggle overlay positioning, interaction and scroll behavior.
```typescript
const settings: OverlaySettings = {
     closeOnOutsideClick: false,
     modal: false
 }
```
---
```html
<!--set-->
<div igxToggleAction [overlaySettings]="settings"></div>
```

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`overlaySettings`](IgxToggleActionDirective.md#overlaysettings)

***

### showDelay

> **showDelay**: `number` = `200`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L65)

Gets/sets the amount of milliseconds that should pass before showing the tooltip.

```typescript
// get
let tooltipShowDelay = this.tooltipTarget.showDelay;
```

```html
<!--set-->
<button type="button" igxButton [igxTooltipTarget]="tooltipRef" [showDelay]="1500">Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

***

### tooltipDisabled

> **tooltipDisabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:233](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L233)

Specifies if the tooltip should not show when hovering its target with the mouse. (defaults to false)
While setting this property to 'true' will disable the user interactions that shows/hides the tooltip,
the developer will still be able to show/hide the tooltip through the API.

```typescript
// get
let tooltipDisabledValue = this.tooltipTarget.tooltipDisabled;
```

```html
<!--set-->
<button type="button" igxButton [igxTooltipTarget]="tooltipRef" [tooltipDisabled]="true">Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

***

### tooltipHide

> **tooltipHide**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:367](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L367)

Emits an event when the tooltip that is associated with this target starts hiding.
This event is fired before the start of the countdown to hiding the tooltip.

```typescript
tooltipHiding(args: ITooltipHideEventArgs) {
   alert("Tooltip started hiding!");
}
```

```html
<button type="button" igxButton [igxTooltipTarget]="tooltipRef" (tooltipHide)='tooltipHiding($event)'>Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

***

### tooltipShow

> **tooltipShow**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:349](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L349)

Emits an event when the tooltip that is associated with this target starts showing.
This event is fired before the start of the countdown to showing the tooltip.

```typescript
tooltipShowing(args: ITooltipShowEventArgs) {
   alert("Tooltip started showing!");
}
```

```html
<button type="button" igxButton [igxTooltipTarget]="tooltipRef" (tooltipShow)='tooltipShowing($event)'>Hover me</button>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

## Accessors

### closeTemplate

#### Get Signature

> **get** **closeTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L176)

##### Returns

`any`

#### Set Signature

> **set** **closeTemplate**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L171)

Allows full control over the appearance of the close button inside the tooltip.

```typescript
// get
let customCloseTemplate = this.tooltip.customCloseTemplate;
```

```typescript
// set
this.tooltip.customCloseTemplate = TemplateRef<any>;
```

```html
<!--set-->
<igx-icon igxTooltipTarget [closeButtonTemplate]="customClose" [tooltip]="'Infragistics Inc. HQ'">info</igx-icon>
<ng-template #customClose>
     <button class="my-close-btn">Close Me</button>
</ng-template>
```

##### Parameters

###### value

`TemplateRef`\<`any`\>

##### Returns

`void`

***

### hasArrow

#### Get Signature

> **get** **hasArrow**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L111)

##### Returns

`boolean`

#### Set Signature

> **set** **hasArrow**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L104)

Controls whether to display an arrow indicator for the tooltip.
Set to true to show the arrow. Default value is `false`.

```typescript
// get
let isArrowDisabled = this.tooltip.hasArrow;
```

```typescript
// set
this.tooltip.hasArrow = true;
```

```html
<!--set-->
<igx-icon igxTooltipTarget [hasArrow]="true" [tooltip]="'Infragistics Inc. HQ'">info</igx-icon>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### hideTriggers

#### Get Signature

> **get** **hideTriggers**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L265)

Which event triggers will hide the tooltip.
Expects a comma-separated string of different event triggers.
Defaults to `pointerleave` and `click`.
```html
<igx-icon [igxTooltipTarget]="tooltipRef" [hideTriggers]="'keypress,blur'">info</igx-icon>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

##### Returns

`string`

#### Set Signature

> **set** **hideTriggers**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L269)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:318](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L318)

Gets the respective native element of the directive.

```typescript
let tooltipTargetElement = this.tooltipTarget.nativeElement;
```

##### Returns

`any`

***

### positionSettings

#### Get Signature

> **get** **positionSettings**(): [`PositionSettings`](../interfaces/PositionSettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L187)

Get the position and animation settings used by the tooltip.
```typescript
let positionSettings = this.tooltipTarget.positionSettings;
```

##### Returns

[`PositionSettings`](../interfaces/PositionSettings.md)

#### Set Signature

> **set** **positionSettings**(`settings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L209)

Set the position and animation settings used by the tooltip.
```html
<igx-icon [igxTooltipTarget]="tooltipRef" [positionSettings]="newPositionSettings">info</igx-icon>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```
```typescript

import { PositionSettings, HorizontalAlignment, VerticalAlignment } from 'igniteui-angular';
...
public newPositionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Right,
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalDirection: VerticalAlignment.Top,
    verticalStartPoint: VerticalAlignment.Top,
};
```

##### Parameters

###### settings

[`PositionSettings`](../interfaces/PositionSettings.md)

##### Returns

`void`

***

### showTriggers

#### Get Signature

> **get** **showTriggers**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L245)

Which event triggers will show the tooltip.
Expects a comma-separated string of different event triggers.
Defaults to `pointerenter`.
```html
<igx-icon [igxTooltipTarget]="tooltipRef" [showTriggers]="'click,focus'">info</igx-icon>
<span #tooltipRef="tooltip" igxTooltip>Hello there, I am a tooltip!</span>
```

##### Returns

`string`

#### Set Signature

> **set** **showTriggers**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:249](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L249)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### sticky

#### Get Signature

> **get** **sticky**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L144)

##### Returns

`boolean`

#### Set Signature

> **set** **sticky**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L134)

Specifies if the tooltip remains visible until the user closes it via the close button or Esc key.

```typescript
// get
let isSticky = this.tooltip.sticky;
```

```typescript
// set
this.tooltip.sticky = true;
```

```html
<!--set-->
<igx-icon igxTooltipTarget [sticky]="true" [tooltip]="'Infragistics Inc. HQ'">info</igx-icon>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### tooltip

#### Set Signature

> **set** **tooltip**(`content`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L302)

Specifies a plain text as tooltip content.
```html
<igx-icon igxTooltipTarget [tooltip]="'Infragistics Inc. HQ'">info</igx-icon>
```

##### Parameters

###### content

`any`

##### Returns

`void`

***

### tooltipHidden

#### Get Signature

> **get** **tooltipHidden**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:329](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L329)

Indicates if the tooltip that is is associated with this target is currently hidden.

```typescript
let tooltipHiddenValue = this.tooltipTarget.tooltipHidden;
```

##### Returns

`boolean`

## Methods

### hideTooltip()

> **hideTooltip**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:484](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L484)

Hides the tooltip if not already hidden.

```typescript
this.tooltipTarget.hideTooltip();
```

#### Returns

`void`

***

### showTooltip()

> **showTooltip**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts:473](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/tooltip/tooltip-target.directive.ts#L473)

Shows the tooltip if not already shown.

```typescript
this.tooltipTarget.showTooltip();
```

#### Returns

`void`

***

### updateOverlaySettings()

> `protected` **updateOverlaySettings**(`settings`): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:509](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L509)

Updates provided overlay settings

#### Parameters

##### settings

[`OverlaySettings`](../interfaces/OverlaySettings.md)

settings to update

#### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

returns updated copy of provided overlay settings

#### Inherited from

[`IgxToggleActionDirective`](IgxToggleActionDirective.md).[`updateOverlaySettings`](IgxToggleActionDirective.md#updateoverlaysettings)
