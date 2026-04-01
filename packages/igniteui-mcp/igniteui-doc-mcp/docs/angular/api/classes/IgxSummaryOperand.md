# Class: IgxSummaryOperand

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L8)

## Extended by

- [`IgxNumberSummaryOperand`](IgxNumberSummaryOperand.md)
- [`IgxDateSummaryOperand`](IgxDateSummaryOperand.md)
- [`IgxTimeSummaryOperand`](IgxTimeSummaryOperand.md)

## Constructors

### Constructor

> **new IgxSummaryOperand**(): `IgxSummaryOperand`

#### Returns

`IgxSummaryOperand`

## Methods

### operate()

> **operate**(`data?`, `_allData?`, `_fieldName?`, `_groupRecord?`): [`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/summaries/grid-summary.ts#L51)

Executes the static `count` method and returns `IgxSummaryResult[]`.
```typescript
interface IgxSummaryResult {
  key: string;
  label: string;
  summaryResult: any;
}
```
Can be overridden in the inherited classes to provide customization for the `summary`.
```typescript
class CustomSummary extends IgxSummaryOperand {
  constructor() {
    super();
  }
  public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: "test",
      label: "Test",
      summaryResult: IgxSummaryOperand.count(data)
    });
    return result;
  }
}
this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
```

#### Parameters

##### data?

`any`[] = `[]`

##### \_allData?

`any`[] = `[]`

##### \_fieldName?

`string`

##### \_groupRecord?

[`IGroupByRecord`](../interfaces/IGroupByRecord.md)

#### Returns

[`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)[]

#### Memberof

IgxSummaryOperand

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
