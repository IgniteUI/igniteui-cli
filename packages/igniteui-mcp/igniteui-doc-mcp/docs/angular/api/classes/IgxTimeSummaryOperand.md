# Class: IgxTimeSummaryOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:256](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L256)

## Extends

- [`IgxSummaryOperand`](IgxSummaryOperand.md)

## Constructors

### Constructor

> **new IgxTimeSummaryOperand**(): `IgxTimeSummaryOperand`

#### Returns

`IgxTimeSummaryOperand`

#### Inherited from

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`constructor`](IgxSummaryOperand.md#constructor)

## Methods

### operate()

> **operate**(`data?`, `allData?`, `fieldName?`, `groupRecord?`): [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:290](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L290)

#### Parameters

##### data?

`any`[] = `[]`

##### allData?

`any`[] = `[]`

##### fieldName?

`string`

##### groupRecord?

[`IGroupByRecord`](../interfaces/IGroupByRecord.md)

#### Returns

[`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

#### Memberof

IgxTimeSummaryOperand

#### Overrides

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`operate`](IgxSummaryOperand.md#operate)

***

### count()

> `static` **count**(`data`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L18)

Counts all the records in the data source.
If filtering is applied, counts only the filtered records.
```typescript
IgxSummaryOperand.count(dataSource);
```

#### Parameters

##### data

`any`[]

#### Returns

`number`

#### Memberof

IgxSummaryOperand

#### Inherited from

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`count`](IgxSummaryOperand.md#count)

***

### earliestTime()

> `static` **earliestTime**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L282)

Returns the earliest time value in the data records. Compare only the time part of the date.
If filtering is applied, returns the earliest time value in the filtered data records.
```typescript
IgxTimeSummaryOperand.earliestTime(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`any`

#### Memberof

IgxTimeSummaryOperand

***

### latestTime()

> `static` **latestTime**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:266](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L266)

Returns the latest time value in the data records. Compare only the time part of the date.
If filtering is applied, returns the latest time value in the filtered data records.
```typescript
IgxTimeSummaryOperand.latestTime(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`any`

#### Memberof

IgxTimeSummaryOperand
