---
title: Export to PDF Component - Native Angular | Ignite UI for Angular
_description: Users can export their data for offline presentation can do so in PDF format with the Export to PDF Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, PDF Export, Angular PDF Component, Angular Export PDF
_license: commercial
_tocName: PDF Exporter
_premium: true
---

# PDF Exporter

<p class="highlight">

The Ignite UI for Angular PDF Exporter service provides powerful functionality to export data in PDF format from various sources, including raw data arrays and advanced grid components such as [**IgxGrid**](grid/grid.md), [**IgxTreeGrid**](treegrid/tree-grid.md), [**IgxHierarchicalGrid**](hierarchicalgrid/hierarchical-grid.md), and [**IgxPivotGrid**](pivotGrid/pivot-grid.md). The exporting functionality is encapsulated in the [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html) class, which enables seamless data export to PDF format with comprehensive features including multi-page document support, automatic page breaks, and customizable formatting options.
</p>
<div class="divider"></div>

## Angular PDF Exporter Example


```typescript
import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterOptions, IgxPdfExporterService } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-pdf-export',
    styleUrls: ['./pdf-export.component.scss'],
    templateUrl: './pdf-export.component.html',
    imports: [IgxButtonDirective]
})
export class PdfExportComponent {
  private pdfExportService = inject(IgxPdfExporterService);

  public localData = signal([
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ]);

  public exportButtonHandler() {
    this.pdfExportService.exportData(this.localData(), new IgxPdfExporterOptions('ExportFileFromData'));
  }
}
```
```html
<p>
    Press the "Export Data" button below to export an array as a .pdf file.<br />
</p>
<button igxButton="contained" (click)="exportButtonHandler()">Export Data</button><br />
```

<div class="divider--half"></div>

## Usage

To start using the Ignite UI PDF Exporter, first import the [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html) into your component:

```typescript
import { IgxPdfExporterService } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

@Component({
  ...
})
export class AppComponent { ... }
```

To initiate an export process, you can use a button click handler in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to PDF</button>
```

You can access the [`IgxPdfExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html) by using the `inject` function. To export data in PDF format, you need to invoke the exporter service's [`exportData`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html#exportdata) method. This method accepts the data you want to export as its first argument, and an [`IgxPdfExporterOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporteroptions.html) instance as its second argument, which allows you to configure the export process.

Here is the code that will execute the export process in the component's TypeScript file:

```typescript
// component.ts

...
import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService, IgxPdfExporterOptions } from '@infragistics/igniteui-angular/grids/core'; for licensed package
...

public localData = signal([
  { Name: 'Eric Ridley', Age: '26' },
  { Name: 'Alanis Brook', Age: '22' },
  { Name: 'Jonathan Morris', Age: '23' }
]);

private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.pdfExportService.exportData(this.localData, new IgxPdfExporterOptions('ExportedDataFile'));
}

```

If all went well, you should see an export button. When pressed, it will trigger the export process and the browser will download a file named "ExportedDataFile.pdf" which contains the data from the `localData` array in PDF format.

## Customizing the Exported Content

In the above examples, the PDF Exporter service exports all available data. However, there are situations where you may want to skip exporting a row or an entire column. To achieve this, you can subscribe to the [`columnExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html#columnexporting) and/or [`rowExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html#rowexporting) events, which are fired for each column and/or each row respectively. You can then cancel the export by setting the event argument object's [`cancel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/irowexportingeventargs.html#cancel) property to `true`.

The following example excludes a column from the export if its header is "Age" and its index is 1:

```typescript
// component.ts

this.pdfExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.pdfExportService.export(this.igxGrid1, new IgxPdfExporterOptions('ExportedDataFile'));
```

## PDF Export Options

The [`IgxPdfExporterOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporteroptions.html) class provides several properties to customize the PDF export:

- **pageOrientation**: Specifies the page orientation (`portrait` or `landscape`). Default is `landscape`.
- **pageSize**: Specifies the page size (`a3`, `a4`, `a5`, `letter`, `legal`, etc.). Default is `a4`.
- **showTableBorders**: Determines whether to display table borders. Default is `true`.
- **fontSize**: Sets the font size for the table content. Default is `10`.
- **customFont**: Specifies a custom TrueType font (TTF) for Unicode character support. Required when exporting data containing non-Latin characters.

The following example demonstrates how to configure these options:

```typescript
// component.ts

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.pageOrientation = 'portrait';
  options.pageSize = 'letter';
  options.showTableBorders = true;
  options.fontSize = 12;

  this.pdfExportService.exportData(this.localData, options);
}
```

### Custom Font Configuration for Unicode Support

By default, the PDF exporter uses the built-in Helvetica font, which only supports basic Latin characters. If your data contains non-Latin characters (such as Cyrillic, Chinese, Japanese, Arabic, Hebrew, or special symbols), you must provide a custom TrueType font (TTF) using the `customFont` property.

The font data must be provided as a Base64-encoded string of the TTF file contents. You can optionally provide a separate bold variant for header styling.

#### Converting TTF Files to Base64

To convert a TTF file to Base64, use Node.js:

```javascript
const fs = require('fs');
const fontData = fs.readFileSync('path/to/font.ttf');
const base64 = fontData.toString('base64');
fs.writeFileSync('font-base64.ts', `export const MY_FONT = '${base64}';`);
```

Alternatively, you can use an online Base64 encoder tool to convert your TTF file.

#### Example: Basic Custom Font Usage

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded font data]...';

// component.ts
import { NOTO_SANS_REGULAR } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR
  };

  this.pdfExportService.exportData(this.localData, options);
}
```

#### Example: Custom Font with Bold Variant

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded regular font]...';
export const NOTO_SANS_BOLD = 'BBFAAAAUBQAACAAxS1...[base64-encoded bold font]...';

