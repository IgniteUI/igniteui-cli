# Class: IgcDropdownComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L78)

Represents a DropDown component.

## Element

igc-dropdown

## Fires

igcChange - Emitted when the selected item changes.

## Fires

igcOpening - Emitted just before the dropdown is open.

## Fires

igcOpened - Emitted after the dropdown is open.

## Fires

igcClosing - Emitter just before the dropdown is closed.

## Fires

igcClosed - Emitted after closing the dropdown.

## Slot

target - Renders the dropdown's target element.

## Slot

- Renders the dropdown list items.

## Csspart

base - The dropdown list wrapper container.

## Csspart

list - The dropdown list element.

## Extends

- `EventEmitterInterface`\<`IgcDropdownComponentEventMap`, `this`\> & `IgcBaseComboBoxLikeComponent`\<`this`\>

## Other

### distance

> **distance**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:158](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L158)

The distance from the target element.

#### Attr

***

### flip

> **flip**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:151](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L151)

Whether the component should be flipped to the opposite side of the target once it's about to overflow the visible area.
When true, once enough space is detected on its preferred side, it will flip back.

#### Attr

***

### keepOpenOnOutsideClick

> **keepOpenOnOutsideClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L42)

Whether the component dropdown should be kept open on clicking outside of it.

#### Attr

keep-open-on-outside-click

#### Inherited from

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).keepOpenOnOutsideClick`

***

### keepOpenOnSelect

> **keepOpenOnSelect**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L31)

Whether the component dropdown should be kept open on selection.

#### Attr

keep-open-on-select

#### Inherited from

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).keepOpenOnSelect`

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L49)

Sets the open state of the component.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).open`

***

### placement

> **placement**: [`PopoverPlacement`](../type-aliases/PopoverPlacement.md) = `'bottom-start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:136](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L136)

The preferred placement of the component around the target element.

#### Attr

***

### sameWidth

> **sameWidth**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:165](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L165)

Whether the dropdown's width should be the same as the target's one.

#### Attr

same-width

***

### scrollStrategy

> **scrollStrategy**: `PopoverScrollStrategy` = `'scroll'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L143)

Determines the behavior of the component during scrolling of the parent container.

#### Attr

scroll-strategy

***

### tagName

> `readonly` `static` **tagName**: `"igc-dropdown"` = `'igc-dropdown'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:82](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L82)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

***

### groups

#### Get Signature

> **get** **groups**(): [`IgcDropdownGroupComponent`](IgcDropdownGroupComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:175](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L175)

Returns the group items of the dropdown.

##### Returns

[`IgcDropdownGroupComponent`](IgcDropdownGroupComponent.md)[]

***

### items

#### Get Signature

> **get** **items**(): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:168](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L168)

Returns the items of the dropdown.

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md)[]

***

### selectedItem

#### Get Signature

> **get** **selectedItem**(): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:185](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L185)

Returns the selected item from the dropdown or null.

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:405](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L405)

Clears the current selection of the dropdown.

#### Returns

`void`

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L107)

Hides the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).hide`

***

### navigateTo()

Navigates to the specified item. If it exists, returns the found item, otherwise - null.

#### Call Signature

> **navigateTo**(`value`): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:375](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L375)

Navigates to the item with the specified value. If it exists, returns the found item, otherwise - null.

##### Parameters

###### value

`string`

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

#### Call Signature

> **navigateTo**(`index`): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:378](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L378)

Navigates to the item at the specified index. If it exists, returns the found item, otherwise - null.

##### Parameters

###### index

`number`

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

***

### select()

Selects the specified item. If it exists, returns the found item, otherwise - null.

#### Call Signature

> **select**(`value`): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:393](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L393)

Selects the item with the specified value. If it exists, returns the found item, otherwise - null.

##### Parameters

###### value

`string`

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

#### Call Signature

> **select**(`index`): [`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:396](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L396)

Selects the item at the specified index. If it exists, returns the found item, otherwise - null.

##### Parameters

###### index

`number`

##### Returns

[`IgcDropdownItemComponent`](IgcDropdownItemComponent.md) \| `null`

***

### show()

> **show**(`target?`): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:358](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L358)

Shows the component.

#### Parameters

##### target?

`string` \| `HTMLElement`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).show`

***

### toggle()

> **toggle**(`target?`): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:367](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L367)

Toggles the open state of the component.

#### Parameters

##### target?

`string` \| `HTMLElement`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).toggle`

## lifecycle

### disconnectedCallback()

> **disconnectedCallback**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dropdown/dropdown.ts:238](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dropdown/dropdown.ts#L238)

Invoked when the component is removed from the document's DOM.

This callback is the main signal to the element that it may no longer be
used. `disconnectedCallback()` should ensure that nothing is holding a
reference to the element (such as event listeners added to nodes external
to the element), so that it is free to be garbage collected.

```ts
disconnectedCallback() {
  super.disconnectedCallback();
  window.removeEventListener('keydown', this._handleKeydown);
}
```

An element may be re-connected after being disconnected.

#### Returns

`void`

#### Overrides

`EventEmitterMixin< IgcDropdownComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent).disconnectedCallback`
