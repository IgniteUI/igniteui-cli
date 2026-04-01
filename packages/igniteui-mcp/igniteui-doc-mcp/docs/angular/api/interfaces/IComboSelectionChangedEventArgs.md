# Interface: IComboSelectionChangedEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L26)

Event emitted when the Combo's selection has changed

## Extends

- [`IBaseEventArgs`](IBaseEventArgs.md)

## Extended by

- [`IComboSelectionChangingEventArgs`](IComboSelectionChangingEventArgs.md)

## Properties

### added

> **added**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L36)

An array containing the items added to the selection (if any)

***

### displayText

> **displayText**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L40)

The display text of the combo text box

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L42)

The user interaction that triggered the selection change

***

### newSelection

> **newSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L34)

An array containing the new selection items

***

### newValue

> **newValue**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L30)

An array containing the new selection items

***

### oldSelection

> **oldSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L32)

An array containing the old selection items

***

### oldValue

> **oldValue**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L28)

An array containing the old selection values

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IBaseEventArgs`](IBaseEventArgs.md).[`owner`](IBaseEventArgs.md#owner)

***

### removed

> **removed**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L38)

An array containing the items removed from the selection (if any)
