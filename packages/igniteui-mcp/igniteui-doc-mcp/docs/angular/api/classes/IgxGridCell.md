# Class: IgxGridCell

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:5](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L5)

Interface representing a cell in the grid. It is essentially the blueprint to a cell object.
Contains definitions of properties and methods, relevant to a cell

## Implements

- [`CellType`](../interfaces/CellType.md)

## Properties

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L14)

Returns the grid containing the cell.

#### Memberof

IgxGridCell

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`grid`](../interfaces/CellType.md#grid)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:229](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L229)

Indicates whether the cell is currently active (focused).

##### Returns

`boolean`

Indicates whether the cell is currently active (focused).

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`active`](../interfaces/CellType.md#active)

***

### column

#### Get Signature

> **get** **column**(): [`ColumnType`](../interfaces/ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L56)

Returns the column of the cell.
```typescript
let column = this.cell.column;
```

##### Memberof

IgxGridCell

##### Returns

[`ColumnType`](../interfaces/ColumnType.md)

Represents the column that the cell belongs to.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`column`](../interfaces/CellType.md#column)

***

### editable

#### Get Signature

> **get** **editable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L107)

Returns whether the cell is editable..

##### Memberof

IgxGridCell

##### Returns

`boolean`

Indicates whether the cell can be edited.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`editable`](../interfaces/CellType.md#editable)

***

### editMode

#### Get Signature

> **get** **editMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:169](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L169)

Returns if the row is currently in edit mode.

##### Memberof

IgxGridCell

##### Returns

`boolean`

#### Set Signature

> **set** **editMode**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:182](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L182)

Starts/ends edit mode for the cell.

```typescript
cell.editMode  = !cell.editMode;
```

##### Memberof

IgxGridCell

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates whether the cell is currently in edit mode.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`editMode`](../interfaces/CellType.md#editmode)

***

### editValue

#### Get Signature

> **get** **editValue**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L68)

Gets the current edit value while a cell is in edit mode.
```typescript
let editValue = this.cell.editValue;
```

##### Memberof

IgxGridCell

##### Returns

`any`

#### Set Signature

> **set** **editValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:83](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L83)

Sets the current edit value while a cell is in edit mode.
Only for cell editing mode.
```typescript
this.cell.editValue = value;
```

##### Memberof

IgxGridCell

##### Parameters

###### value

`any`

##### Returns

`void`

The value to display when the cell is in edit mode.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`editValue`](../interfaces/CellType.md#editvalue)

***

### id

#### Get Signature

> **get** **id**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L158)

Gets the cell id.
A cell in the grid is identified by:
- rowID - primaryKey data value or the whole rowData, if the primaryKey is omitted.
- rowIndex - the row index
- columnID - column index

```typescript
let cellID = cell.id;
```

##### Memberof

IgxGridCell

##### Returns

`any`

Optional; An object identifying the cell. It contains rowID, columnID, and rowIndex of the cell.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`id`](../interfaces/CellType.md#id)

***

### row

#### Get Signature

> **get** **row**(): [`RowType`](../interfaces/RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L44)

Returns the row containing the cell.
```typescript
let row = this.cell.row;
```

##### Memberof

IgxGridCell

##### Returns

[`RowType`](../interfaces/RowType.md)

Represents the row that the cell belongs to

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`row`](../interfaces/CellType.md#row)

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L206)

Gets whether the cell is selected.
```typescript
let isSelected = this.cell.selected;
```

##### Memberof

IgxGridCell

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L219)

Selects/deselects the cell.
```typescript
this.cell.selected = true.
```

##### Memberof

IgxGridCell

##### Parameters

###### val

`boolean`

##### Returns

`void`

Indicates whether the cell is currently selected. It is false, if the sell is not selected, and true, if it is.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`selected`](../interfaces/CellType.md#selected)

***

### selectionNode

#### Get Signature

> **get** `protected` **selectionNode**(): [`ISelectionNode`](../interfaces/ISelectionNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:258](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L258)

##### Returns

[`ISelectionNode`](../interfaces/ISelectionNode.md)

***

### validation

#### Get Signature

> **get** **validation**(): [`IGridValidationState`](../interfaces/IGridValidationState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L97)

Gets the validation status and errors, if any.
```typescript
let validation = this.cell.validation;
let errors = validation.errors;
```

##### Returns

[`IGridValidationState`](../interfaces/IGridValidationState.md)

Optional; An object representing the validation state of the cell.
Whether it's valid or invalid, and if it has errors

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`validation`](../interfaces/CellType.md#validation)

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L128)

Returns the cell value.

##### Memberof

IgxGridCell

##### Returns

`any`

#### Set Signature

> **set** **value**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:141](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L141)

Updates the cell value.

##### Memberof

IgxGridCell

##### Parameters

###### val

`any`

##### Returns

`void`

The current value of the cell.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`value`](../interfaces/CellType.md#value)

***

### width

#### Get Signature

> **get** **width**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L119)

Gets the width of the cell.
```typescript
let cellWidth = this.cell.width;
```

##### Memberof

IgxGridCell

##### Returns

`string`

The CSS width of the cell as a string.

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`width`](../interfaces/CellType.md#width)

## Methods

### update()

> **update**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-cell.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-cell.ts#L244)

Updates the cell value.

```typescript
cell.update(newValue);
```

#### Parameters

##### val

`any`

#### Returns

`void`

#### Memberof

IgxGridCell

#### Implementation of

[`CellType`](../interfaces/CellType.md).[`update`](../interfaces/CellType.md#update)
