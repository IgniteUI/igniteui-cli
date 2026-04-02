# Class: IgxToggleActionDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L418)

## Extended by

- [`IgxTooltipTargetDirective`](IgxTooltipTargetDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxToggleActionDirective**(): `IgxToggleActionDirective`

#### Returns

`IgxToggleActionDirective`

## Properties

### \_overlayDefaults

> `protected` **\_overlayDefaults**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:471](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L471)

***

### \_target

> `protected` **\_target**: `string` \| [`IToggleView`](../interfaces/IToggleView.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:472](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L472)

***

### element

> `protected` **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L419)

***

### navigationService

> `protected` **navigationService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/toggle/toggle.directive.ts#L420)

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

## Methods

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
