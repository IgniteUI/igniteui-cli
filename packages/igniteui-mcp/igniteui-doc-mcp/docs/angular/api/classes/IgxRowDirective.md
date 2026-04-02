# Class: IgxRowDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L35)

## Extended by

- [`IgxGridRowComponent`](IgxGridRowComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxRowDirective**(): `IgxRowDirective`

#### Returns

`IgxRowDirective`

## Properties

### \_addRow

> `protected` **\_addRow**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:409](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L409)

***

### \_cells

> `protected` **\_cells**: `QueryList`\<[`CellType`](../interfaces/CellType.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:200](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L200)

***

### \_data

> `protected` **\_data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:408](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L408)

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L43)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:407](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L407)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L108)

Sets whether this specific row has disabled functionality for editing and row selection.
Default value is `false`.
```typescript
this.grid.selectedRows[0].pinned = true;
```

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L41)

***

### grid

> **grid**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L37)

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L96)

The index of the row.

```typescript
// get the index of the second selected row
let selectedRowIndex = this.grid.selectedRows[1].index;
```

***

### selectionService

> **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L39)

***

### trackPinnedColumn

> `protected` **trackPinnedColumn**: `object` = `trackByIdentity`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:720](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L720)

- state persistence switching all pinned columns resets collection
- MRL unpinnedColumns igxFor modes entire child loop on unpin

## Accessors

### addRowUI

#### Get Signature

> **get** **addRowUI**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L160)

##### Returns

`any`

***

### cells

#### Get Signature

> **get** **cells**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L210)

Gets the rendered cells in the row component.

```typescript
// get the cells of the third selected row
let selectedRowCells = this.grid.selectedRows[2].cells;
```

##### Returns

`any`

***

### data

#### Get Signature

> **get** **data**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L72)

The data passed to the row component.

```typescript
// get the row data for the first selected row
let selectedRowData = this.grid.selectedRows[0].data;
```

##### Returns

`any`

#### Set Signature

> **set** **data**(`v`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L84)

##### Parameters

###### v

`any`

##### Returns

`void`

***

### dataRowIndex

#### Get Signature

> **get** **dataRowIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L222)

##### Returns

`number`

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L145)

Gets the expanded state of the row.
```typescript
let isExpanded = row.expanded;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:156](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L156)

Expands/collapses the current row.

```typescript
this.grid.selectedRows[2].expanded = true;
```

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### hasMergedCells

#### Get Signature

> **get** **hasMergedCells**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L135)

##### Returns

`boolean`

***

### inEditMode

#### Get Signature

> **get** **inEditMode**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L351)

##### Returns

`boolean`

***

### key

#### Get Signature

> **get** **key**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:370](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L370)

Gets the ID of the row.
A row in the grid is identified either by:
- primaryKey data value,
- the whole data, if the primaryKey is omitted.

```typescript
let rowID = this.grid.selectedRows[2].key;
```

##### Returns

`any`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:387](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L387)

The native DOM element representing the row. Could be null in certain environments.

```typescript
// get the nativeElement of the second selected row
let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
```

##### Returns

`any`

***

### pinned

#### Get Signature

> **get** **pinned**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L131)

Gets whether the row is pinned.
```typescript
let isPinned = row.pinned;
```

##### Returns

`boolean`

#### Set Signature

> **set** **pinned**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L117)

Sets whether the row is pinned.
Default value is `false`.
```typescript
this.grid.selectedRows[0].pinned = true;
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### rowHeight

#### Get Signature

> **get** **rowHeight**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L167)

##### Returns

`any`

***

### selected

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L235)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### virtDirRow

#### Get Signature

> **get** **virtDirRow**(): [`IgxGridForOfDirective`](IgxGridForOfDirective.md)\<[`ColumnType`](../interfaces/ColumnType.md), [`ColumnType`](../interfaces/ColumnType.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L189)

##### Returns

[`IgxGridForOfDirective`](IgxGridForOfDirective.md)\<[`ColumnType`](../interfaces/ColumnType.md), [`ColumnType`](../interfaces/ColumnType.md)[]\>

## Methods

### beginAddRow()

> **beginAddRow**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:623](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L623)

Spawns the add row UI for the specific row.

#### Returns

`void`

#### Example

```typescript
const row = this.grid1.getRowByIndex(1);
row.beginAddRow();
```

***

### delete()

> **delete**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:550](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L550)

Removes the specified row from the grid's data source.
This method emits `rowDeleted` event.

```typescript
// delete the third selected row from the grid
this.grid.selectedRows[2].delete();
```

#### Returns

`void`

***

### extractRecordKey()

> `protected` **extractRecordKey**(`rec`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:681](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L681)

#### Parameters

##### rec

`any`

#### Returns

`any`

***

### getMergeCellSpan()

> `protected` **getMergeCellSpan**(`col`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:642](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L642)

#### Parameters

##### col

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`string`

***

### getRowHeight()

> `protected` **getRowHeight**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:693](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L693)

#### Returns

`any`

***

### isCellActive()

> **isCellActive**(`visibleColumnIndex`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:554](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L554)

#### Parameters

##### visibleColumnIndex

`any`

#### Returns

`boolean`

***

### isHoveredRoot()

> `protected` **isHoveredRoot**(`col`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:670](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L670)

#### Parameters

##### col

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`boolean`

***

### isSelectionRoot()

> `protected` **isSelectionRoot**(`col`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:657](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L657)

#### Parameters

##### col

[`ColumnType`](../interfaces/ColumnType.md)

#### Returns

`boolean`

***

### pin()

> **pin**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:574](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L574)

Pins the specified row.
This method emits `rowPinning``rowPinned` event.

```typescript
// pin the selected row from the grid
this.grid.selectedRows[0].pin();
```

#### Returns

`any`

***

### unpin()

> **unpin**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:587](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L587)

Unpins the specified row.
This method emits `rowPinning``rowPinned` event.

```typescript
// unpin the selected row from the grid
this.grid.selectedRows[0].unpin();
```

#### Returns

`any`

***

### update()

> **update**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/row.directive.ts:531](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/row.directive.ts#L531)

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
