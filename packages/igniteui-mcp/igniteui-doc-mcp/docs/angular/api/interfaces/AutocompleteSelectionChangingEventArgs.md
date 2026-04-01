# Interface: AutocompleteSelectionChangingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L23)

Interface that encapsulates onItemSelection event arguments - new value and cancel selection.

## Export

## Extends

- [`CancelableEventArgs`](CancelableEventArgs.md).[`IBaseEventArgs`](IBaseEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`CancelableEventArgs`](CancelableEventArgs.md).[`cancel`](CancelableEventArgs.md#cancel)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### value

> **value**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L27)

New value selected from the drop down
