# Class: IgxColumnActionsComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L24)

Providing reference to `IgxColumnActionsComponent`:
```typescript
 @ViewChild('columnActions', { read: IgxColumnActionsComponent })
 public columnActions: IgxColumnActionsComponent;

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxColumnActionsComponent**(): `IgxColumnActionsComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L165)

#### Returns

`IgxColumnActionsComponent`

## Properties

### \_differ

> `protected` **\_differ**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L133)

***

### columnItems

> **columnItems**: `QueryList`\<[`IgxCheckboxComponent`](IgxCheckboxComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L91)

Gets the checkbox components representing column items currently present in the dropdown

#### Example

```typescript
let columnItems =  this.columnActions.columnItems;
```

***

### columnsAreaMaxHeight

> **columnsAreaMaxHeight**: `string` = `'100%'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L71)

Gets/sets the max height of the columns area.

#### Remarks

The default max height is 100%.

#### Example

```html
<igx-column-actions [columnsAreaMaxHeight]="200px"></igx-column-actions>
```

***

### columnToggled

> **columnToggled**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L111)

An event that is emitted after a column's checked state is changed.
Provides references to the `column` and the `checked` properties as event arguments.
```html
 <igx-column-actions (columnToggled)="columnToggled($event)"></igx-column-actions>
```

***

### cssClass

> **cssClass**: `string` = `'igx-column-actions'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L59)

Sets/Gets the css class selector.
By default the value of the `class` attribute is `"igx-column-actions"`.
```typescript
let cssCLass =  this.columnHidingUI.cssClass;
```
```typescript
this.columnHidingUI.cssClass = 'column-chooser';
```

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L37)

Gets/Sets the grid to provide column actions for.

#### Example

```typescript
let grid = this.columnActions.grid;
```

***

### hideFilter

> **hideFilter**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L81)

Shows/hides the columns filtering input from the UI.

#### Example

```html
 <igx-column-actions [hideFilter]="true"></igx-column-actions>
```

***

### indentation

> **indentation**: `number` = `30`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L47)

Gets/sets the indentation of columns in the column list based on their hierarchy level.

#### Example

```
<igx-column-actions [indentation]="15"></igx-column-actions>
```

***

### title

> **title**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L101)

Gets/sets the title of the column actions component.

#### Example

```html
<igx-column-actions [title]="'Pin Columns'"></igx-column-actions>
```

## Accessors

### checkAllText

#### Get Signature

> **get** **checkAllText**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L281)

Gets the text of the button that checks all columns.

##### Remarks

If unset it is obtained from the IgxColumnActionsBased derived directive applied.

##### Example

```typescript
let uncheckAllText = this.columnActions.uncheckAllText;
```

##### Returns

`string`

#### Set Signature

> **set** **checkAllText**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:294](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L294)

Sets the text of the button that checks all columns.

##### Remarks

If unset it is obtained from the IgxColumnActionsBased derived directive applied.

##### Example

```html
<igx-column-actions [checkAllText]="'Hide All'"></igx-column-actions>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### columnDisplayOrder

#### Get Signature

> **get** **columnDisplayOrder**(): [`ColumnDisplayOrder`](../type-aliases/ColumnDisplayOrder.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L228)

Gets the display order of the columns.

##### Example

```typescript
let columnDisplayOrder = this.columnActions.columnDisplayOrder;
```

##### Returns

[`ColumnDisplayOrder`](../type-aliases/ColumnDisplayOrder.md)

#### Set Signature

> **set** **columnDisplayOrder**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L239)

Sets the display order of the columns.

##### Example

```typescript
this.columnActions.columnDisplayOrder = ColumnDisplayOrder.Alphabetical;
```

##### Parameters

###### value

[`ColumnDisplayOrder`](../type-aliases/ColumnDisplayOrder.md)

##### Returns

`void`

***

### filterColumnsPrompt

#### Get Signature

> **get** **filterColumnsPrompt**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:178](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L178)

Gets the prompt that is displayed in the filter input.

##### Example

```typescript
let filterColumnsPrompt = this.columnActions.filterColumnsPrompt;
```

##### Returns

`string`

#### Set Signature

> **set** **filterColumnsPrompt**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L189)

Sets the prompt that is displayed in the filter input.

##### Example

```html
<igx-column-actions [filterColumnsPrompt]="'Type here to search'"></igx-column-actions>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### filterCriteria

#### Get Signature

> **get** **filterCriteria**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L201)

Gets the value which filters the columns list.

##### Example

```typescript
let filterCriteria =  this.columnActions.filterCriteria;
```

##### Returns

`string`

#### Set Signature

> **set** **filterCriteria**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:212](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L212)

Sets the value which filters the columns list.

##### Example

```html
 <igx-column-actions [filterCriteria]="'ID'"></igx-column-actions>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:324](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L324)

Gets/Sets the value of the `id` attribute.

##### Remarks

If not provided it will be automatically generated.

##### Example

```html
<igx-column-actions [id]="'igx-actions-1'"></igx-column-actions>
```

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:327](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L327)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### uncheckAllText

#### Get Signature

> **get** **uncheckAllText**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:256](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L256)

Gets the text of the button that unchecks all columns.

##### Remarks

If unset it is obtained from the IgxColumnActionsBased derived directive applied.

##### Example

```typescript
let uncheckAllText = this.columnActions.uncheckAllText;
```

##### Returns

`string`

#### Set Signature

> **set** **uncheckAllText**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L267)

Sets the text of the button that unchecks all columns.

##### Example

```html
<igx-column-actions [uncheckAllText]="'Show All'"></igx-column-actions>
```

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### checkAllColumns()

> **checkAllColumns**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:375](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L375)

Checks all columns and performs the appropriate action.

#### Returns

`void`

#### Example

```typescript
this.columnActions.checkAllColumns();
```

***

### uncheckAllColumns()

> **uncheckAllColumns**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/column-actions/column-actions.component.ts#L363)

Unchecks all columns and performs the appropriate action.

#### Returns

`void`

#### Example

```typescript
this.columnActions.uncheckAllColumns();
```
