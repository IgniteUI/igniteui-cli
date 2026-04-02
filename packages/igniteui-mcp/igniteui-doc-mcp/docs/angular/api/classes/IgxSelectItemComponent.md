# Class: IgxSelectItemComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-item.component.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-item.component.ts#L9)

The `<igx-drop-down-item>` is a container intended for row items in
a `<igx-drop-down>` container.

## Extends

- [`IgxDropDownItemComponent`](IgxDropDownItemComponent.md)

## Constructors

### Constructor

> **new IgxSelectItemComponent**(): `IgxSelectItemComponent`

#### Returns

`IgxSelectItemComponent`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`constructor`](IgxDropDownItemComponent.md#constructor)

## Properties

### \_disabled

> `protected` **\_disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:262](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L262)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`_disabled`](IgxDropDownItemComponent.md#_disabled)

***

### \_index

> `protected` **\_index**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:261](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L261)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`_index`](IgxDropDownItemComponent.md#_index)

***

### \_label

> `protected` **\_label**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L263)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`_label`](IgxDropDownItemComponent.md#_label)

***

### \_selected

> `protected` **\_selected**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:260](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L260)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`_selected`](IgxDropDownItemComponent.md#_selected)

***

### dropDown

> `protected` **dropDown**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L20)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`dropDown`](IgxDropDownItemComponent.md#dropdown)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L21)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`elementRef`](IgxDropDownItemComponent.md#elementref)

***

### group

> `protected` **group**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L22)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`group`](IgxDropDownItemComponent.md#group)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L38)

Sets/gets the `id` of the item.
```html
<igx-drop-down-item [id] = 'igx-drop-down-item-0'></igx-drop-down-item>
```
```typescript
let itemId =  this.item.id;
```

#### Memberof

IgxSelectItemComponent

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`id`](IgxDropDownItemComponent.md#id)

***

### role

> **role**: `string` = `'option'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:223](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L223)

Gets/sets the `role` attribute of the item. Default is 'option'.

```html
 <igx-drop-down-item [role]="customRole"></igx-drop-down-item>
```

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`role`](IgxDropDownItemComponent.md#role)

***

### selection?

> `protected` `optional` **selection?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L23)

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`selection`](IgxDropDownItemComponent.md#selection)

***

### value

> **value**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L95)

Gets/sets the value of the item if the item is databound

```typescript
// usage in IgxDropDownItemComponent
// get
let mySelectedItemValue = this.dropdown.selectedItem.value;

// set
let mySelectedItem = this.dropdown.selectedItem;
mySelectedItem.value = { id: 123, name: 'Example Name' }

// usage in IgxComboItemComponent
// get
let myComboItemValue = this.combo.items[0].value;
```

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`value`](IgxDropDownItemComponent.md#value)

## Accessors

### ariaLabel

#### Get Signature

> **get** **ariaLabel**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L42)

##### Returns

`string`

#### Set Signature

> **set** **ariaLabel**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L46)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`ariaLabel`](IgxDropDownItemComponent.md#arialabel)

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L206)

Sets/gets if the given item is disabled

```typescript
 // get
 let mySelectedItem = this.dropdown.selectedItem;
 let myItemIsDisabled = mySelectedItem.disabled;
```

```html
 <igx-drop-down-item *ngFor="let item of items" disabled={{!item.disabled}}>
     <div>
         {{item.field}}
     </div>
 </igx-drop-down-item>
```
**NOTE:** Drop-down items inside of a disabled `IgxDropDownGroup` will always count as disabled

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L210)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`disabled`](IgxDropDownItemComponent.md#disabled)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.component.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.component.ts#L24)

Sets/gets if the given item is focused
```typescript
 let mySelectedItem = this.dropdown.selectedItem;
 let isMyItemFocused = mySelectedItem.focused;
```

##### Returns

`boolean`

#### Set Signature

> **set** **focused**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.component.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.component.ts#L41)

Sets/gets if the given item is focused
```typescript
 let mySelectedItem = this.dropdown.selectedItem;
 let isMyItemFocused = mySelectedItem.focused;
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`focused`](IgxDropDownItemComponent.md#focused)

***

### hasIndex

#### Get Signature

> **get** `protected` **hasIndex**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L252)

##### Returns

`boolean`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`hasIndex`](IgxDropDownItemComponent.md#hasindex)

***

### index

#### Get Signature

> **get** **index**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L66)

The data index of the dropdown item.

```typescript
// get the data index of the selected dropdown item
let selectedItemIndex = this.dropdown.selectedItem.index
```

##### Returns

`number`

#### Set Signature

> **set** **index**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L73)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`index`](IgxDropDownItemComponent.md#index)

***

### isSelectable

#### Get Signature

> **get** `protected` **isSelectable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L298)

Returns true if the items is not a header or disabled

##### Returns

`boolean`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`isSelectable`](IgxDropDownItemComponent.md#isselectable)

***

### selected

#### Get Signature

> **get** **selected**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-item.component.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-item.component.ts#L55)

Sets/Gets if the item is the currently selected one in the select

```typescript
 let mySelectedItem = this.select.selectedItem;
 let isMyItemSelected = mySelectedItem.selected; // true
```

##### Returns

`any`

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-item.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-item.component.ts#L59)

Sets/Gets if the item is the currently selected one in the dropdown

```typescript
 let mySelectedItem = this.dropdown.selectedItem;
 let isMyItemSelected = mySelectedItem.selected; // true
```

Two-way data binding
```html
<igx-drop-down-item [(selected)]='model.isSelected'></igx-drop-down-item>
```

##### Parameters

###### value

`any`

##### Returns

`void`

#### Overrides

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`selected`](IgxDropDownItemComponent.md#selected)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-item.component.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-item.component.ts#L30)

Gets/Sets the item's text to be displayed in the select component's input when the item is selected.

```typescript
 //get
 let mySelectedItem = this.dropDown.selectedItem;
 let selectedItemText = mySelectedItem.text;
```

```html
// set
<igx-select-item [text]="'London'"></igx-select-item>
```

##### Returns

`string`

#### Set Signature

> **set** **text**(`text`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-item.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-item.component.ts#L34)

##### Parameters

###### text

`string`

##### Returns

`void`

## Methods

### ensureItemFocus()

> `protected` **ensureItemFocus**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:303](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L303)

If `allowItemsFocus` is enabled, keep the browser focus on the active item

#### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`ensureItemFocus`](IgxDropDownItemComponent.md#ensureitemfocus)

***

### ngDoCheck()

> **ngDoCheck**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts:284](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-item.base.ts#L284)

#### Returns

`void`

#### Inherited from

[`IgxDropDownItemComponent`](IgxDropDownItemComponent.md).[`ngDoCheck`](IgxDropDownItemComponent.md#ngdocheck)
