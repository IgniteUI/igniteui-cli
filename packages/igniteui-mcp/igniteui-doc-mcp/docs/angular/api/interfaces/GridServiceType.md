# Interface: GridServiceType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:329](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L329)

Represents the service interface for interacting with the grid.

## Properties

### cms

> **cms**: `IgxColumnMovingService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:336](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L336)

A service responsible for handling column moving within the grid. It contains a reference to the column, its icon, and indicator for cancellation.

***

### crudService

> **crudService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L334)

Represents the type of the CRUD service (Create, Read, Update, Delete) operations on the grid data.

***

### grid

> **grid**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:332](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L332)

The reference to the parent `GridType` that contains the service.

## Methods

### addRowToData()

> **addRowToData**(`rowData`, `parentID?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:381](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L381)

Represents a method declaration for adding a new row to the grid.
It takes the row's data and the identifier of the parent row if applicable (used for tree grids)

#### Parameters

##### rowData

`any`

##### parentID?

`any`

#### Returns

`void`

***

### clear\_groupby()?

> `optional` **clear\_groupby**(`field`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:417](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L417)

#### Parameters

##### field

`any`

#### Returns

`void`

***

### clear\_sort()

> **clear\_sort**(`fieldName`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:402](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L402)

Represents a method declaration for resetting the sorting

#### Parameters

##### fieldName

`string`

#### Returns

`void`

***

### deleteRowById()

> **deleteRowById**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:383](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L383)

Represents a method declaration for deleting a row, specified by it's identifier (taken as a parameter)

#### Parameters

##### id

`any`

#### Returns

`any`

***

### expand\_path\_to\_record()?

> `optional` **expand\_path\_to\_record**(`record`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:413](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L413)

#### Parameters

##### record

[`ITreeGridRecord`](ITreeGridRecord.md)

#### Returns

`void`

***

### filterDataByExpressions()

> **filterDataByExpressions**(`expressionsTree`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:407](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L407)

#### Parameters

##### expressionsTree

[`IFilteringExpressionsTree`](IFilteringExpressionsTree.md)

#### Returns

`any`[]

***

### get\_all\_data()

> **get\_all\_data**(`includeTransactions?`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:345](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L345)

Represents a method declaration for retrieving all the data available in the grid, including any transactional data.
`includeTransactions`: Optional parameter. Specifies whether to include transactional data if present.
Returns an array containing all the data available in the grid.

#### Parameters

##### includeTransactions?

`boolean`

#### Returns

`any`[]

***

### get\_cell\_by\_index()

> **get\_cell\_by\_index**(`rowIndex`, `columnID`): [`CellType`](CellType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:366](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L366)

Represents a method declaration for retrieving the cell object associated with a specific row and column using their indexes.

#### Parameters

##### rowIndex

`number`

##### columnID

`string` \| `number`

#### Returns

[`CellType`](CellType.md)

***

### get\_cell\_by\_key()

> **get\_cell\_by\_key**(`rowSelector`, `field`): [`CellType`](CellType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:364](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L364)

Represents a method declaration for retrieving the cell object associated with a specific row and column in the grid.

#### Parameters

##### rowSelector

`any`

##### field

`string`

#### Returns

[`CellType`](CellType.md)

***

### get\_cell\_by\_visible\_index()

> **get\_cell\_by\_visible\_index**(`rowIndex`, `columnIndex`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:371](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L371)

Represents a method declaration for retrieving the cell object associated with a specific row and column using their indexes.
It counts only the indexes of the visible columns and rows

#### Parameters

##### rowIndex

`number`

##### columnIndex

`number`

#### Returns

`any`

***

### get\_column\_by\_name()

> **get\_column\_by\_name**(`name`): [`ColumnType`](ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L347)

Represents a method declaration for retrieving a column object by its name, taken as a parameter.

#### Parameters

##### name

`string`

#### Returns

[`ColumnType`](ColumnType.md)

***

### get\_data()

> **get\_data**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:339](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L339)

