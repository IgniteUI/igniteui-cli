# Abstract Class: IgxDropDownBaseDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L23)

An abstract class, defining a drop-down component, with:
Properties for display styles and classes
A collection items of type `IgxDropDownItemBaseDirective`
Properties and methods for navigating (highlighting/focusing) items from the collection
Properties and methods for selecting items from the collection

## Extended by

- [`IgxDropDownComponent`](IgxDropDownComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxDropDownBaseDirective**(): `IgxDropDownBaseDirective`

#### Returns

`IgxDropDownBaseDirective`

## Properties

### \_focusedItem

> `protected` **\_focusedItem**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L187)

***

### \_height

> `protected` **\_height**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L186)

***

### \_id

> `protected` **\_id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L188)

***

### \_width

> `protected` **\_width**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:185](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L185)

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L25)

***

### collapsed

> `abstract` `readonly` **collapsed**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L194)

Gets if the dropdown is collapsed

#### Implementation of

`IDropDownList.collapsed`

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L189)

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L26)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L24)

***

### height

> **height**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L66)

Gets/Sets the height of the drop down

```typescript
// get
let myDropDownCurrentHeight = this.dropdown.height;
```
```html
<!--set-->
<igx-drop-down [height]='400px'></igx-drop-down>
```

#### Implementation of

`IDropDownList.height`

***

### maxHeight

> **maxHeight**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L103)

Gets/Sets the drop down's container max height.

```typescript
// get
let maxHeight = this.dropdown.maxHeight;
```
```html
<!--set-->
<igx-drop-down [maxHeight]='200px'></igx-drop-down>
```

#### Implementation of

`IDropDownList.maxHeight`

***

### selectionChanging

> **selectionChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L36)

Emitted when item selection is changing, before the selection completes

```html
<igx-drop-down (selectionChanging)='handleSelection()'></igx-drop-down>
```

#### Implementation of

`IDropDownList.selectionChanging`

***

### width

> **width**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L51)

Gets/Sets the width of the drop down

```typescript
// get
let myDropDownCurrentWidth = this.dropdown.width;
```
```html
<!--set-->
<igx-drop-down [width]='160px'></igx-drop-down>
```

#### Implementation of

`IDropDownList.width`

## Accessors

### element

#### Get Signature

> **get** **element**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L158)

Get dropdown html element

```typescript
let myDropDownElement = this.dropdown.element;
```

##### Returns

`any`

***

### headers

#### Get Signature

> **get** **headers**(): [`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L138)

Get all header items

```typescript
let myDropDownHeaderItems = this.dropdown.headers;
```

##### Returns

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

#### Implementation of

`IDropDownList.headers`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L82)

Gets/Sets the drop down's id

```typescript
// get
let myDropDownCurrentId = this.dropdown.id;
```
```html
<!--set-->
<igx-drop-down [id]='newDropDownId'></igx-drop-down>
```

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L85)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

`IDropDownList.id`

***

### items

#### Get Signature

> **get** **items**(): [`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L118)

Get all non-header items

```typescript
let myDropDownItems = this.dropdown.items;
```

##### Returns

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

#### Implementation of

`IDropDownList.items`

## Methods

### getNearestSiblingFocusableItemIndex()

> `protected` **getNearestSiblingFocusableItemIndex**(`startIndex`, `direction`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L308)

#### Parameters

##### startIndex

`number`

##### direction

`Navigate`

#### Returns

`number`

***

### navigate()

> `protected` **navigate**(`direction`, `currentIndex?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L299)

#### Parameters

##### direction

`Navigate`

##### currentIndex?

`number`

#### Returns

`void`

***

### navigateItem()

> **navigateItem**(`newIndex`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L246)

Navigates to the item on the specified index

#### Parameters

##### newIndex

`number`

number - the index of the item in the `items` collection

#### Returns

`void`

#### Implementation of

`IDropDownList.navigateItem`

***

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L196)

#### Returns

`void`

***

### onItemActionKey()

> **onItemActionKey**(`key`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L201)

Keydown Handler

#### Parameters

##### key

[`DropDownActionKey`](../type-aliases/DropDownActionKey.md)

##### event?

`Event`

#### Returns

`void`

#### Implementation of

`IDropDownList.onItemActionKey`

***

### scrollToHiddenItem()

> `protected` **scrollToHiddenItem**(`newItem`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L287)

#### Parameters

##### newItem

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Returns

`void`
