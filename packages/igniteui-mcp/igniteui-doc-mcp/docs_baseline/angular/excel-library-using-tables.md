---
title: Angular Excel Library| Using Tables | Infragistics
_description: Use Infragistics' Angular excel library's table functionality to format your data in rows and columns. View Ignite UI for Angular excel tutorials for more information!
_keywords: Excel library, tables, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "WorksheetTable", "Worksheet", "SortSettings"]
_tocName: Using Tables
_premium: true
---

# Angular Using Tables

The Infragistics Angular Excel Engine's [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html) functionality allows you to format your data in rows and columns The data in a worksheet table can be managed independently from the data in the other rows and columns in a [`worksheet`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#worksheet).

<!--## Angular Using Tables Example


`sample="/excel/excel-library/working-with-tables", height="500", alt="Angular Using Tables Example"`


-->

<div class="divider--half"></div>

## Adding a Table to a Worksheet

Worksheet tables in the Infragistics Angular Excel Engine are represented by the [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html) object and are added in the worksheet's [`tables`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#tables) collection. In order to add a table, you need to invoke the `Add` method on this collection. In this method, you can specify the region in which you would like to add a table, whether or not the table should contain headers, and optionally, specify the table's style as a [`WorksheetTableStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettablestyle.html) object.

The following code demonstrates how you can add a table with headers to a [`worksheet`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#worksheet) spanning a region of A1 to G10, where A1 to G1 will be the column headers:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");

worksheet.tables().add("A1:G10", true);
```

Once you have added a table, you can modify it by adding or deleting rows and columns by calling the [`insertColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#insertColumns), [`insertDataRows`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#insertDataRows), [`deleteColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#deleteColumns), or [`deleteDataRows`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#deleteDataRows) methods on the [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html). You can also set a new table range by using the [`resize`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#resize) method of the table.

The following code snippet shows the usage of these methods:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

//Will add 5 columns at index 1.
table.insertColumns(1, 5);

//Will add 5 rows at index 0.
table.insertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.deleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.deleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.resize("A1:G15");
```

## Filtering Tables

Filtering is done by applying a filter on a column in the [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html). When the filter is applied on a column, all filters in the table will be reevaluated to determine which rows meet the criteria of all filters applied.

If the data in the table is subsequently changed or you change the `Hidden` property of the rows, the filter conditions will not automatically reevaluate. The filter conditions in a table are only reapplied when table column filters are added, removed, modified, or when the [`reapplyFilters`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#reapplyFilters) method is called on the table.

The following are the filter types available to the columns of your [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html):

- [`AverageFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.averagefilter.html) - Cells can be filtered based on whether they are above or below the average value of all cells in the column.
- [`CustomFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.customfilter.html) - Cells can be filtered based on one or more custom conditions.
- [`DatePeriodFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.dateperiodfilter.html) - Only cells with dates in a specific month or quarter of any year will be displayed.
- [`FillFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fillfilter.html) - Only cells with a specific fill will be displayed.
- [`FixedValuesFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fixedvaluesfilter.html) - Cells which only match specific display values or which fall within a specific group of dates/times will be displayed.
- [`FontColorFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fontcolorfilter.html) - Only cells with a specific font color will be displayed.
- [`RelativeDateRangeFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.relativedaterangefilter.html) - Cells with date values can be filtered based on whether they occur within a relative time range of the date when the filter was applied, such as the next day or previous quarter.
- [`TopOrBottomFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.toporbottomfilter.html) - This filter allows for filtering the top or bottom N values. It also allows filtering the top or bottom N% values.
- [`YearToDateFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.yeartodatefilter.html) - Cells with date values can be filtered if they occur between the start of the year and the date on which the filter was applied.

The following code snippet demonstrates how to apply an "above average" filter to a [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html)'s first column:

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).applyAverageFilter(AverageFilterType.AboveAverage);
```

## Sorting Tables

Sorting is done by setting a sorting condition on a table column. When a sorting condition is set on a column, all sorting conditions in the table will be reevaluated to determine the order of the cells in the table. When cells need to be moved to meet their sort criteria, the entire row of cells in the table is moved as a unit.

If the data in the table is subsequently changed, the sort conditions do not automatically reevaluate. The sort conditions in a table are only reapplied when sort conditions are added, removed, modified, or when the [`reapplySortConditions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#reapplySortConditions) method is called on the table. When sorting conditions are reevaluated, only the visible cells are sorted. All cells in hidden rows are kept in place.

In addition to accessing sort conditions from the table columns, they are also exposed off the [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html)'s [`sortSettings`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#sortSettings) property's [`sortConditions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sortsettings\`1.html#sortConditions) collection. This is an ordered collection of columns/sort condition pairs. The order of this collection is the precedence of the sorting.

The following sort condition types are available to set on columns:

- [`OrderedSortCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.orderedsortcondition.html) - Sort cells in an ascending or descending order based on their value.
- [`CustomListSortCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.customlistsortcondition.html) - Sort cells in a defined order based on their text or display value. For example, this might be useful for sorting days as they appear on a calendar, rather than alphabetically.
- [`FillSortCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fillsortcondition.html) - Sort cells based on whether their fill is a specific pattern or gradient.
- [`FontColorSortCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fontcolorsortcondition.html) - Sort cells based on whether their font is a specific color.

There is also a [`caseSensitive`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sortsettings\`1.html#caseSensitive) property on the [`sortSettings`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#sortSettings) of the [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html) to determine whether strings should be sorted case sensitively or not.

The following code snippet demonstrates how to apply an [`OrderedSortCondition`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.orderedsortcondition.html) to a [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html):

```ts
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = this.workbook.worksheets().add("Sheet1");
var table = worksheet.tables().add("A1:G10", true);

table.columns(0).sortCondition = new OrderedSortCondition(SortDirection.Ascending);

//Alternative:
table.sortSettings.sortConditions().addItem(table.columns(0), new OrderedSortCondition(SortDirection.Ascending));
```

## API References

- [`deleteColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#deleteColumns)
- [`deleteDataRows`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#deleteDataRows)
- [`FillFilter`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.fillfilter.html)
- [`insertColumns`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#insertColumns)
- [`insertDataRows`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#insertDataRows)
- [`sortConditions`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sortsettings\`1.html#sortConditions)
- [`sortSettings`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html#sortSettings)
- [`tables`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html#tables)
- [`WorksheetTableStyle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettablestyle.html)
- [`WorksheetTable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheettable.html)
