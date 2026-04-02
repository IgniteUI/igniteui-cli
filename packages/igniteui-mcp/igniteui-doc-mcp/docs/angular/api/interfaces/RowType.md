# Interface: RowType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L139)

Interface representing a row in the grid. It is essentially the blueprint to a row object.
Contains definitions of properties and methods, relevant to a row

## Properties

### addRowUI?

> `optional` **addRowUI?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:224](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L224)

***

### beginAddRow?

> `optional` **beginAddRow?**: () => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L246)

Optional
A method to handle adding a new row

#### Returns

`void`

***

### cells?

> `optional` **cells?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L163)

Optional
A list or an array of cells, that belong to the row

***

### children?

> `optional` **children?**: `RowType`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:205](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L205)

Optional
Contains the child rows of the current row, if there are any.

***

### data?

> `optional` **data?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L158)

***

### delete?

> `optional` **delete?**: () => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L257)

Optional
A method to handle deleting rows

#### Returns

`any`

***

### deleted?

> `optional` **deleted?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L195)

Optional
Indicates whether the row is marked for deletion.

***

### disabled?

> `optional` **disabled?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:168](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L168)

Optional
Indicates whether the current row is disabled

***

### expanded?

> `optional` **expanded?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L190)

Optional
Indicates whether the current row is expanded.
The value is true, if the row is expanded and false, if it is collapsed

***

### focused?

> `optional` **focused?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:229](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L229)

Optional
Indicates whether the row is currently focused.

***

### grid

> **grid**: [`GridType`](GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:231](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L231)

Represent the grid instance, the row belongs to

***

### groupRow?

> `optional` **groupRow?**: [`IGroupByRecord`](IGroupByRecord.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L155)

***

### hasChildren?

> `optional` **hasChildren?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L217)

Optional
Indicates whether the current row has any child rows

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L144)

The index of the row within the grid

***

### inEditMode?

> `optional` **inEditMode?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:200](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L200)

Optional
Indicates whether the row is currently being edited.

***

### isGroupByRow?

> `optional` **isGroupByRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L147)

Indicates whether the row is grouped.

***

### isSummaryRow?

> `optional` **isSummaryRow?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L148)

***

### key?

> `optional` **key?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:156](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L156)

***

### nativeElement?

> `optional` **nativeElement?**: `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L142)

Represents the native HTML element of the row itself

***

### onClick?

> `optional` **onClick?**: (`event`) => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:240](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L240)

Optional
A method to handle click event on the row
It takes a `MouseEvent` as an argument

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### onRowSelectorClick?

> `optional` **onRowSelectorClick?**: (`event`) => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:233](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L233)

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### parent?

> `optional` **parent?**: `RowType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:212](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L212)

Optional
Contains the parent row of the current row, if it has one.
If the parent row exist, it means that the current row is a child row

***

### pin?

> `optional` **pin?**: () => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:262](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L262)

Optional
A method to handle pinning a row

#### Returns

`void`

***

### pinned?

> `optional` **pinned?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L179)

Optional
Indicates whether the current row is pinned.

***

### selected?

> `optional` **selected?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L184)

Optional
Indicates whether the current row is selected

***

### summaries?

> `optional` **summaries?**: `Map`\<`string`, [`IgxSummaryResult`](IgxSummaryResult.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L154)

Optional
A map of column field names to the summary results for the row.

***

### treeRow?

> `optional` **treeRow?**: [`ITreeGridRecord`](ITreeGridRecord.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:223](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L223)

Optional
Represents the hierarchical record associated with the row (for tree grids).
It is of type ITreeGridRecord, which contains the data, children, the hierarchical level, etc.

***

### unpin?

> `optional` **unpin?**: () => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L267)

Optional
A method to handle unpinning a row, that has been pinned

#### Returns

`void`

***

### update?

> `optional` **update?**: (`value`) => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L252)

Optional
A method to handle changing the value of elements of the row
It takes the new value as an argument

#### Parameters

##### value

`any`

#### Returns

`void`

***

### validation?

> `readonly` `optional` **validation?**: [`IGridValidationState`](IGridValidationState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L157)

***

### viewIndex

> **viewIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L145)

***

### virtDirRow?

> `optional` **virtDirRow?**: [`IgxGridForOfDirective`](../classes/IgxGridForOfDirective.md)\<[`ColumnType`](ColumnType.md), [`ColumnType`](ColumnType.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L174)

Optional
Virtualization state of data record added from cache
