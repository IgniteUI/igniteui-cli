# Class: IgxDropDownComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L56)

**Ignite UI for Angular DropDown** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop-down)

The Ignite UI for Angular Drop Down displays a scrollable list of items which may be visually grouped and
supports selection of a single item. Clicking or tapping an item selects it and closes the Drop Down

Example:
```html
<igx-drop-down>
  <igx-drop-down-item *ngFor="let item of items" disabled={{item.disabled}} isHeader={{item.header}}>
    {{ item.value }}
  </igx-drop-down-item>
</igx-drop-down>
```

## Extends

- [`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md)

## Extended by

- [`IgxSelectComponent`](IgxSelectComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxDropDownComponent**(): `IgxDropDownComponent`

#### Returns

`IgxDropDownComponent`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`constructor`](IgxDropDownBaseDirective.md#constructor)

## Properties

### \_focusedItem

> `protected` **\_focusedItem**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L187)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`_focusedItem`](IgxDropDownBaseDirective.md#_focuseditem)

***

### \_height

> `protected` **\_height**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L186)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`_height`](IgxDropDownBaseDirective.md#_height)

***

### \_id

> `protected` **\_id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L188)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`_id`](IgxDropDownBaseDirective.md#_id)

***

### \_scrollPosition

> `protected` **\_scrollPosition**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:237](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L237)

***

### \_width

> `protected` **\_width**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:185](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L185)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`_width`](IgxDropDownBaseDirective.md#_width)

***

### allowItemsFocus

> **allowItemsFocus**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L125)

Gets/sets whether items take focus. Disabled by default.
When enabled, drop down items gain tab index and are focused when active -
this includes activating the selected item when opening the drop down and moving with keyboard navigation.

Note: Keep that focus shift in mind when using the igxDropDownItemNavigation directive
and ensure it's placed either on each focusable item or a common ancestor to allow it to handle keyboard events.

```typescript
// get
let dropDownAllowsItemFocus = this.dropdown.allowItemsFocus;
```

```html
<!--set-->
<igx-drop-down [allowItemsFocus]='true'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.allowItemsFocus`

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L25)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`cdr`](IgxDropDownBaseDirective.md#cdr)

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L104)

Emitted after the dropdown is closed

```html
<igx-drop-down (closed)='handleClosed($event)'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.closed`

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L94)

Emitted before the dropdown is closed

```html
<igx-drop-down (closing)='handleClosing($event)'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.closing`

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L189)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`computedStyles`](IgxDropDownBaseDirective.md#computedstyles)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L236)

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L26)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`document`](IgxDropDownBaseDirective.md#document)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L24)

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`elementRef`](IgxDropDownBaseDirective.md#elementref)

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

`IDropDownBase.height`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`height`](IgxDropDownBaseDirective.md#height)

***

### labelledBy

> **labelledBy**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L134)

Sets aria-labelledby attribute value.
```html
<igx-drop-down [labelledby]="labelId"></igx-drop-down>
```

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

`IDropDownBase.maxHeight`

#### Inherited from

`IgxDropDownComponent`.[`maxHeight`](#maxheight)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L84)

Emitted after the dropdown is opened

```html
<igx-drop-down (opened)='handleOpened($event)'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.opened`

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L74)

Emitted before the dropdown is opened

```html
<igx-drop-down (opening)='handleOpening($event)'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.opening`

***

### role

> **role**: `string` = `'listbox'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L144)

Gets/sets the `role` attribute of the drop down. Default is 'listbox'.

```html
 <igx-drop-down [role]="customRole"></igx-drop-down-item>
```

***

### scrollContainerRef

> `protected` **scrollContainerRef**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L153)

***

### selection

> `protected` **selection**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L57)

***

### selectionChanging

> **selectionChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L36)

Emitted when item selection is changing, before the selection completes

```html
<igx-drop-down (selectionChanging)='handleSelection()'></igx-drop-down>
```

#### Implementation of

`IDropDownBase.selectionChanging`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`selectionChanging`](IgxDropDownBaseDirective.md#selectionchanging)

***

### toggleDirective

> `protected` **toggleDirective**: [`IgxToggleDirective`](IgxToggleDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L150)

***

### virtDir

> `protected` **virtDir**: `IgxForOfToken`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L147)

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

`IDropDownBase.width`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`width`](IgxDropDownBaseDirective.md#width)

## Accessors

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L221)

Gets if the dropdown is collapsed

```typescript
let isCollapsed = this.dropdown.collapsed;
```

##### Returns

`boolean`