// component.ts
import { NOTO_SANS_REGULAR, NOTO_SANS_BOLD } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR,
    bold: {
      name: 'NotoSans-Bold',
      data: NOTO_SANS_BOLD
    }
  };

  this.pdfExportService.export(this.igxGrid1, options);
}
```

#### Recommended Fonts for Unicode Support

The following fonts provide excellent Unicode coverage:

- **Noto Sans**: Covers most Unicode scripts — [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans)
- **Arial Unicode MS**: Comprehensive Unicode character support
- **Source Han Sans**: Excellent CJK (Chinese, Japanese, Korean) support

### Demo

```typescript
import { ChangeDetectionStrategy, Component, signal, computed, inject, viewChild } from '@angular/core';
import { IgxColumnComponent, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import notoSansFontData from './fonts/noto-sans.json';

/**
 * Demonstrates PDF export with a custom Unicode font.
 *
 * The sample ships with Noto Sans (Latin/Cyrillic/Greek) loaded from
 * fonts/noto-sans.json. Users can also upload their own .ttf font —
 * for example Noto Sans CJK for Japanese/Chinese/Korean support.
 *
 * All Noto fonts are licensed under the SIL Open Font License 1.1
 * (see fonts/OFL.txt).
 */
@Component({
    selector: 'app-export-pdf-custom-font',
    templateUrl: './export-pdf-custom-font.component.html',
    styleUrls: ['./export-pdf-custom-font.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IgxGridComponent, IgxColumnComponent]
})
export class ExportPdfCustomFontComponent {
    private pdfExporter = inject(IgxPdfExporterService);

    protected readonly grid = viewChild.required<IgxGridComponent>('grid');

    protected readonly isExporting = signal(false);
    protected readonly builtInFontLoaded = signal(false);
    protected readonly builtInFontLoading = signal(false);
    protected readonly uploadedFontName = signal('');
    protected readonly exportStatus = signal('');

    // Built-in Noto Sans (Latin / Cyrillic / Greek)
    private builtInFontData: string | null = null;
    private builtInBoldFontData: string | null = null;

    // User-uploaded font (e.g. Noto Sans CJK for Japanese)
    private uploadedFontData = signal<string | null>(null);

    protected readonly canExportBuiltIn = computed(() => this.builtInFontLoaded() && !this.isExporting());
    protected readonly canExportUploaded = computed(() => !!this.uploadedFontData() && !this.isExporting());

    protected readonly data = signal([
        { Name: 'Александър Иванов', City: 'София', Product: '商品A', Amount: 1500 },
        { Name: '田中太郎', City: '東京', Product: '商品B', Amount: 2300 },
        { Name: 'Élise Müller', City: 'München', Product: '商品D', Amount: 3200 },
        { Name: '王小明', City: '北京', Product: '商品E', Amount: 1750 },
        { Name: 'Ирина Петрова', City: 'Санкт-Петербург', Product: '製品 F', Amount: 2890 }
    ]);

    constructor() {
        const fontJson = notoSansFontData as unknown as { normal: string; bold: string };
        this.builtInFontData = fontJson.normal;
        this.builtInBoldFontData = fontJson.bold;
        this.builtInFontLoaded.set(true);
        this.exportStatus.set('Noto Sans loaded — ready to export. Upload a CJK font for Japanese/Chinese/Korean support.');
    }

    /** Handles the user uploading a custom .ttf font file. */
    protected onFontFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (!input.files?.[0]) {
            return;
        }
        const file = input.files[0];
        this.uploadedFontName.set(file.name);
        this.exportStatus.set(`Reading "${file.name}"…`);

        this.readFontFile(file).then(base64 => {
            this.uploadedFontData.set(base64);
            this.exportStatus.set(`"${file.name}" loaded — you can now export with the uploaded font.`);
        });
    }

    /** Export using the built-in Noto Sans font. */
    protected exportWithBuiltInFont(): void {
        if (!this.builtInFontData) {
            return;
        }

        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with Noto Sans…');

        const options = new IgxPdfExporterOptions('NotoSansExport');
        options.customFont = {
            name: 'NotoSans',
            data: this.builtInFontData
        };

        if (this.builtInBoldFontData) {
            options.customFont.bold = {
                name: 'NotoSans-Bold',
                data: this.builtInBoldFontData
            };
        }

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set(
                    'PDF exported with Noto Sans. Note: CJK characters (Japanese, Chinese, Korean) require a CJK font.'
                );
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    /** Export using the user-uploaded font file. */
    protected exportWithUploadedFont(): void {
        const fontData = this.uploadedFontData();
        if (!fontData) {
            return;
        }

        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with uploaded font…');

        const options = new IgxPdfExporterOptions('CustomFontExport');
        options.customFont = {
            name: 'CustomFont',
            data: fontData
        };

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set('PDF exported successfully with the uploaded font!');
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    /** Export with the default PDF font (Helvetica). */
    protected exportWithDefaultFont(): void {
        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with default font (Helvetica)…');

        const options = new IgxPdfExporterOptions('DefaultFontExport');

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set(
                    'PDF exported — non-Latin characters may not render correctly with the default Helvetica font.'
                );
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    private readFontFile(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.includes(',') ? result.split(',')[1] : result;
                resolve(base64);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }
}
```
```html
<section class="container">
    <p class="description">
        This sample ships with <a href="https://fonts.google.com/noto/specimen/Noto+Sans" target="_blank">Noto Sans</a>,
        which covers Latin, Cyrillic, and Greek characters. For <strong>Japanese, Chinese, or Korean</strong> support,
        download <a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP" target="_blank">Noto Sans JP</a>
        (or another CJK font) and upload the <code>.ttf</code> file below.
    </p>

    @if (builtInFontLoading()) {
        <p class="status loading">Loading built-in Noto Sans font…</p>
    }

    <div class="font-upload">
        <label for="fontFile">Upload a custom font (.ttf):</label>
        <input
            id="fontFile"
            type="file"
            accept=".ttf,.otf,.woff"
            (change)="onFontFileSelected($event)"
        />
        @if (uploadedFontName()) {
            <span class="file-name">{{ uploadedFontName() }}</span>
        }
    </div>

    <div class="export-buttons">
        <button
            (click)="exportWithBuiltInFont()"
            [disabled]="!canExportBuiltIn()"
        >
            Export with Noto Sans
        </button>
        <button
            (click)="exportWithUploadedFont()"
            [disabled]="!canExportUploaded()"
        >
            Export with Uploaded Font
        </button>
        <button
            (click)="exportWithDefaultFont()"
            [disabled]="isExporting()"
        >
            Export with Default Font
        </button>
    </div>

    @if (exportStatus()) {
        <p class="status">{{ exportStatus() }}</p>
    }

    <igx-grid #grid [data]="data()" [autoGenerate]="false" height="320px">
        <igx-column field="Name" header="Name / Име / 名前"></igx-column>
        <igx-column field="City" header="City / Град / 都市"></igx-column>
        <igx-column field="Product" header="Product / Продукт / 製品"></igx-column>
        <igx-column field="Amount" header="Amount" dataType="number"></igx-column>
    </igx-grid>
</section>
```
```scss
.container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
}

.description {
    color: #555;
    max-width: 800px;

    a {
        color: #0078d4;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.font-upload {
    display: flex;
    align-items: center;
    gap: 8px;

    input[type="file"] {
        // Hide the default input
        position: absolute;
        opacity: 0;
        width: 0.1px;
        height: 0.1px;
    }

    label {
        font-weight: 500;
        padding: 10px 20px;
        background-color: #fff;
        border: 2px dashed #0078d4;
        border-radius: 6px;
        cursor: pointer;
        color: #0078d4;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
            background-color: #0078d4;
            color: white;
            border-style: solid;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 120, 212, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }

    .file-name {
        color: #28a745;
        font-size: 0.9em;
        font-weight: 500;
        padding: 6px 12px;
        background-color: #e8f5e9;
        border-radius: 4px;
        border: 1px solid #28a745;
    }
}

.export-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    button {
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;

        &:not(:disabled):hover {
            background-color: #e8e8e8;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:first-child {
            background-color: #0078d4;
            color: white;
            border-color: #0078d4;

            &:not(:disabled):hover {
                background-color: #106ebe;
            }
        }
    }
}

.status {
    padding: 8px 12px;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-size: 0.9em;

    &.loading {
        color: #0078d4;
        font-style: italic;
    }
}
```

<div class="divider--half"></div>

## Known Limitations

| Limitation | Description |
|---|---|
| Wide PDF layouts | Very wide grids can force PDF columns to shrink to fit the page. Apply explicit column widths or hide low‑priority fields before exporting to keep the document legible. |

## API References

The PDF Exporter service has a few more APIs to explore, which are listed below.

- [`IgxPdfExporterService API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html)
- [`IgxPdfExporterOptions API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporteroptions.html)

Additional components that were used:

- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)