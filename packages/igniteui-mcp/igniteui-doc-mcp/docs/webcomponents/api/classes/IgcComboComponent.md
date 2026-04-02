# Class: IgcComboComponent\<T\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:109](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L109)

The Combo component is similar to the Select component in that it provides a list of options from which the user can make a selection.
In contrast to the Select component, the Combo component displays all options in a virtualized list of items,
meaning the combo box can simultaneously show thousands of options, where one or more options can be selected.
Additionally, users can create custom item templates, allowing for robust data visualization.
The Combo component features case-sensitive filtering, grouping, complex data binding, dynamic addition of values and more.

## Element

igc-combo

## Slot

prefix - Renders content before the input of the combo.

## Slot

suffix - Renders content after the input of the combo.

## Slot

header - Renders a container before the list of options of the combo.

## Slot

footer - Renders a container after the list of options of the combo.

## Slot

empty - Renders content when the combo dropdown list has no items/data.

## Slot

helper-text - Renders content below the input of the combo.

## Slot

toggle-icon - Renders content inside the suffix container of the combo.

## Slot

clear-icon - Renders content inside the suffix container of the combo.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Fires

igcChange - Emitted when the control's selection has changed.

## Fires

igcOpening - Emitted just before the list of options is opened.

## Fires

igcOpened - Emitted after the list of options is opened.

## Fires

igcClosing - Emitter just before the list of options is closed.

## Fires

igcClosed - Emitted after the list of options is closed.

## Csspart

label - The encapsulated text label of the combo.

## Csspart

input - The main input field of the combo.

## Csspart

native-input - The native input of the main input field of the combo.

## Csspart

prefix - The prefix wrapper of the combo.

## Csspart

suffix - The suffix wrapper of the combo.

## Csspart

toggle-icon - The toggle icon wrapper of the combo.

## Csspart

clear-icon - The clear icon wrapper of the combo.

## Csspart

case-icon - The case icon wrapper of the combo.

## Csspart

helper-text - The helper text wrapper of the combo.

## Csspart

search-input - The search input field of the combo.

## Csspart

list-wrapper - The list of options wrapper of the combo.

## Csspart

list - The list of options box of the combo.

## Csspart

item - Represents each item in the list of options of the combo.

## Csspart

group-header - Represents each header in the list of options of the combo.

## Csspart

active - Appended to the item parts list when the item is active of the combo.

## Csspart

selected - Appended to the item parts list when the item is selected of the combo.

## Csspart

checkbox - Represents each checkbox of each list item of the combo.

## Csspart

checkbox-indicator - Represents the checkbox indicator of each list item of the combo.

## Csspart

checked - Appended to checkbox parts list when checkbox is checked in the combo.

## Csspart

header - The container holding the header content of the combo.

## Csspart

footer - The container holding the footer content of the combo.

## Csspart

empty - The container holding the empty content of the combo.

## Extends

- `FormRequiredInterface`\<`this`\> & `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcComboComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Type Parameters

### T

`T` *extends* `object` = `any`

## Properties

### autofocus

> **autofocus**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:265](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L265)

The autofocus attribute of the control.

#### Attr

autofocus

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).autofocus`

***

### autofocusList

> **autofocusList**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:272](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L272)

Focuses the list of options when the menu opens.

#### Attr

autofocus-list

***

### caseSensitiveIcon

> **caseSensitiveIcon**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:429](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L429)

Enables the case sensitive search icon in the filtering input.

#### Attr

case-sensitive-icon

***

### disableClear

> **disableClear**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:452](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L452)

Hides the clear button.

#### Attr

disable-clear

#### Default

```ts
false
```

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).disabled`

***

### groupHeaderTemplate

> **groupHeaderTemplate**: `ComboItemTemplate`\<`T`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:469](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L469)

The template used for the content of each combo group header.

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).invalid`

***

### itemTemplate

> **itemTemplate**: `ComboItemTemplate`\<`T`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:460](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L460)

The template used for the content of each combo item.

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:292](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L292)

The label attribute of the control.

#### Attr

label

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).name`

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:325](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L325)

Sets the open state of the component.

#### Attr

open

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:234](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L234)

The outlined attribute of the control.

#### Attr

outlined

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:299](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L299)

The placeholder attribute of the control.

#### Attr

placeholder

***

### tagName

> `readonly` `static` **tagName**: `"igc-combo"` = `'igc-combo'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:116](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L116)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### data

#### Set Signature

> **set** **data**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:214](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L214)

The data source used to generate the list of options.

##### Parameters

###### value

`T`[]

##### Returns

`void`

***

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).defaultValue`

***

### disableFiltering

#### Set Signature

> **set** **disableFiltering**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:437](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L437)

Disables the filtering of the list of options.

##### Attr

disable-filtering

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### displayKey

#### Set Signature

> **set** **displayKey**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:358](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L358)

The key in the data source used to display items in the list.

##### Attr

display-key

##### Parameters

###### value

keyof `T` \| `undefined`

##### Returns

`void`

***

### filteringOptions

#### Set Signature

> **set** **filteringOptions**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:412](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L412)

An object that configures the filtering of the combo.

##### Attr

filtering-options

##### Parameters

###### value

`Partial`\<`FilteringOptions`\<`T`\>\>

##### Returns

`void`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).form`

