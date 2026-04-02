# Interface: OverlayEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L144)

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`OverlayCancelableEventArgs`](OverlayCancelableEventArgs.md)
- [`OverlayClosingEventArgs`](OverlayClosingEventArgs.md)

## Properties

### componentRef?

> `optional` **componentRef?**: `ComponentRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L148)

Available when `Type<T>` is provided to the `attach()` method and allows access to the created Component instance

***

### elementRef?

> `optional` **elementRef?**: `ElementRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L150)

Will provide the elementRef of the markup that will be displayed in the overlay

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L154)

Will provide the original keyboard event if closed from ESC or click

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:146](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L146)

Id of the overlay generated with `attach()` method

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### settings?

> `optional` **settings?**: [`OverlaySettings`](OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L152)

Will provide the overlay settings which will be used when the component is attached
