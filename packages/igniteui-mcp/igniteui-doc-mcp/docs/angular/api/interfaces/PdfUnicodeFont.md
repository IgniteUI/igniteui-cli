# Interface: PdfUnicodeFont

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L154)

Font configuration interface for PDF export with Unicode character support.

This interface defines the structure for providing custom TrueType fonts (TTF)
to the PDF exporter. Custom fonts are required when exporting data that contains
non-Latin characters, as the default Helvetica font only supports basic Latin characters.

## Remarks

The font data must be Base64-encoded TTF file contents. Both the normal and optional
bold variants should be from the same font family for consistent styling.

If the bold variant is not provided, the normal font will be used for both
regular text and headers (which are typically rendered in bold).

## Examples

Minimal configuration:
```typescript
const font: PdfUnicodeFont = {
    name: 'MyFont',
    data: 'AAEAAAATAQAABAAwR0...' // Base64-encoded TTF data
};
```

Full configuration with bold variant:
```typescript
const font: PdfUnicodeFont = {
    name: 'MyFont-Regular',
    data: 'AAEAAAATAQAABAAwR0...', // Base64-encoded regular TTF
    bold: {
        name: 'MyFont-Bold',
        data: 'BBFAAAAUBQAACAAxS1...' // Base64-encoded bold TTF
    }
};
```

## Properties

### bold?

> `optional` **bold?**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:192](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L192)

Optional bold variant of the font for styling headers and emphasized text.

If provided, this font will be used for table headers and any other text
that should appear in bold. If not provided, the normal font specified
by `data` and `name` will be used for all text, including headers.

#### data

> **data**: `string`

Base64-encoded font data from a bold TrueType Font (TTF) file.

#### name

> **name**: `string`

The font family name for the bold variant.

This should be different from the regular font name to avoid conflicts
(e.g., 'NotoSans-Bold' vs 'NotoSans').

#### Remarks

For best visual results, use the bold variant from the same font family
as the regular font.

***

### data

> **data**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L167)

Base64-encoded font data from a TrueType Font (TTF) file.

This should be the complete TTF file contents encoded as a Base64 string.
The font must include glyphs for all characters that may appear in your grid data.

#### Remarks

To convert a TTF file to Base64 in Node.js:
```javascript
const base64Data = require('fs').readFileSync('font.ttf').toString('base64');
```

***

### name

> **name**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/services/pdf/pdf-exporter-options.ts#L179)

The font family name to register with the PDF library.

This name is used internally by jsPDF to reference the font. It should be
a simple identifier without spaces (e.g., 'NotoSans', 'ArialUnicode').

#### Remarks

The name does not need to match the actual font's internal name, but using
a descriptive name helps with debugging and maintenance.
