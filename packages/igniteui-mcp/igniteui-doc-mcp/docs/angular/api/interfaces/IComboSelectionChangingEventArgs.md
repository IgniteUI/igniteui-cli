# Interface: IComboSelectionChangingEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L46)

Event emitted when the Combo's selection is changing

## Extends

- [`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`IBaseCancelableEventArgs`](IBaseCancelableEventArgs.md)

## Properties

### added

> **added**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L36)

An array containing the items added to the selection (if any)

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`added`](IComboSelectionChangedEventArgs.md#added)

***

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L411)

Provides the ability to cancel the event.

#### Inherited from

[`IBaseCancelableEventArgs`](IBaseCancelableEventArgs.md).[`cancel`](IBaseCancelableEventArgs.md#cancel)

***

### displayText

> **displayText**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L40)

The display text of the combo text box

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`displayText`](IComboSelectionChangedEventArgs.md#displaytext)

***

### event?

> `optional` **event?**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L42)

The user interaction that triggered the selection change

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`event`](IComboSelectionChangedEventArgs.md#event)

***

### newSelection

> **newSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L34)

An array containing the new selection items

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`newSelection`](IComboSelectionChangedEventArgs.md#newselection)

***

### newValue

> **newValue**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L30)

An array containing the new selection items

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`newValue`](IComboSelectionChangedEventArgs.md#newvalue)

***

### oldSelection

> **oldSelection**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L32)

An array containing the old selection items

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`oldSelection`](IComboSelectionChangedEventArgs.md#oldselection)

***

### oldValue

> **oldValue**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L28)

An array containing the old selection values

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`oldValue`](IComboSelectionChangedEventArgs.md#oldvalue)

***

### owner?

> `optional` **owner?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L418)

Provides reference to the owner component.

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`owner`](IComboSelectionChangedEventArgs.md#owner)

***

### removed

> **removed**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L38)

An array containing the items removed from the selection (if any)

#### Inherited from

[`IComboSelectionChangedEventArgs`](IComboSelectionChangedEventArgs.md).[`removed`](IComboSelectionChangedEventArgs.md#removed)
