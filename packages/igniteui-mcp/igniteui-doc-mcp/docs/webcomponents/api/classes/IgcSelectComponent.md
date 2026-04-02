# Class: IgcSelectComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:119](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L119)

Represents a control that provides a menu of options.

## Element

igc-select

## Slot

- Renders the list of select items.

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after input.

## Slot

header - Renders a container before the list of options.

## Slot

footer - Renders a container after the list of options.

## Slot

helper-text - Renders content below the input.

## Slot

toggle-icon - Renders content inside the suffix container.

## Slot

toggle-icon-expanded - Renders content for the toggle icon when the component is in open state.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcChange - Emitted when the control's checked state changes.

## Fires

igcOpening - Emitted just before the list of options is opened.

## Fires

igcOpened - Emitted after the list of options is opened.

## Fires

igcClosing - Emitter just before the list of options is closed.

## Fires

igcClosed - Emitted after the list of options is closed.

## Csspart

list - The list wrapping container for the items of the igc-select.

## Csspart

input - The encapsulated igc-input of the igc-select.

## Csspart

label - The encapsulated text label of the igc-select.

## Csspart

prefix - The prefix wrapper of the input of the igc-select.

## Csspart

suffix - The suffix wrapper of the input of the igc-select.

## Csspart

toggle-icon - The toggle icon wrapper of the igc-select.

## Csspart

helper-text - The helper text wrapper of the igc-select.

## Extends

- `FormRequiredInterface`\<`this`\> & `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcSelectComponentEventMap`, `this`\> & `IgcBaseComboBoxLikeComponent`\<`this`\>

## Properties

### autofocus

> **autofocus**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:218](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L218)

The autofocus attribute of the control.

#### Attr

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).autofocus`

***

### disabled

> **disabled**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:29](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L29)

The disabled state of the component.

#### Attr

#### Default

```ts
false
```

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).disabled`

***

### distance

> **distance**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:225](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L225)

The distance of the select dropdown from its input.

#### Attr

***

### invalid

> **invalid**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L36)

Sets the control into invalid state (visual state only).

#### Attr

#### Default

```ts
false
```

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).invalid`

***

### keepOpenOnOutsideClick

> **keepOpenOnOutsideClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L42)

Whether the component dropdown should be kept open on clicking outside of it.

#### Attr

keep-open-on-outside-click

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).keepOpenOnOutsideClick`

***

### keepOpenOnSelect

> **keepOpenOnSelect**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L31)

Whether the component dropdown should be kept open on selection.

#### Attr

keep-open-on-select

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).keepOpenOnSelect`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:232](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L232)

The label attribute of the control.

#### Attr

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).name`

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L49)

Sets the open state of the component.

#### Attr

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).open`

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:211](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L211)

The outlined attribute of the control.

#### Attr

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:239](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L239)

The placeholder attribute of the control.

#### Attr

***

### placement

> **placement**: [`PopoverPlacement`](../type-aliases/PopoverPlacement.md) = `'bottom-start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:245](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L245)

The preferred placement of the select dropdown around its input.

#### Attr

***

### scrollStrategy

> **scrollStrategy**: `PopoverScrollStrategy` = `'scroll'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:252](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L252)

Determines the behavior of the component during scrolling of the parent container.

#### Attr

scroll-strategy

***

### tagName

> `readonly` `static` **tagName**: `"igc-select"` = `'igc-select'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:125](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L125)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### defaultValue

#### Set Signature

> **set** **defaultValue**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:156](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L156)

The initial value of the component.

##### Parameters

###### value

`unknown`

##### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).defaultValue`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).form`

***

### groups

#### Get Signature

> **get** **groups**(): [`IgcSelectGroupComponent`](IgcSelectGroupComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:262](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L262)

Returns the groups of the igc-select component.

##### Returns

[`IgcSelectGroupComponent`](IgcSelectGroupComponent.md)[]

***

### items

#### Get Signature

> **get** **items**(): [`IgcSelectItemComponent`](IgcSelectItemComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:255](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L255)

Returns the items of the igc-select component.

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md)[]

***

### required

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:174](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L174)

When set, makes the component a required field for validation.

##### Attr

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).required`

***

### selectedItem

#### Get Signature

> **get** **selectedItem**(): [`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:269](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L269)

Returns the selected item from the dropdown or null.

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validationMessage`

***

### validity

#### Get Signature

> **get** **validity**(): `ValidityState`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L51)

Returns a ValidityState object which represents the different validity states
the element can be in, with respect to constraint validation.

##### Returns

`ValidityState`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L196)

The value attribute of the control.

##### Attr

##### Parameters

###### value

`string` \| `undefined`

##### Returns

`void`

***

### willValidate

#### Get Signature

> **get** **willValidate**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:60](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L60)

A boolean value which returns true if the element is a submittable element
that is a candidate for constraint validation.

##### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:564](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L564)

Removes focus from the component.

#### Returns

`void`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).checkValidity`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:607](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L607)

Resets the current value and selection of the component.

#### Returns

`void`

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:558](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L558)

Sets focus on the component.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).focus`

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L107)

Hides the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).hide`

***

### navigateTo()

Navigates to the specified item. If it exists, returns the found item, otherwise - null.

#### Call Signature

> **navigateTo**(`value`): [`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:577](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L577)

Navigates to the item with the specified value. If it exists, returns the found item, otherwise - null.

##### Parameters

###### value

`string`

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

#### Call Signature

> **navigateTo**(`index`): [`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:580](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L580)

Navigates to the item at the specified index. If it exists, returns the found item, otherwise - null.

##### Parameters

###### index

`number`

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:569](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L569)

Checks the validity of the control and moves the focus to it if it is not valid.

#### Returns

`boolean`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).reportValidity`

***

### select()

Selects the specified item. If it exists, returns the found item, otherwise - null.

#### Call Signature

> **select**(`value`): [`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:595](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L595)

Selects the item with the specified value. If it exists, returns the found item, otherwise - null.

##### Parameters

###### value

`string`

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

#### Call Signature

> **select**(`index`): [`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/select/select.ts:598](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/select/select.ts#L598)

Selects the item at the specified index. If it exists, returns the found item, otherwise - null.

##### Parameters

###### index

`number`

##### Returns

[`IgcSelectItemComponent`](IgcSelectItemComponent.md) \| `null`

***

### setCustomValidity()

> **setCustomValidity**(`message`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:149](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L149)

Sets a custom validation message for the control.
As long as `message` is not empty, the control is considered invalid.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).setCustomValidity`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L102)

Shows the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).show`

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:112](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L112)

Toggles the open state of the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcSelectComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).toggle`
