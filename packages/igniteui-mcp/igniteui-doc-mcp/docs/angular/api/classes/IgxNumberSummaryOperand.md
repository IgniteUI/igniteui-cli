# Class: IgxNumberSummaryOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L63)

## Extends

- [`IgxSummaryOperand`](IgxSummaryOperand.md)

## Constructors

### Constructor

> **new IgxNumberSummaryOperand**(): `IgxNumberSummaryOperand`

#### Returns

`IgxNumberSummaryOperand`

#### Inherited from

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`constructor`](IgxSummaryOperand.md#constructor)

## Methods

### operate()

> **operate**(`data?`, `allData?`, `fieldName?`, `groupRecord?`): [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L147)

Executes the static methods and returns `IgxSummaryResult[]`.
```typescript
interface IgxSummaryResult {
  key: string;
  label: string;
  summaryResult: any;
}
```
Can be overridden in the inherited classes to provide customization for the `summary`.
```typescript
class CustomNumberSummary extends IgxNumberSummaryOperand {
  constructor() {
    super();
  }
  public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
    const result = super.operate(data, allData, fieldName, groupRecord);
    result.push({
      key: "avg",
      label: "Avg",
      summaryResult: IgxNumberSummaryOperand.average(data)
    });
    result.push({
      key: 'mdn',
      label: 'Median',
      summaryResult: this.findMedian(data)
    });
    return result;
  }
}
this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
```

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

IgxNumberSummaryOperand

#### Overrides

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`operate`](IgxSummaryOperand.md#operate)

***

### average()

> `static` **average**(`data`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L109)

Returns the average numeric value in the data provided data records.
If filtering is applied, returns the average numeric value in the filtered data records.
```typescript
IgxSummaryOperand.average(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`number`

#### Memberof

IgxNumberSummaryOperand

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

### max()

> `static` **max**(`data`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L85)

Returns the maximum numeric value in the provided data records.
If filtering is applied, returns the maximum value in the filtered data records.
```typescript
IgxNumberSummaryOperand.max(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`number`

#### Memberof

IgxNumberSummaryOperand

***

### min()

> `static` **min**(`data`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L73)

Returns the minimum numeric value in the provided data records.
If filtering is applied, returns the minimum value in the filtered data records.
```typescript
IgxNumberSummaryOperand.min(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`number`

#### Memberof

IgxNumberSummaryOperand

***

### sum()

> `static` **sum**(`data`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L97)

Returns the sum of the numeric values in the provided data records.
If filtering is applied, returns the sum of the numeric values in the data records.
```typescript
IgxNumberSummaryOperand.sum(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`number`

#### Memberof

IgxNumberSummaryOperand
