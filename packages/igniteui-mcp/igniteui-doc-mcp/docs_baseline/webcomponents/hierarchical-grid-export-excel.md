---
title: "Web Components Hierarchical Grid Exporting - Ignite UI for Web Components"
description: With Ignite UI for Web Components Hierarchical Grid exporting you can export grid data to Excel, CSV, and PDF formats while preserving features like filtering, sorting, and the current grid state.
keywords: "Web Components, Hierarchical Grid, Hierarchical Grid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/export-excel"
llms:
  description: "The Ignite UI for Web Components Hierarchical Grid provides data export functionality through the Grid Toolbar Exporter component."
_componentKey: HierarchicalGrid
_tocName: Exporting
_premium: true
---
# Web Components Hierarchical Grid Exporting

The Ignite UI for Web Components Hierarchical Grid provides data export functionality through the Grid Toolbar Exporter component. You can export the displayed data to Excel, CSV, or PDF formats. Excel exports use the MS Excel table format, which supports features like filtering and sorting. To enable exporting, place the [`IgcGridToolbarExporter`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarExporterComponent) inside the grid's toolbar. By default, all export formats are enabled.

## Web Components Exporting Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Export Multi Column Headers Grid

You can export [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) with defined [multi-column headers](multi-column-headers.md). All headers are reflected in the exported Excel file as they are displayed in the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent). If you want to exclude the defined multi-column headers from the exported data, set the `ExporterOption` [`IgcExporterOptionsBase.ignoreMultiColumnHeaders`](mcp:get_api_reference?platform=webcomponents&component=IgcExporterOptionsBase&member=ignoreMultiColumnHeaders) to `true`.

**Note:** 
The exported `IgcHierarchicalGrid` will not be formatted as a table, since Excel tables do not support multiple column headers.

**Note:** 
The exported [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) will not be formatted as a table, since Excel tables do not support multiple column headers.

**Note:** 
[`IgcGridToolbarExporter`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarExporterComponent) is also configured to demonstrate how you can control which export formats are available to end users. Use the toolbar exporter options to toggle Excel, CSV, or PDF buttons:
- `export-excel`, `export-csv`, `export-pdf`
- `exportExcel`, `exportCsv`, `exportPdf`
- [`ExportExcel`](mcp:get_api_reference?platform=webcomponents&component=IgcGridToolbarExporterComponent&member=exportExcel), `ExportCsv`, `ExportPdf`

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Export Grid with Frozen Column Headers

By default, the Excel Exporter service exports the grid with scrollable (unfrozen) column headers. In many scenarios you may want to freeze all headers at the top of the exported Excel file so they always stay in view as the user scrolls through the records. To achieve this, set the `ExporterOption` [`IgcExporterOptionsBase.freezeHeaders`](mcp:get_api_reference?platform=webcomponents&component=IgcExporterOptionsBase&member=freezeHeaders) to `true`.

**Note:** 
PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.


```ts
constructor() {
  var hGridToolbarExporter = document.getElementById('hGridToolbarExporter') as IgcGridToolbarExporterComponent;
  hGridToolbarExporter.addEventListener("exportStarted", this.webGridExportEventFreezeHeaders);
}

public webGridExportEventFreezeHeaders(args: CustomEvent<IgcExporterEvent>): void {
  args.detail.options.freezeHeaders = true;
}
```

## Known Limitations

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Exporting pinned columns|In the exported Excel file, the pinned columns will not be frozen but will be displayed in the same order as they appear in the grid.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

## API References
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
