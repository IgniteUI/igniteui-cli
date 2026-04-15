# Abstract Class: IgxExporterOptionsBase

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:1](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L1)

## Extended by

- [`IgxCsvExporterOptions`](IgxCsvExporterOptions.md)
- [`IgxExcelExporterOptions`](IgxExcelExporterOptions.md)
- [`IgxPdfExporterOptions`](IgxPdfExporterOptions.md)

## Constructors

### Constructor

> **new IgxExporterOptionsBase**(`fileName`, `_fileExtension`): `IgxExporterOptionsBase`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L105)

#### Parameters

##### fileName

`string`

##### \_fileExtension

`string`

#### Returns

`IgxExporterOptionsBase`

## Properties

### \_fileExtension

> `protected` **\_fileExtension**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L105)

***

### alwaysExportHeaders

> **alwaysExportHeaders**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L101)

Specifies whether the headers should be exported if there is no data.
```typescript
let alwaysExportHeaders = this.exportOptions.alwaysExportHeaders;
this.exportOptions.alwaysExportHeaders = false;
```

#### Memberof

IgxExporterOptionsBase

***

### exportSummaries

> **exportSummaries**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L79)

Specifies whether the exported data should include column summaries.
```typescript
let exportSummaries = this.exportOptions.exportSummaries;
this.exportOptions.exportSummaries = true;
```

#### Memberof

IgxExporterOptionsBase

***

### freezeHeaders

> **freezeHeaders**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L90)

Specifies whether the exported data should have frozen headers.
```typescript
let freezeHeaders = this.exportOptions.freezeHeaders;
this.exportOptions.freezeHeaders = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreColumnsOrder

> **ignoreColumnsOrder**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L33)

Specifies if the exporter should ignore the current column order in the IgxGrid.
```typescript
let ignoreColumnsOrder = this.exportOptions.ignoreColumnsOrder;
this.exportOptions.ignoreColumnsOrder = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreColumnsVisibility

> **ignoreColumnsVisibility**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L11)

Specifies whether hidden columns should be exported.
```typescript
let ignoreColumnsVisibility = this.exportOptions.ignoreColumnsVisibility;
this.exportOptions.ignoreColumnsVisibility = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreFiltering

> **ignoreFiltering**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L22)

Specifies whether filtered out rows should be exported.
```typescript
let ignoreFiltering = this.exportOptions.ignoreFiltering;
this.exportOptions.ignoreFiltering = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreGrouping

> **ignoreGrouping**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L57)

Specifies whether the exported data should be grouped as in the provided IgxGrid.
```typescript
let ignoreGrouping = this.exportOptions.ignoreGrouping;
this.exportOptions.ignoreGrouping = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreMultiColumnHeaders

> **ignoreMultiColumnHeaders**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L68)

Specifies whether the exported data should include multi column headers as in the provided IgxGrid.
```typescript
let ignoreMultiColumnHeaders = this.exportOptions.ignoreMultiColumnHeaders;
this.exportOptions.ignoreMultiColumnHeaders = true;
```

#### Memberof

IgxExporterOptionsBase

***

### ignoreSorting

> **ignoreSorting**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L46)

Specifies whether the exported data should be sorted as in the provided IgxGrid.
When you export grouped data, setting ignoreSorting to true will cause
the grouping to fail because it relies on the sorting of the records.
```typescript
let ignoreSorting = this.exportOptions.ignoreSorting;
this.exportOptions.ignoreSorting = true;
```

#### Memberof

IgxExporterOptionsBase

## Accessors

### fileName

#### Get Signature

> **get** **fileName**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L121)

Gets the file name which will be used for the exporting operation.
```typescript
let fileName = this.exportOptions.fileName;
```

##### Memberof

IgxExporterOptionsBase

##### Returns

`string`

#### Set Signature

> **set** **fileName**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L133)

Sets the file name which will be used for the exporting operation.
```typescript
this.exportOptions.fileName = 'exportedData01';
```

##### Memberof

IgxExporterOptionsBase

##### Parameters

###### value

`string`

##### Returns

`void`
