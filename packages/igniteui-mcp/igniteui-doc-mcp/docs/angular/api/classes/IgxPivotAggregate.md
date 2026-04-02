# Class: IgxPivotAggregate

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:5](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L5)

## Extended by

- [`IgxPivotNumericAggregate`](IgxPivotNumericAggregate.md)
- [`IgxPivotDateAggregate`](IgxPivotDateAggregate.md)
- [`IgxPivotTimeAggregate`](IgxPivotTimeAggregate.md)

## Constructors

### Constructor

> **new IgxPivotAggregate**(): `IgxPivotAggregate`

#### Returns

`IgxPivotAggregate`

## Methods

### aggregators()

> `static` **aggregators**(): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L14)

Gets array with default aggregator function for base aggregation.
```typescript
IgxPivotAggregate.aggregators();
```

#### Returns

[`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

#### Memberof

IgxPivotAggregate

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
