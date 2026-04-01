# Class: IgxGridRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L263)

Interface representing a row in the grid. It is essentially the blueprint to a row object.
Contains definitions of properties and methods, relevant to a row

## Extends

- `BaseRow`

## Implements

- [`RowType`](../interfaces/RowType.md)

## Properties

### \_data?

> `protected` `optional` **\_data?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L14)

#### Inherited from

`BaseRow._data`

***

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L268)

Represent the grid instance, the row belongs to

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`grid`](../interfaces/RowType.md#grid)

#### Inherited from

`BaseRow.grid`

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L269)

The index of the row within the grid

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`index`](../interfaces/RowType.md#index)

#### Inherited from

`BaseRow.index`

## Accessors

### addRowUI

#### Get Signature

> **get** **addRowUI**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L46)

Gets if this represents add row UI

```typescript
let isAddRow = row.addRowUI;
```

##### Returns

`boolean`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`addRowUI`](../interfaces/RowType.md#addrowui)

#### Inherited from

`BaseRow.addRowUI`

***

### cells

#### Get Signature

> **get** **cells**(): [`CellType`](../interfaces/CellType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L195)

Gets the rendered cells in the row component.

##### Returns

[`CellType`](../interfaces/CellType.md)[]

Optional
A list or an array of cells, that belong to the row

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`cells`](../interfaces/RowType.md#cells)

#### Inherited from

`BaseRow.cells`

***

### data

#### Get Signature

> **get** **data**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L70)

The data record that populates the row.

```typescript
let rowData = row.data;
```

##### Returns

`any`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`data`](../interfaces/RowType.md#data)

#### Inherited from

`BaseRow.data`

***

### deleted

#### Get Signature

> **get** **deleted**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:173](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L173)

Returns if the row is in delete state.

##### Returns

`boolean`

Optional
Indicates whether the row is marked for deletion.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`deleted`](../interfaces/RowType.md#deleted)

#### Inherited from

`BaseRow.deleted`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L188)

Gets whether the row is disabled.
A disabled row represents a ghost placeholder created by row pinning.

##### Returns

`boolean`

Optional
Indicates whether the current row is disabled

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`disabled`](../interfaces/RowType.md#disabled)

#### Inherited from

`BaseRow.disabled`

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L128)

Gets the row expanded/collapsed state.

```typescript
const isExpanded = row.expanded;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L139)

Expands/collapses the row.

```typescript
row.expanded = true;
```

##### Parameters

###### val

`boolean`

##### Returns

`void`

Optional
Indicates whether the current row is expanded.
The value is true, if the row is expanded and false, if it is collapsed

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`expanded`](../interfaces/RowType.md#expanded)

#### Inherited from

`BaseRow.expanded`

***

### hasChildren

#### Get Signature

> **get** **hasChildren**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:180](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L180)

Returns if the row has child rows. Always return false for IgxGridRow.

##### Returns

`boolean`

Optional
Indicates whether the current row has any child rows

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`hasChildren`](../interfaces/RowType.md#haschildren)

#### Inherited from

`BaseRow.hasChildren`

***

### inEditMode

#### Get Signature

> **get** **inEditMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L86)

Returns if the row is currently in edit mode.

##### Returns

`boolean`

Optional
Indicates whether the row is currently being edited.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`inEditMode`](../interfaces/RowType.md#ineditmode)

#### Inherited from

`BaseRow.inEditMode`

***

### key

#### Get Signature

> **get** **key**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L33)

Gets the row key.
A row in the grid is identified either by:
- primaryKey data value,
- the whole rowData, if the primaryKey is omitted.

```typescript
let rowKey = row.key;
```

##### Returns

`any`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`key`](../interfaces/RowType.md#key)

#### Inherited from

`BaseRow.key`

***

### parent

#### Get Signature

> **get** **parent**(): [`RowType`](../interfaces/RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:323](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L323)

Returns the parent row, if grid is grouped.

##### Returns

[`RowType`](../interfaces/RowType.md)

Optional
Contains the parent row of the current row, if it has one.
If the parent row exist, it means that the current row is a child row

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`parent`](../interfaces/RowType.md#parent)

***

### pinned

#### Get Signature

> **get** **pinned**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L102)

Gets whether the row is pinned.
Default value is `false`.
```typescript
const isPinned = row.pinned;
```

##### Returns

`boolean`

#### Set Signature

> **set** **pinned**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L113)

Sets whether the row is pinned.
Default value is `false`.
```typescript
row.pinned = !row.pinned;
```

##### Parameters

###### val

`boolean`

##### Returns

`void`

Optional
Indicates whether the current row is pinned.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`pinned`](../interfaces/RowType.md#pinned)

#### Inherited from

`BaseRow.pinned`

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L150)

Gets whether the row is selected.
Default value is `false`.
```typescript
row.selected = true;
```

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L161)

Sets whether the row is selected.
Default value is `false`.
```typescript
row.selected = !row.selected;
```

##### Parameters

###### val

`boolean`

##### Returns

`void`

Optional
Indicates whether the current row is selected

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`selected`](../interfaces/RowType.md#selected)

#### Inherited from

`BaseRow.selected`

***

### validation

#### Get Signature

> **get** **validation**(): [`IGridValidationState`](../interfaces/IGridValidationState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L58)

Gets the validation status and errors, if any.
```typescript
let validation = row.validation;
let errors = validation.errors;
```

##### Returns

[`IGridValidationState`](../interfaces/IGridValidationState.md)

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`validation`](../interfaces/RowType.md#validation)

#### Inherited from

`BaseRow.validation`

***

### viewIndex

#### Get Signature

> **get** **viewIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:278](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L278)

Returns the view index calculated per the grid page.

##### Returns

`number`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`viewIndex`](../interfaces/RowType.md#viewindex)

#### Overrides

`BaseRow.viewIndex`

## Methods

### delete()

> **delete**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:258](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L258)

Removes the specified row from the grid's data source.
This method emits `onRowDeleted` event.

```typescript
// delete the third selected row from the grid
this.grid.selectedRows[2].delete();
```

#### Returns

`void`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`delete`](../interfaces/RowType.md#delete)

#### Inherited from

`BaseRow.delete`

***

### pin()

> **pin**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L213)

Pins the specified row.
This method emits `onRowPinning` event.

```typescript
// pin the selected row from the grid
this.grid.selectedRows[0].pin();
```

#### Returns

`boolean`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`pin`](../interfaces/RowType.md#pin)

#### Inherited from

`BaseRow.pin`

***

### unpin()

> **unpin**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L226)

Unpins the specified row.
This method emits `onRowPinning` event.

```typescript
// unpin the selected row from the grid
this.grid.selectedRows[0].unpin();
```

#### Returns

`boolean`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`unpin`](../interfaces/RowType.md#unpin)

#### Inherited from

`BaseRow.unpin`

***

### update()

> **update**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L239)

Updates the specified row object and the data source record with the passed value.

```typescript
// update the second selected row's value
let newValue = "Apple";
this.grid.selectedRows[1].update(newValue);
```

#### Parameters

##### value

`any`

#### Returns

`void`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`update`](../interfaces/RowType.md#update)

#### Inherited from

`BaseRow.update`
