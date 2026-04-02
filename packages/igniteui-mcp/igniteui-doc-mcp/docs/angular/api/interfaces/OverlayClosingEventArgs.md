# Interface: OverlayClosingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L160)

## Extends

- [`OverlayEventArgs`](OverlayEventArgs.md).[`CancelableBrowserEventArgs`](CancelableBrowserEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableBrowserEventArgs`](CancelableBrowserEventArgs.md).[`cancel`](CancelableBrowserEventArgs.md#cancel)

***

### componentRef?

> `optional` **componentRef?**: `ComponentRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L148)

Available when `Type<T>` is provided to the `attach()` method and allows access to the created Component instance

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`componentRef`](OverlayEventArgs.md#componentref)

***

### elementRef?

> `optional` **elementRef?**: `ElementRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L150)

Will provide the elementRef of the markup that will be displayed in the overlay

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`elementRef`](OverlayEventArgs.md#elementref)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L154)

Will provide the original keyboard event if closed from ESC or click

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`event`](OverlayEventArgs.md#event)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:146](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L146)

Id of the overlay generated with `attach()` method

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`id`](OverlayEventArgs.md#id)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`owner`](OverlayEventArgs.md#owner)

***

### settings?

> `optional` **settings?**: [`OverlaySettings`](OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/overlay/utilities.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/overlay/utilities.ts#L152)

Will provide the overlay settings which will be used when the component is attached

#### Inherited from

[`OverlayEventArgs`](OverlayEventArgs.md).[`settings`](OverlayEventArgs.md#settings)