Represents a method declaration for retrieving the data used in the grid. The returned values could be of any type

#### Returns

`any`[]

***

### get\_groupBy\_record\_id()?

> `optional` **get\_groupBy\_record\_id**(`gRow`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:415](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L415)

#### Parameters

##### gRow

[`IGroupByRecord`](IGroupByRecord.md)

#### Returns

`string`

***

### get\_pin\_row\_event\_args()

> **get\_pin\_row\_event\_args**(`rowID`, `index?`, `row?`, `pinned?`): [`IPinRowEventArgs`](IPinRowEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:405](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L405)

Represents an event, triggered when the pin state is changed

#### Parameters

##### rowID

`any`

##### index?

`number`

##### row?

[`RowType`](RowType.md)

##### pinned?

`boolean`

#### Returns

[`IPinRowEventArgs`](IPinRowEventArgs.md)

***

### get\_rec\_by\_id()

> **get\_rec\_by\_id**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L351)

Represents a method declaration for retrieving the data associated with a specific record by its unique identifier (of any type, taken as a parameter).

#### Parameters

##### id

`any`

#### Returns

`any`

***

### get\_rec\_id\_by\_index()

> **get\_rec\_id\_by\_index**(`index`, `dataCollection?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:361](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L361)

Represents a method declaration for retrieving the index of a record in the grid's data collection using its index.

#### Parameters

##### index

`number`

##### dataCollection?

`any`[]

#### Returns

`any`

***

### get\_rec\_index\_by\_id()

> **get\_rec\_index\_by\_id**(`pk`, `dataCollection?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:359](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L359)

Represents a method declaration for retrieving the index of a record in the grid's data collection using its unique identifier.

#### Parameters

##### pk

`string` \| `number`

##### dataCollection?

`any`[]

#### Returns

`number`

***

### get\_row\_by\_index()

> **get\_row\_by\_index**(`rowSelector`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:355](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L355)

Represents a method declaration for retrieving the row object associated with a specific index (taken as a parameter) in the grid

#### Parameters

##### rowSelector

`any`

#### Returns

[`RowType`](RowType.md)

***

### get\_row\_by\_key()

> **get\_row\_by\_key**(`rowSelector`): [`RowType`](RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:357](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L357)

Represents a method declaration for retrieving the row object associated with a specific key (taken as a parameter) in the grid

#### Parameters

##### rowSelector

`any`

#### Returns

[`RowType`](RowType.md)

***

### get\_row\_expansion\_state()

> **get\_row\_expansion\_state**(`id`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:385](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L385)

Represents a method declaration for retrieving the row's current state of expansion (used for tree grids)

#### Parameters

##### id

`any`

#### Returns

`boolean`

***

### get\_row\_id()

> **get\_row\_id**(`rowData`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:353](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L353)

Represents a method declaration for retrieving the unique identifier of a specific row by its data.

#### Parameters

##### rowData

`any`

#### Returns

`any`

***

### get\_row\_index\_in\_data()

> **get\_row\_index\_in\_data**(`rowID`, `dataCollection?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:362](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L362)

#### Parameters

##### rowID

`any`

##### dataCollection?

`any`[]

#### Returns

`number`

***

### get\_selected\_children()?

> `optional` **get\_selected\_children**(`record`, `selectedRowIDs`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:414](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L414)

#### Parameters

##### record

[`ITreeGridRecord`](ITreeGridRecord.md)

##### selectedRowIDs

`any`[]

#### Returns

`void`

***

### get\_summary\_data()

> **get\_summary\_data**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:388](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L388)

#### Returns

`any`[]

***

### getChildGrid()?

> `optional` **getChildGrid**(`path`): [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L420)

#### Parameters

##### path

[`IPathSegment`](IPathSegment.md)[]

#### Returns

[`GridType`](GridType.md)

***

### getChildGrids()?

> `optional` **getChildGrids**(`inDepth?`): [`GridType`](GridType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L419)

#### Parameters

##### inDepth?

`boolean`

#### Returns

[`GridType`](GridType.md)[]

***

### getParentRowId()?

> `optional` **getParentRowId**(`child`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:418](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L418)

#### Parameters

##### child

[`GridType`](GridType.md)

#### Returns

`any`

***

### getRowData()

> **getRowData**(`id`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:349](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L349)

Represents a method declaration for retrieving the data associated with a specific row by its unique identifier (of any type, taken as a parameter).

#### Parameters

##### id

`any`

#### Returns

`any`

***

### prepare\_sorting\_expression()

> **prepare\_sorting\_expression**(`stateCollections`, `expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:390](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L390)

