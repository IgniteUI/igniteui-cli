# Class: IgxPdfExporterOptions

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L6)

Objects of this class are used to configure the PDF exporting process.

## Extends

- [`IgxExporterOptionsBase`](IgxExporterOptionsBase.md)

## Constructors

### Constructor

> **new IgxPdfExporterOptions**(`fileName`): `IgxPdfExporterOptions`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L113)

#### Parameters

##### fileName

`string`

#### Returns

`IgxPdfExporterOptions`

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

### customFont?

> `optional` **customFont?**: [`PdfUnicodeFont`](../interfaces/PdfUnicodeFont.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L111)

Custom font configuration for Unicode character support in PDF exports.

By default, the PDF exporter uses the built-in Helvetica font, which only supports
basic Latin characters. If your data contains non-Latin characters (such as Cyrillic,
Chinese, Japanese, Arabic, Hebrew, or special symbols), you must provide a custom
TrueType font (TTF) that includes the required character glyphs.

The font data must be provided as a Base64-encoded string of the TTF file contents.
You can optionally provide a separate bold variant for header styling.

#### Remarks

To convert a TTF file to Base64, you can use Node.js:
```javascript
const fs = require('fs');
const fontData = fs.readFileSync('path/to/font.ttf');
const base64 = fontData.toString('base64');
fs.writeFileSync('font-base64.ts', `export const MY_FONT = '${base64}';`);
```

Or use an online Base64 encoder tool to convert your TTF file.

#### Examples

Basic usage with a single font (used for both normal and bold text):
```typescript
import { NOTO_SANS_REGULAR } from './fonts/noto-sans';

const options = new IgxPdfExporterOptions('Export');
options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR
};
this.pdfExporter.export(this.grid, options);
```

Usage with separate normal and bold font variants:
```typescript
import { NOTO_SANS_REGULAR, NOTO_SANS_BOLD } from './fonts/noto-sans';

const options = new IgxPdfExporterOptions('Export');
options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR,
    bold: {
        name: 'NotoSans-Bold',
        data: NOTO_SANS_BOLD
    }
};
this.pdfExporter.export(this.grid, options);
```

```ts
Recommended fonts for Unicode support:
- Noto Sans: Covers most Unicode scripts (https://fonts.google.com/noto)
- Arial Unicode MS: Comprehensive Unicode coverage
- Source Han Sans: Excellent CJK (Chinese, Japanese, Korean) support
```

#### Memberof

IgxPdfExporterOptions

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

### fontSize

> **fontSize**: `number` = `10`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:49](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L49)

Specifies the font size for the table content. (10 by default)
```typescript
let fontSize = this.exportOptions.fontSize;
this.exportOptions.fontSize = 12;
```

#### Memberof

IgxPdfExporterOptions

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

***

### pageOrientation

> **pageOrientation**: `"portrait"` \| `"landscape"` = `'landscape'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L16)

Specifies the page orientation. (portrait or landscape, landscape by default)
```typescript
let pageOrientation = this.exportOptions.pageOrientation;
this.exportOptions.pageOrientation = 'portrait';
```

#### Memberof

IgxPdfExporterOptions

***

### pageSize

> **pageSize**: `string` = `'a4'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L27)

Specifies the page size. (a4, a3, letter, legal, etc., a4 by default)
```typescript
let pageSize = this.exportOptions.pageSize;
this.exportOptions.pageSize = 'letter';
```

#### Memberof

IgxPdfExporterOptions

***

### showTableBorders

> **showTableBorders**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L38)

Specifies whether to show table borders. (True by default)
```typescript
let showTableBorders = this.exportOptions.showTableBorders;
this.exportOptions.showTableBorders = false;
```

#### Memberof

IgxPdfExporterOptions

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

#### Inherited from

[`IgxExporterOptionsBase`](IgxExporterOptionsBase.md).[`fileName`](IgxExporterOptionsBase.md#filename)