Gets if the dropdown is collapsed

#### Implementation of

`IDropDownBase.collapsed`

#### Overrides

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`collapsed`](IgxDropDownBaseDirective.md#collapsed)

***

### collectionLength

#### Get Signature

> **get** `protected` **collectionLength**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L230)

##### Returns

`number`

***

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

#### Implementation of

`IDropDownBase.element`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`element`](IgxDropDownBaseDirective.md#element)

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

`IDropDownBase.headers`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`headers`](IgxDropDownBaseDirective.md#headers)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L183)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L186)

Gets/Sets the drop down's id

```typescript
// get
let myDropDownCurrentId = this.dropdown.id;
```
```html
<!--set-->
<igx-drop-down [id]='newDropDownId'></igx-drop-down>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

`IDropDownBase.id`

#### Overrides

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`id`](IgxDropDownBaseDirective.md#id)

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

`IDropDownBase.items`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`items`](IgxDropDownBaseDirective.md#items)

***

### listId

#### Get Signature

> **get** **listId**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L195)

Id of the internal listbox of the drop down

##### Returns

`string`

***

### selectedItem

#### Get Signature

> **get** **selectedItem**(): [`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L206)

Get currently selected item

```typescript
let currentItem = this.dropdown.selectedItem;
```

##### Returns

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Implementation of

`IDropDownBase.selectedItem`

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:574](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L574)

Clears the selection of the dropdown
```typescript
this.dropdown.clearSelection();
```

#### Returns

`void`

***

### close()

> **close**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:270](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L270)

Closes the dropdown

```typescript
this.dropdown.close();
```

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Implementation of

`IDropDownBase.close`

***

### focusItem()

> `protected` **focusItem**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:601](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L601)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

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

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`getNearestSiblingFocusableItemIndex`](IgxDropDownBaseDirective.md#getnearestsiblingfocusableitemindex)

***

### isSelectionValid()

> `protected` **isSelectionValid**(`selection`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:591](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L591)

Checks whether the selection is valid
`null` - the selection should be emptied
Virtual? - the selection should at least have and `index` and `value` property
Non-virtual? - the selection should be a valid drop-down item and **not** be a header

#### Parameters

##### selection

`any`

#### Returns

`boolean`

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

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`navigate`](IgxDropDownBaseDirective.md#navigate)

***

### navigateItem()

> **navigateItem**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:316](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L316)

Navigates to the item on the specified index
If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.

#### Parameters

##### index

`number`

#### Returns

`void`

#### Implementation of

`IDropDownBase.navigateItem`

#### Overrides

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`navigateItem`](IgxDropDownBaseDirective.md#navigateitem)

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:458](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L458)

#### Returns

`void`

***

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L196)

#### Returns

`void`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`ngOnInit`](IgxDropDownBaseDirective.md#ngoninit)

***

### onItemActionKey()

> **onItemActionKey**(`key`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L465)

Keydown Handler

#### Parameters

##### key

[`DropDownActionKey`](../type-aliases/DropDownActionKey.md)

##### event?

`Event`

#### Returns

`void`

#### Implementation of

`IDropDownBase.onItemActionKey`

#### Overrides

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`onItemActionKey`](IgxDropDownBaseDirective.md#onitemactionkey)

***

### open()

> **open**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L246)

Opens the dropdown

```typescript
this.dropdown.open();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

`IDropDownBase.open`

***

### scrollToHiddenItem()

> `protected` **scrollToHiddenItem**(`newItem`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L287)

#### Parameters

##### newItem

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Returns

`void`

#### Inherited from

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md).[`scrollToHiddenItem`](IgxDropDownBaseDirective.md#scrolltohiddenitem)

***

### scrollToItem()

> `protected` **scrollToItem**(`item`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:597](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L597)

#### Parameters

##### item

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Returns

`void`

***

### setSelectedItem()

> **setSelectedItem**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:294](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L294)

Select an item by index

#### Parameters

##### index

`number`

of the item to select; If the drop down uses *igxFor, pass the index in data

#### Returns

`void`

#### Implementation of

`IDropDownBase.setSelectedItem`

***

### skipHeader()

> `protected` **skipHeader**(`direction`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:616](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L616)

#### Parameters

##### direction

`Navigate`

#### Returns

`void`

***

### toggle()

> **toggle**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L281)

Toggles the dropdown

```typescript
this.dropdown.toggle();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

`IDropDownBase.toggle`

***

### updateItemFocus()

> `protected` **updateItemFocus**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:607](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L607)

#### Returns

`void`