#### Parameters

##### stateCollections

`any`[][]

##### expression

[`ISortingExpression`](ISortingExpression.md)

#### Returns

`void`

***

### registerChildRowIsland()?

> `optional` **registerChildRowIsland**(`rowIsland`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:423](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L423)

#### Parameters

##### rowIsland

[`GridType`](GridType.md)

#### Returns

`void`

***

### remove\_grouping\_expression()?

> `optional` **remove\_grouping\_expression**(`fieldName`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:416](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L416)

#### Parameters

##### fieldName

`string`

#### Returns

`void`

***

### row\_deleted\_transaction()

> **row\_deleted\_transaction**(`id`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:376](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L376)

#### Parameters

##### id

`any`

#### Returns

`boolean`

***

### set\_grouprow\_expansion\_state()?

> `optional` **set\_grouprow\_expansion\_state**(`groupRow`, `value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:375](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L375)

Represents a method declaration that sets the expansion state of a group row (used for tree grids)
It takes the value for the expansion as a parameter (expanded or collapsed)

#### Parameters

##### groupRow

[`IGroupByRecord`](IGroupByRecord.md)

##### value

`boolean`

#### Returns

`void`

***

### set\_row\_expansion\_state()

> **set\_row\_expansion\_state**(`id`, `expanded`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:387](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L387)

Represents a method declaration for setting a new expansion state. It can be triggered by an event

#### Parameters

##### id

`any`

##### expanded

`boolean`

##### event?

`Event`

#### Returns

`void`

***

### sort()

> **sort**(`expression`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:395](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L395)

Represents a method declaration for sorting by only one expression
The expression contains fieldName, sorting directory, whether case should be ignored and optional sorting strategy

#### Parameters

##### expression

[`ISortingExpression`](ISortingExpression.md)

#### Returns

`void`

***

### sort\_multiple()

> **sort\_multiple**(`expressions`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:400](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L400)

Represents a method declaration for sorting by multiple expressions
The expressions contains fieldName, sorting directory, whether case should be ignored and optional sorting strategy

#### Parameters

##### expressions

[`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

#### Returns

`void`

***

### sortDataByExpressions()

> **sortDataByExpressions**(`data`, `expressions`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:408](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L408)

#### Parameters

##### data

`any`[]

##### expressions

[`ISortingExpression`](ISortingExpression.md)\<`any`\>[]

#### Returns

`any`[]

***

### unsetChildRowIsland()?

> `optional` **unsetChildRowIsland**(`rowIsland`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:422](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L422)

#### Parameters

##### rowIsland

[`GridType`](GridType.md)

#### Returns

`void`

***

### update\_cell()

> **update\_cell**(`cell`): [`IGridEditEventArgs`](IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:410](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L410)

#### Parameters

##### cell

[`IgxCell`](../classes/IgxCell.md)

#### Returns

[`IGridEditEventArgs`](IGridEditEventArgs.md)

***

### update\_row()

> **update\_row**(`row`, `value`, `event?`): [`IGridEditEventArgs`](IGridEditEventArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:411](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L411)

#### Parameters

##### row

[`IgxEditRow`](../classes/IgxEditRow.md)

##### value

`any`

##### event?

`Event`

#### Returns

[`IGridEditEventArgs`](IGridEditEventArgs.md)
