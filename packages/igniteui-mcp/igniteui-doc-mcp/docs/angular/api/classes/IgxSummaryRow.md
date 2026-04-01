# Class: IgxSummaryRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:694](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L694)

Interface representing a row in the grid. It is essentially the blueprint to a row object.
Contains definitions of properties and methods, relevant to a row

## Implements

- [`RowType`](../interfaces/RowType.md)

## Properties

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:703](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L703)

The grid that contains the row.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`grid`](../interfaces/RowType.md#grid)

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:698](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L698)

Returns the row index.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`index`](../interfaces/RowType.md#index)

***

### isSummaryRow

> **isSummaryRow**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:708](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L708)

Returns always true, because this is in instance of an IgxGroupByRow.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`isSummaryRow`](../interfaces/RowType.md#issummaryrow)

## Accessors

### summaries

#### Get Signature

> **get** **summaries**(): `Map`\<`string`, [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:713](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L713)

The IGroupByRecord object, representing the group record, if the row is a GroupByRow.

##### Returns

`Map`\<`string`, [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]\>

Optional
A map of column field names to the summary results for the row.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`summaries`](../interfaces/RowType.md#summaries)

***

### viewIndex

#### Get Signature

> **get** **viewIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:720](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L720)

Returns the view index calculated per the grid page.

##### Returns

`number`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`viewIndex`](../interfaces/RowType.md#viewindex)
