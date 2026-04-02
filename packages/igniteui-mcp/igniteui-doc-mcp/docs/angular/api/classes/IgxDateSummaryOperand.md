# Class: IgxDateSummaryOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L179)

## Extends

- [`IgxSummaryOperand`](IgxSummaryOperand.md)

## Constructors

### Constructor

> **new IgxDateSummaryOperand**(): `IgxDateSummaryOperand`

#### Returns

`IgxDateSummaryOperand`

#### Inherited from

[`IgxSummaryOperand`](IgxSummaryOperand.md).[`constructor`](IgxSummaryOperand.md#constructor)

## Methods

### operate()

> **operate**(`data?`, `allData?`, `fieldName?`, `groupRecord?`): [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L236)

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
class CustomDateSummary extends IgxDateSummaryOperand {
  constructor() {
    super();
  }
  public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
    const result = super.operate(data, allData, fieldName, groupRecord);
    result.push({
      key: "deadline",
      label: "Deadline Date",
      summaryResult: this.calculateDeadline(data);
    });
    return result;
  }
}
this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
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

IgxDateSummaryOperand

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

### earliest()

> `static` **earliest**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:202](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L202)

Returns the earliest date value in the data records.
If filtering is applied, returns the latest date value in the filtered data records.
```typescript
IgxDateSummaryOperand.earliest(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`any`

#### Memberof

IgxDateSummaryOperand

***

### latest()

> `static` **latest**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L189)

Returns the latest date value in the data records.
If filtering is applied, returns the latest date value in the filtered data records.
```typescript
IgxDateSummaryOperand.latest(data);
```

#### Parameters

##### data

`any`[]

#### Returns

`any`

#### Memberof

IgxDateSummaryOperand
