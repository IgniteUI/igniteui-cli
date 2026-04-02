# Class: IgxExcelExporterOptions

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L6)

Objects of this class are used to configure the Excel exporting process.

## Extends

- [`IgxExporterOptionsBase`](IgxExporterOptionsBase.md)

## Constructors

### Constructor

> **new IgxExcelExporterOptions**(`fileName`): `IgxExcelExporterOptions`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L34)

#### Parameters

##### fileName

`string`

#### Returns

`IgxExcelExporterOptions`

#### Overrides

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`constructor`](IgxExporterOptionsBase.md#constructor)

## Properties

### \_fileExtension

> `protected` **\_fileExtension**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/exporter-common/exporter-options-base.ts#L105)

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`_fileExtension`](IgxExporterOptionsBase.md#_fileextension)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`alwaysExportHeaders`](IgxExporterOptionsBase.md#alwaysexportheaders)

***

### exportAsTable

> **exportAsTable**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L28)

Specifies whether the exported data should be formatted as Excel table. (True by default)
```typescript
let exportAsTable = this.exportOptions.exportAsTable;
this.exportOptions.exportAsTable = false;
```

#### Memberof

IgxExcelExporterOptions

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`exportSummaries`](IgxExporterOptionsBase.md#exportsummaries)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`freezeHeaders`](IgxExporterOptionsBase.md#freezeheaders)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreColumnsOrder`](IgxExporterOptionsBase.md#ignorecolumnsorder)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreColumnsVisibility`](IgxExporterOptionsBase.md#ignorecolumnsvisibility)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreFiltering`](IgxExporterOptionsBase.md#ignorefiltering)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreGrouping`](IgxExporterOptionsBase.md#ignoregrouping)

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreMultiColumnHeaders`](IgxExporterOptionsBase.md#ignoremulticolumnheaders)

***

### ignorePinning

> **ignorePinning**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L17)

Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true,
this option will always be considered as set to true.
```typescript
let ignorePinning = this.exportOptions.ignorePinning;
this.exportOptions.ignorePinning = true;
```

#### Memberof

IgxExcelExporterOptions

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`ignoreSorting`](IgxExporterOptionsBase.md#ignoresorting)

## Accessors

### columnWidth

#### Get Signature

> **get** **columnWidth**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L46)

Gets the width of the columns in the exported excel file.
```typescript
let width = this.exportOptions.columnWidth;
```

##### Memberof

IgxExcelExporterOptions

##### Returns

`number`

#### Set Signature

> **set** **columnWidth**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L59)

Sets the width of the columns in the exported excel file. If left unspecified,
the width of the column or the default width of the excel columns will be used.
```typescript
this.exportOptions.columnWidth = 55;
```

##### Memberof

IgxExcelExporterOptions

##### Parameters

###### value

`number`

##### Returns

`void`

***

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`fileName`](IgxExporterOptionsBase.md#filename)

***

### rowHeight

#### Get Signature

> **get** **rowHeight**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L75)

Gets the height of the rows in the exported excel file.
```typescript
let height = this.exportOptions.rowHeight;
```

##### Memberof

IgxExcelExporterOptions

##### Returns

`number`

#### Set Signature

> **set** **rowHeight**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L88)

Sets the height of the rows in the exported excel file. If left unspecified or 0,
the default height of the excel rows will be used.
```typescript
this.exportOptions.rowHeight = 25;
```

##### Memberof

IgxExcelExporterOptions

##### Parameters

###### value

`number`

##### Returns

`void`

***

### worksheetName

#### Get Signature

> **get** **worksheetName**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L104)

Gets the name of the worksheet in the exported excel file.
```typescript
let worksheetName = this.exportOptions.worksheetName;
```

##### Memberof

IgxExcelExporterOptions

##### Returns

`string`

#### Set Signature

> **set** **worksheetName**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/excel/excel-exporter-options.ts#L120)

Sets the name of the worksheet in the exported excel file.
```typescript
this.exportOptions.worksheetName = "Worksheet";
```

##### Memberof

IgxExcelExporterOptions

##### Parameters

###### value

`string`

##### Returns

`void`
