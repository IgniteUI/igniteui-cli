# Class: IgxPivotNumericAggregate

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L35)

## Extends

- [`IgxPivotAggregate`](IgxPivotAggregate.md)

## Constructors

### Constructor

> **new IgxPivotNumericAggregate**(): `IgxPivotNumericAggregate`

#### Returns

`IgxPivotNumericAggregate`

#### Inherited from

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`constructor`](IgxPivotAggregate.md#constructor)

## Methods

### aggregators()

> `static` **aggregators**(): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L45)

Gets array with default aggregator function for numeric aggregation.
```typescript
IgxPivotAggregate.aggregators();
```

#### Returns

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

#### Memberof

IgxPivotAggregate

#### Overrides

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`aggregators`](IgxPivotAggregate.md#aggregators)

***

### average()

> `static` **average**(`members`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L121)

Returns the average numeric value in the data provided data records.
If filtering is applied, returns the average numeric value in the filtered data records.
```typescript
IgxPivotNumericAggregate.average(data);
```

#### Parameters

##### members

`number`[]

#### Returns

`number`

#### Memberof

IgxPivotNumericAggregate

***

### count()

> `static` **count**(`members`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L30)

Counts all the records in the data source.
If filtering is applied, counts only the filtered records.
```typescript
IgxSummaryOperand.count(dataSource);
```

#### Parameters

##### members

`number`[]

#### Returns

`number`

#### Memberof

IgxPivotAggregate

#### Inherited from

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`count`](IgxPivotAggregate.md#count)

***

### max()

> `static` **max**(`members`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L95)

Returns the maximum numeric value in the provided data records.
If filtering is applied, returns the maximum value in the filtered data records.
```typescript
IgxPivotNumericAggregate.max(data);
```

#### Parameters

##### members

`number`[]

#### Returns

`number`

#### Memberof

IgxPivotNumericAggregate

***

### min()

> `static` **min**(`members`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L82)

Returns the minimum numeric value in the provided data records.
If filtering is applied, returns the minimum value in the filtered data records.
```typescript
IgxPivotNumericAggregate.min(members, data);
```

#### Parameters

##### members

`number`[]

#### Returns

`number`

#### Memberof

IgxPivotNumericAggregate

***

### sum()

> `static` **sum**(`members`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L108)

Returns the sum of the numeric values in the provided data records.
If filtering is applied, returns the sum of the numeric values in the data records.
```typescript
IgxPivotNumericAggregate.sum(data);
```

#### Parameters

##### members

`number`[]

#### Returns

`number`

#### Memberof

IgxPivotNumericAggregate
