# Class: IgxTreeGridRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:341](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L341)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:346](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L346)

Represent the grid instance, the row belongs to

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`grid`](../interfaces/RowType.md#grid)

#### Inherited from

`BaseRow.grid`

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L347)

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

### children

#### Get Signature

> **get** **children**(): [`RowType`](../interfaces/RowType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:395](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L395)

Returns the child rows.

##### Returns

[`RowType`](../interfaces/RowType.md)[]

Optional
Contains the child rows of the current row, if there are any.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`children`](../interfaces/RowType.md#children)

***

### data

#### Get Signature

> **get** **data**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:378](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L378)

The data passed to the row component.

```typescript
let selectedRowData = this.grid.selectedRows[0].data;
```

##### Returns

`any`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`data`](../interfaces/RowType.md#data)

#### Overrides

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:484](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L484)

Gets whether the row is disabled.
A disabled row represents a ghost placeholder created by row pinning.

##### Returns

`boolean`

Optional
Indicates whether the current row is disabled

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`disabled`](../interfaces/RowType.md#disabled)

#### Overrides

`BaseRow.disabled`

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:469](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L469)

Gets whether the row is expanded.

```typescript
let esExpanded = row.expanded;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:480](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L480)

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

#### Overrides

`BaseRow.expanded`

***

### hasChildren

#### Get Signature

> **get** **hasChildren**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:417](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L417)

Returns true if child rows exist. Always return false for IgxGridRow.

##### Returns

`boolean`

Optional
Indicates whether the current row has any child rows

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`hasChildren`](../interfaces/RowType.md#haschildren)

#### Overrides

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:409](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L409)

Returns the parent row.

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:443](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L443)

Gets whether the row is pinned.

```typescript
let isPinned = row.pinned;
```

##### Returns

`boolean`

#### Set Signature

> **set** **pinned**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L454)

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

#### Overrides

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

### treeRow

#### Get Signature

> **get** **treeRow**(): [`ITreeGridRecord`](../interfaces/ITreeGridRecord.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:432](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L432)

The `ITreeGridRecord` with metadata about the row in the context of the tree grid.

```typescript
const rowParent = this.treeGrid.getRowByKey(1).treeRow.parent;
```

##### Returns

[`ITreeGridRecord`](../interfaces/ITreeGridRecord.md)

Optional
Represents the hierarchical record associated with the row (for tree grids).
It is of type ITreeGridRecord, which contains the data, children, the hierarchical level, etc.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`treeRow`](../interfaces/RowType.md#treerow)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:356](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L356)

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
