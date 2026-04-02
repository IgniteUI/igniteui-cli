# Class: IgxPivotTimeAggregate

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L177)

## Extends

- [`IgxPivotAggregate`](IgxPivotAggregate.md)

## Constructors

### Constructor

> **new IgxPivotTimeAggregate**(): `IgxPivotTimeAggregate`

#### Returns

`IgxPivotTimeAggregate`

#### Inherited from

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`constructor`](IgxPivotAggregate.md#constructor)

## Methods

### aggregators()

> `static` **aggregators**(): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L186)

Gets array with default aggregator function for time aggregation.
```typescript
IgxPivotTimeAggregate.aggregators();
```

#### Returns

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

#### Memberof

IgxPivotAggregate

#### Overrides

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`aggregators`](IgxPivotAggregate.md#aggregators)

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

### earliestTime()

> `static` **earliestTime**(`members`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:224](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L224)

Returns the earliest time value in the data records. Compare only the time part of the date.
If filtering is applied, returns the earliest time value in the filtered data records.
```typescript
IgxPivotTimeAggregate.earliestTime(data);
```

#### Parameters

##### members

`any`[]

#### Returns

`any`

#### Memberof

IgxPivotTimeAggregate

***

### latestTime()

> `static` **latestTime**(`members`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L211)

Returns the latest time value in the data records. Compare only the time part of the date.
If filtering is applied, returns the latest time value in the filtered data records.
```typescript
IgxPivotTimeAggregate.latestTime(data);
```

#### Parameters

##### members

`any`[]

#### Returns

`any`

#### Memberof

IgxPivotTimeAggregate
