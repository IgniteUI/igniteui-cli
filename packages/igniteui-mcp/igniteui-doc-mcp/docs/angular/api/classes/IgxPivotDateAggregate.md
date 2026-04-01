# Class: IgxPivotDateAggregate

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L126)

## Extends

- [`IgxPivotAggregate`](IgxPivotAggregate.md)

## Constructors

### Constructor

> **new IgxPivotDateAggregate**(): `IgxPivotDateAggregate`

#### Returns

`IgxPivotDateAggregate`

#### Inherited from

[`IgxPivotAggregate`](IgxPivotAggregate.md).[`constructor`](IgxPivotAggregate.md#constructor)

## Methods

### aggregators()

> `static` **aggregators**(): [`IPivotAggregator`](../interfaces/IPivotAggregator.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L135)

Gets array with default aggregator function for date aggregation.
```typescript
IgxPivotDateAggregate.aggregators();
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

### earliest()

> `static` **earliest**(`members`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L172)

Returns the earliest date value in the data records.
If filtering is applied, returns the latest date value in the filtered data records.
```typescript
IgxPivotDateAggregate.earliest(data);
```

#### Parameters

##### members

`any`[]

#### Returns

`any`

#### Memberof

IgxPivotDateAggregate

***

### latest()

> `static` **latest**(`members`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts:159](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-aggregate.ts#L159)

Returns the latest date value in the data records.
If filtering is applied, returns the latest date value in the filtered data records.
```typescript
IgxPivotDateAggregate.latest(data);
```

#### Parameters

##### members

`any`[]

#### Returns

`any`

#### Memberof

IgxPivotDateAggregate