***

### groupKey

#### Set Signature

> **set** **groupKey**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:374](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L374)

The key in the data source used to group items in the list.

##### Attr

group-key

##### Parameters

###### value

keyof `T` \| `undefined`

##### Returns

`void`

***

### groupSorting

#### Set Signature

> **set** **groupSorting**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:392](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L392)

Sorts the items in each group by ascending or descending order.

##### Attr

group-sorting

##### Default

```ts
asc
```

##### Parameters

###### value

`GroupingDirection`

##### Returns

`void`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:279](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L279)

Gets/Sets the locale used for getting language, affecting resource strings.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### placeholderSearch

#### Set Signature

> **set** **placeholderSearch**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:306](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L306)

The placeholder attribute of the search input.

##### Attr

placeholder-search

##### Parameters

###### value

`string`

##### Returns

`void`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).required`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:331](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L331)

The resource strings for localization.

##### Parameters

###### value

`IComboResourceStrings`

##### Returns

`void`

***

### selection

#### Get Signature

> **get** **selection**(): `T`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:617](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L617)

Returns the current selection as an array of objects as provided in the `data` source.

##### Returns

`T`[]

***

### singleSelect

#### Set Signature

> **set** **singleSelect**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:242](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L242)

Enables single selection mode and moves item filtering to the main input.

##### Attr

single-select

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).validationMessage`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).validity`

***

### value

#### Get Signature

> **get** **value**(): `ComboValue`\<`T`\>[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:515](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L515)

Returns the current selection as a list of comma separated values,
represented by the value key, when provided.

##### Returns

`ComboValue`\<`T`\>[]

#### Set Signature

> **set** **value**(`items`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:503](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L503)

Sets the value (selected items). The passed value must be a valid JSON array.
If the data source is an array of complex objects, the `valueKey` attribute must be set.
Note that when `displayKey` is not explicitly set, it will fall back to the value of `valueKey`.

##### Attr

value

##### Example

```tsx
<igc-combo
 .data=${[
   {
     id: 'BG01',
     name: 'Sofia'
   },
   {
     id: 'BG02',
     name: 'Plovdiv'
   }
 ]}
 display-key='name'
 value-key='id'
 value='["BG01", "BG02"]'>
 </igc-combo>
```

##### Parameters

###### items

`ComboValue`\<`T`\>[]

##### Returns

`void`

***

### valueKey

#### Set Signature

> **set** **valueKey**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:344](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L344)

The key in the data source used when selecting items.

##### Attr

value-key

##### Parameters

###### value

keyof `T` \| `undefined`

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).willValidate`

## Methods

### blur()

> **blur**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:610](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L610)

Removes focus from the component.

#### Returns

`void`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).blur`

***

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).checkValidity`

***

### deselect()

> **deselect**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:670](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L670)

Deselects option(s) in the list by either reference or valueKey.
If not argument is provided all items will be deselected.

#### Parameters

##### items?

`Item`\<`T`\> \| `Item`\<`T`\>[]

One or more items to be deselected. Multiple items should be passed as an array.
When valueKey is specified, the corresponding value should be used in place of the item reference.

#### Returns

`void`

#### Example

```typescript
const combo<IgcComboComponent<T>> = document.querySelector('igc-combo');

// Deselect one item at a time by reference when valueKey is not specified.
combo.deselect(combo.data[0]);

// Deselect multiple items at a time by reference when valueKey is not specified.
combo.deselect([combo.data[0], combo.data[1]]);

// Deselect one item at a time when valueKey is specified.
combo.deselect('BG01');

// Deselect multiple items at a time when valueKey is specified.
combo.deselect(['BG01', 'BG02']);
```

***

### focus()

> **focus**(`options?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:604](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L604)

Sets focus on the component.

#### Parameters

##### options?

`FocusOptions`

#### Returns

`void`

#### Overrides

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).focus`

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:761](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L761)

Hides the list of options.

#### Returns

`Promise`\<`boolean`\>

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).reportValidity`

***

### select()

> **select**(`items?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:643](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L643)

Selects option(s) in the list by either reference or valueKey.
If not argument is provided all items will be selected.

#### Parameters

##### items?

`Item`\<`T`\> \| `Item`\<`T`\>[]

One or more items to be selected. Multiple items should be passed as an array.
When valueKey is specified, the corresponding value should be used in place of the item reference.

#### Returns

`void`

#### Example

```typescript
const combo<IgcComboComponent<T>> = document.querySelector('igc-combo');

// Select one item at a time by reference when valueKey is not specified.
combo.select(combo.data[0]);

// Select multiple items at a time by reference when valueKey is not specified.
combo.select([combo.data[0], combo.data[1]]);

// Select one item at a time when valueKey is specified.
combo.select('BG01');

// Select multiple items at a time when valueKey is specified.
combo.select(['BG01', 'BG02']);
```

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

`FormAssociatedRequiredMixin( EventEmitterMixin<IgcComboComponentEventMap, Constructor<LitElement>>( LitElement ) ).setCustomValidity`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:741](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L741)

Shows the list of options.

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/combo/combo.ts:770](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/combo/combo.ts#L770)

Toggles the list of options.

#### Returns

`Promise`\<`boolean`\>
