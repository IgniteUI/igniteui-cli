# Class: IgxGroupByRow

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:541](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L541)

Interface representing a row in the grid. It is essentially the blueprint to a row object.
Contains definitions of properties and methods, relevant to a row

## Implements

- [`RowType`](../interfaces/RowType.md)

## Properties

### grid

> **grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:550](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L550)

The grid that contains the row.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`grid`](../interfaces/RowType.md#grid)

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:545](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L545)

Returns the row index.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`index`](../interfaces/RowType.md#index)

***

### isGroupByRow

> **isGroupByRow**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:555](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L555)

Returns always true, because this is in instance of an IgxGroupByRow.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`isGroupByRow`](../interfaces/RowType.md#isgroupbyrow)

## Accessors

### children

#### Get Signature

> **get** **children**(): [`RowType`](../interfaces/RowType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:567](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L567)

Returns the child rows.

##### Returns

[`RowType`](../interfaces/RowType.md)[]

Optional
Contains the child rows of the current row, if there are any.

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`children`](../interfaces/RowType.md#children)

***

### expanded

#### Get Signature

> **get** **expanded**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:667](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L667)

Gets/sets whether the group row is expanded.
```typescript
const groupRowExpanded = groupRow.expanded;
```

##### Returns

`boolean`

#### Set Signature

> **set** **expanded**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:671](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L671)

Optional
Indicates whether the current row is expanded.
The value is true, if the row is expanded and false, if it is collapsed

##### Parameters

###### value

`boolean`

##### Returns

`void`

Optional
Indicates whether the current row is expanded.
The value is true, if the row is expanded and false, if it is collapsed

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`expanded`](../interfaces/RowType.md#expanded)

***

### groupRow

#### Get Signature

> **get** **groupRow**(): [`IGroupByRecord`](../interfaces/IGroupByRecord.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:560](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L560)

The IGroupByRecord object, representing the group record, if the row is a GroupByRow.

##### Returns

[`IGroupByRecord`](../interfaces/IGroupByRecord.md)

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`groupRow`](../interfaces/RowType.md#grouprow)

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:637](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L637)

Gets whether the row is selected.
Default value is `false`.
```typescript
row.selected = true;
```

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:648](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L648)

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

***

### viewIndex

#### Get Signature

> **get** **viewIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:579](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L579)

Returns the view index calculated per the grid page.

##### Returns

`number`

#### Implementation of

[`RowType`](../interfaces/RowType.md).[`viewIndex`](../interfaces/RowType.md#viewindex)

## Methods

### isActive()

> **isActive**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:675](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L675)

#### Returns

`boolean`

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-public-row.ts:685](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-public-row.ts#L685)

Toggles the group row expanded/collapsed state.
```typescript
groupRow.toggle()
```

#### Returns

`void`
